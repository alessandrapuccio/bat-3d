# pull_swings.R
# Pulls bat tracking frames for two test games from Snowflake and writes
# public/data/swings.json so the CRA dev server can serve it statically.
#
# Usage:
#   Rscript scripts/pull_swings.R
#
# Credentials are read from environment variables. Set them before running:
#   $env:SNOWFLAKE_UID = "your_uid"
#   $env:SNOWFLAKE_PWD = "your_pwd"
# Or create a .Renviron file in the project root with those two lines.

library(DBI)
library(odbc)
library(dplyr)
library(jsonlite)

snowflake_uid <- "kervais"
snowflake_pwd <- "KErWin116!"

if (snowflake_uid == "" || snowflake_pwd == "") {
  stop("Set SNOWFLAKE_UID and SNOWFLAKE_PWD environment variables before running.")
}

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
on.exit(DBI::dbDisconnect(snowflake))

DEFAULT_PLAY_ID <- 'b8bbf11a-44cd-3f4d-bb37-c2931e9be99c'

query <- "
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

message("Querying Snowflake...")
raw <- DBI::dbGetQuery(snowflake, query) |> as_tibble()
message(sprintf("Fetched %d rows across %d swings.", nrow(raw), n_distinct(raw$PLAY_ID)))

# Nest frames by PLAY_ID into a list, each entry ordered by SEC_FROM_PITCH_RELEASE
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

# Write to public/data/ inside the bat-3d project directory.
# Works whether you run via Rscript or source() from RStudio with the project open.
project_root <- "C:/Users/alessandra.puccio/bat-3d"
out_dir  <- file.path(project_root, "public", "data")
if (!dir.exists(out_dir)) dir.create(out_dir, recursive = TRUE)
out_path <- file.path(out_dir, "swings.json")

output <- list(
  default_play_id = DEFAULT_PLAY_ID,
  swings          = swings_list
)

write(toJSON(output, auto_unbox = TRUE, pretty = TRUE), out_path)
message(sprintf("Wrote %s", out_path))
