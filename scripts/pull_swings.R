# pull_swings.R
# Pulls bat tracking frames from Snowflake and game/play metadata from SQL Server,
# then writes public/data/swings.json for the CRA dev server.
#
# Usage:
#   Rscript scripts/pull_swings.R

library(DBI)
library(odbc)
library(RODBC)
library(dplyr)
library(jsonlite)

snowflake_uid <- "kervais"
snowflake_pwd <- "KErWin116!"

if (snowflake_uid == "" || snowflake_pwd == "") {
  stop("Set snowflake_uid and snowflake_pwd before running.")
}

# ---------------------------------------------------------------------------
# 1. Pull frame-by-frame tracking data from Snowflake
# ---------------------------------------------------------------------------
snowflake <- DBI::dbConnect(
  odbc::odbc(),
  .connection_string = paste0(
    "Driver=SnowflakeDSIIDriver;",
    "Server=mariners-mariners.snowflakecomputing.com;",
    "Uid=", snowflake_uid, ";",
    "Pwd=", snowflake_pwd, ";",
    "Port=443;",
    "Warehouse=QUERY_MED;",
    "Database=BBOPS;",
    "Schema=PUBLIC"
  )
)
on.exit(DBI::dbDisconnect(snowflake), add = TRUE)

DEFAULT_PLAY_ID <- 'b8bbf11a-44cd-3f4d-bb37-c2931e9be99c'

tracking_query <- "
SELECT
    GAME_PK,
    PLAY_ID,
    HANDLE_X, HANDLE_Y, HANDLE_Z,
    HEAD_X,   HEAD_Y,   HEAD_Z,
    SEC_FROM_PITCH_RELEASE,
    FRAME_FROM_PITCH_RELEASE,
    FRAME_FROM_CONTACT,
    SEC_FROM_CONTACT
FROM BBOPS.PUBLIC.HAWKEYE_BATTER_TRACKING
WHERE HEAD_X IS NOT NULL
  AND (
    GAME_PK IN (823131, 823132)
    OR PLAY_ID = 'b8bbf11a-44cd-3f4d-bb37-c2931e9be99c'
  )
ORDER BY PLAY_ID, SEC_FROM_PITCH_RELEASE
"

message("Querying Snowflake for tracking data...")
raw <- DBI::dbGetQuery(snowflake, tracking_query) |> as_tibble()
message(sprintf("Fetched %d rows across %d swings.", nrow(raw), n_distinct(raw$PLAY_ID)))

# ---------------------------------------------------------------------------
# 2. Pull game/play metadata from SQL Server
# ---------------------------------------------------------------------------
message("Querying SQL Server for game/play metadata...")
dw01 <- odbcDriverConnect("Driver={SQL Server};server=Baseball-DW01;trusted_connection=yes")

info_raw <- sqlQuery(dw01, "
  SELECT playid, game_pk, CONVERT(date, Date) AS Date,
         Pitcher, Batter, BatterSide, PlayResult
  FROM mariners.dbo.stage_get_fx_values_V2
  WHERE game_pk IN (823131, 823132)
", stringsAsFactors = FALSE)

odbcClose(dw01)

# sqlQuery returns a character vector (not a data frame) on error
if (!is.data.frame(info_raw)) {
  warning("SQL Server query failed — labels will fall back to play IDs.\nError: ", paste(info_raw, collapse = "\n"))
  info_raw <- data.frame(PLAYID = character(), DATE = character(),
                         PITCHER = character(), BATTER = character(),
                         BATTERSIDE = character(), PLAYRESULT = character(),
                         stringsAsFactors = FALSE)
} else {
  # Normalize to uppercase to match Snowflake column names
  names(info_raw) <- toupper(names(info_raw))
  message(sprintf("SQL Server returned %d rows.", nrow(info_raw)))
  message("Sample play IDs from SQL Server: ", paste(head(info_raw$PLAYID, 3), collapse = ", "))
  message("Sample play IDs from Snowflake:  ", paste(head(names(swings_list), 3), collapse = ", "))
}

# Build a display label per play: "MM/DD/YYYY: Batter (Side) vs. Pitcher (Result)"
if (nrow(info_raw) > 0) {
  info_raw <- info_raw |>
    mutate(
      LABEL = sprintf(
        "%s: %s (%s) vs. %s (%s)",
        format(as.Date(DATE), "%m/%d/%Y"),
        BATTER, BATTERSIDE, PITCHER, PLAYRESULT
      )
    )
}

labels_lookup <- if (nrow(info_raw) > 0) setNames(info_raw$LABEL, tolower(info_raw$PLAYID)) else character(0)
message(sprintf("Metadata loaded for %d plays.", nrow(info_raw)))

# ---------------------------------------------------------------------------
# 3. Build output JSON
# ---------------------------------------------------------------------------
# Nest frames by PLAY_ID
swings <- raw |>
  group_by(PLAY_ID) |>
  group_split() |>
  setNames(sapply(group_split(group_by(raw, PLAY_ID)), \(d) d$PLAY_ID[1]))

swings_list <- lapply(swings, function(d) {
  lapply(seq_len(nrow(d)), function(i) {
    list(
      SEC_FROM_PITCH_RELEASE   = d$SEC_FROM_PITCH_RELEASE[i],
      FRAME_FROM_PITCH_RELEASE = d$FRAME_FROM_PITCH_RELEASE[i],
      FRAME_FROM_CONTACT       = d$FRAME_FROM_CONTACT[i],
      SEC_FROM_CONTACT         = d$SEC_FROM_CONTACT[i],
      handle = list(x = d$HANDLE_X[i], y = d$HANDLE_Y[i], z = d$HANDLE_Z[i]),
      head   = list(x = d$HEAD_X[i],   y = d$HEAD_Y[i],   z = d$HEAD_Z[i])
    )
  })
})

# Build labels map — fall back to raw PLAY_ID if no metadata found
all_ids     <- names(swings_list)
labels_list <- setNames(
  lapply(all_ids, function(pid) {
    if (pid == DEFAULT_PLAY_ID) return("Julio Bomb")
    lbl <- labels_lookup[pid]
    if (!is.null(lbl) && !is.na(lbl)) lbl else pid
  }),
  all_ids
)

project_root <- "C:/Users/alessandra.puccio/bat-3d"
out_dir  <- file.path(project_root, "public", "data")
if (!dir.exists(out_dir)) dir.create(out_dir, recursive = TRUE)
out_path <- file.path(out_dir, "swings.json")

output <- list(
  default_play_id = DEFAULT_PLAY_ID,
  swings          = swings_list,
  labels          = labels_list
)

write(toJSON(output, auto_unbox = TRUE, pretty = TRUE), out_path)
message(sprintf("Wrote %s", out_path))
