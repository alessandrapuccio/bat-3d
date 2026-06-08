invisible(sapply(FUN = source,
                 X = list.files(grep('function_bank$', list.dirs(getwd(), recursive = T, full.names = T), value = T), pattern = '[.]R$', recursive = T, full.names = T)))
library(xgboost)
library(ggtext)

apps = odbcDriverConnect(connection = "Driver={SQL Server};server=Baseball-DW01;trusted_connection=yes")

query_text = paste0(
  "SELECT BatterId, BatterSide, AVG(com_adj_contact_point) AS mean_contact_depth, AVG(com_adj_contact_point_AA) AS mean_contact_depth_AA
FROM BBOPS.Analysts.bat_tracking_adjusted_hawkeye
WHERE Level = 'MLB' AND YEAR >= 2025
GROUP BY BatterId, BatterSide"
)

t1 = Sys.time()
grouped_contact_depth = sqlQuery(apps, query_text, stringsAsFactors = FALSE)
t2 = Sys.time()

duration = difftime(t2, t1)

cat(paste0('Contact depth pulled: ', round(duration, 1), ' ', units(duration), '\n'))

target_org = "DET"

import_rosters = pull_all_org_rosters()

rosters = import_rosters %>%
  filter(Org == target_org,
         Status == "ACT",
         is_pitcher == 0)

batter_ids = rosters$MLBAM_ID
#c(663728, 680977, 702284, 668800, 670156, 660844, 689041, 686527, 608701, 647304, 669208, 670042, 668227, 641487, 640902, 645302, 677594)

query_text = paste0(
  "SELECT t1.*, t3.game_pk, t3.date, t3.balls, t3.strikes, t3.batter_name
   FROM BBOPS.Analysts.bat_tracking_adjusted_hawkeye t1
  LEFT JOIN BBOPS.dbo.pitches t3
     ON t1.PLAY_ID = t3.PLAY_ID
   WHERE t1.BatterId IN (",
  paste0(batter_ids, collapse = ", "),
  ") AND t1.YEAR >= 2026
  "
)

t1 = Sys.time()
these_hawkeye_swing_metrics = sqlQuery(apps, query_text, stringsAsFactors = FALSE)
t2 = Sys.time()

duration = difftime(t2, t1)

cat(paste0('Swing metrics pulled: ', round(duration, 1), ' ', units(duration), '\n'))

these_hawkeye_ids = these_hawkeye_swing_metrics %>% 
  pull(PLAY_ID)

odbcClose(apps)

connection_string = paste0(
  "Driver=SnowflakeDSIIDriver;Server=", "mariners-mariners.snowflakecomputing.com",
  ";Uid=", "samuel.wirth", ";Pwd=","ssLzNBkP26Fjkh4",";Port=", "443",
  ";Warehouse=", "QUERY_MED",
  ";Database=", "statcast",
  ";Schema=", "public"
)

sf = dbConnect(odbc::odbc(), .connection_string = connection_string)

query = paste0("
with t_bat_ts as (
select play_id,
--dominant_side,
sec_from_contact,
frame_from_contact,
sec_from_pitch_release,
head_x,
head_y,
head_z,
handle_x,
handle_y,
handle_z,
handle_x-head_x as v_x,
handle_y-head_y as v_y,
handle_z-head_z as v_z,
sqrt(square(handle_x-head_x)+square(handle_y-head_y)+square(handle_z-head_z)) as l_bat,
(handle_x-head_x)/nullif(sqrt(square(handle_x-head_x)+square(handle_y-head_y)+square(handle_z-head_z)),0) as u_x,
(handle_y-head_y)/nullif(sqrt(square(handle_x-head_x)+square(handle_y-head_y)+square(handle_z-head_z)),0) as u_y,
(handle_z-head_z)/nullif(sqrt(square(handle_x-head_x)+square(handle_y-head_y)+square(handle_z-head_z)),0) as u_z,
sqrt(square((handle_x-head_x)/nullif(sqrt(square(handle_x-head_x)+square(handle_y-head_y)+square(handle_z-head_z)),0))+square((handle_y-head_y)/nullif(sqrt(square(handle_x-head_x)+square(handle_y-head_y)+square(handle_z-head_z)),0))+square((handle_z-head_z)/nullif(sqrt(square(handle_x-head_x)+square(handle_y-head_y)+square(handle_z-head_z)),0))) as check_u,
0.5*(handle_x-head_x)/nullif(sqrt(square(handle_x-head_x)+square(handle_y-head_y)+square(handle_z-head_z)),0)+head_x as sweetspot_x,
0.5*(handle_y-head_y)/nullif(sqrt(square(handle_x-head_x)+square(handle_y-head_y)+square(handle_z-head_z)),0)+head_y as sweetspot_y,
0.5*(handle_z-head_z)/nullif(sqrt(square(handle_x-head_x)+square(handle_y-head_y)+square(handle_z-head_z)),0)+head_z as sweetspot_z
from bbops.analysts.biomech_hawkeye_batter_tracking_filtered
where head_x is not null
and play_id IN ('",
               paste0(these_hawkeye_ids, collapse = "', '"),
               "')
and SEC_FROM_PITCH_RELEASE > 0
and FRAME_FROM_CONTACT <= 5
)
select *
from t_bat_ts
where head_x is not null
order by play_id,sec_from_pitch_release asc
")

t1 = Sys.time()
snowflake_bat_tracking = dbGetQuery(sf, query)
t2 = Sys.time()

duration = difftime(t2, t1)
cat(paste0('All bat positions pulled: ', round(duration, 1), ' ', units(duration), '\n'))

query = glue::glue("
SELECT *,
contact_handle_position_x-contact_head_position_x as v_x,
contact_handle_position_y-contact_head_position_y as v_y,
contact_handle_position_z-contact_head_position_z as v_z,
sqrt(square(contact_handle_position_x-contact_head_position_x)+square(contact_handle_position_y-contact_head_position_y)+square(contact_handle_position_z-contact_head_position_z)) as l_bat,
(contact_handle_position_x-contact_head_position_x)/nullif(sqrt(square(contact_handle_position_x-contact_head_position_x)+square(contact_handle_position_y-contact_head_position_y)+square(contact_handle_position_z-contact_head_position_z)),0) as u_x,
(contact_handle_position_y-contact_head_position_y)/nullif(sqrt(square(contact_handle_position_x-contact_head_position_x)+square(contact_handle_position_y-contact_head_position_y)+square(contact_handle_position_z-contact_head_position_z)),0) as u_y,
(contact_handle_position_z-contact_head_position_z)/nullif(sqrt(square(contact_handle_position_x-contact_head_position_x)+square(contact_handle_position_y-contact_head_position_y)+square(contact_handle_position_z-contact_head_position_z)),0) as u_z,
sqrt(square((contact_handle_position_x-contact_head_position_x)/nullif(sqrt(square(contact_handle_position_x-contact_head_position_x)+square(contact_handle_position_y-contact_head_position_y)+square(contact_handle_position_z-contact_head_position_z)),0))+square((contact_handle_position_y-contact_head_position_y)/nullif(sqrt(square(contact_handle_position_x-contact_head_position_x)+square(contact_handle_position_y-contact_head_position_y)+square(contact_handle_position_z-contact_head_position_z)),0))+square((contact_handle_position_z-contact_head_position_z)/nullif(sqrt(square(contact_handle_position_x-contact_head_position_x)+square(contact_handle_position_y-contact_head_position_y)+square(contact_handle_position_z-contact_head_position_z)),0))) as check_u,
0.5*(contact_handle_position_x-contact_head_position_x)/nullif(sqrt(square(contact_handle_position_x-contact_head_position_x)+square(contact_handle_position_y-contact_head_position_y)+square(contact_handle_position_z-contact_head_position_z)),0)+contact_head_position_x as contact_sweetspot_position_x,
0.5*(contact_handle_position_y-contact_head_position_y)/nullif(sqrt(square(contact_handle_position_x-contact_head_position_x)+square(contact_handle_position_y-contact_head_position_y)+square(contact_handle_position_z-contact_head_position_z)),0)+contact_head_position_y as contact_sweetspot_position_y,
0.5*(contact_handle_position_z-contact_head_position_z)/nullif(sqrt(square(contact_handle_position_x-contact_head_position_x)+square(contact_handle_position_y-contact_head_position_y)+square(contact_handle_position_z-contact_head_position_z)),0)+contact_head_position_z as contact_sweetspot_position_z
FROM BBOPS.PUBLIC.HAWKEYE_BAT_METRICS
WHERE play_id IN ('",
                   paste0(these_hawkeye_ids, collapse = "', '"),
                   "')
")

t1 = Sys.time()
our_contact_point_position = dbGetQuery(sf, query)
t2 = Sys.time()

duration = difftime(t2, t1)
cat(paste0('Contact points pulled: ', round(duration, 1), ' ', units(duration), '\n'))

query = paste0("

with event_frames as (
                select bt.play_id,
                bt.mid_hip_y, 
                bt.l_hip_y, 
                bt.r_hip_y, 
                bt.mid_hip_x, 
                bt.l_hip_x, 
                bt.r_hip_x, 
                bt.mid_hip_z, 
                bt.l_hip_z, 
                bt.r_hip_z, 
                bt.sec_from_contact, 
                bef.ball_contact - bt.frame_from_contact as frame_no, 
                bef.ball_contact, bef.ball_release,
                ((mid_hip_y + l_hip_y + r_hip_y)/3) as comb_hip_y, 
                ((mid_hip_x + l_hip_x + r_hip_x)/3) as comb_hip_x
                from BBOPS.PUBLIC.HAWKEYE_BATTER_TRACKING bt
                left join BBOPS.ANALYSTS.BIOMECH_HAWKEYE_BATTER_EVENT_FRAMES bef
                on bt.play_id = bef.play_id
                where frame_no - bef.ball_release >= -10
                and frame_no - bef.ball_release <= 10
                and bt.play_id IN ('",
               paste0(these_hawkeye_ids, collapse = "', '"),
               "')
            )

            select play_id, 
            avg(mid_hip_y) mid_hip_y , 
            avg(l_hip_y) l_hip_y , 
            avg(r_hip_y) r_hip_y , 
            avg(mid_hip_z) mid_hip_z , 
            avg(l_hip_z) l_hip_z , 
            avg(r_hip_z) r_hip_z , 
            avg(comb_hip_y) comb_hip_y , 
            avg(mid_hip_x) mid_hip_x , 
            avg(l_hip_x) l_hip_x , 
            avg(r_hip_x) r_hip_x , 
            avg(comb_hip_x) comb_hip_x , 
            avg(sec_from_contact) sec_from_contact , 
            avg(frame_no) frame_no 
            from event_frames
            group by play_id
")

t1 = Sys.time()
our_hip_queries = dbGetQuery(sf, query)
t2 = Sys.time()

query = paste0("

with event_frames as (
                select bt.play_id,
                bt.mid_hip_y, 
                bt.l_hip_y, 
                bt.r_hip_y, 
                bt.mid_hip_x, 
                bt.l_hip_x, 
                bt.r_hip_x, 
                bt.mid_hip_z, 
                bt.l_hip_z, 
                bt.r_hip_z, 
                bt.sec_from_contact, 
                bef.ball_contact - bt.frame_from_contact as frame_no, 
                bef.ball_contact, bef.ball_release,
                ((mid_hip_y + l_hip_y + r_hip_y)/3) as comb_hip_y, 
                ((mid_hip_x + l_hip_x + r_hip_x)/3) as comb_hip_x
                from bbops.hawkeye.v2026_batter_tracking bt
                left join BBOPS.ANALYSTS.BIOMECH_HAWKEYE_BATTER_EVENT_FRAMES bef
                on bt.play_id = bef.play_id
                where frame_no - bef.ball_release >= -10
                and frame_no - bef.ball_release <= 10
                and bt.play_id IN ('",
               paste0(these_hawkeye_ids, collapse = "', '"),
               "')
            )

            select play_id, 
            avg(mid_hip_y) mid_hip_y , 
            avg(l_hip_y) l_hip_y , 
            avg(r_hip_y) r_hip_y , 
            avg(mid_hip_z) mid_hip_z , 
            avg(l_hip_z) l_hip_z , 
            avg(r_hip_z) r_hip_z , 
            avg(comb_hip_y) comb_hip_y , 
            avg(mid_hip_x) mid_hip_x , 
            avg(l_hip_x) l_hip_x , 
            avg(r_hip_x) r_hip_x , 
            avg(comb_hip_x) comb_hip_x , 
            avg(sec_from_contact) sec_from_contact , 
            avg(frame_no) frame_no 
            from event_frames
            group by play_id
")

t1 = Sys.time()
our_hip_queries_26 = dbGetQuery(sf, query)
t2 = Sys.time()

duration = difftime(t2, t1)
cat(paste0('Hip points pulled: ', round(duration, 1), ' ', units(duration), '\n'))

our_hip_queries = rbind(our_hip_queries, our_hip_queries_26) %>% 
  group_by(PLAY_ID) %>% 
  slice(1) # some duplicate hip queries

t1_position = snowflake_bat_tracking %>% 
  filter(FRAME_FROM_CONTACT == -1) %>% 
  select(PLAY_ID, SWEETSPOT_X_T1 = SWEETSPOT_X, 
         SWEETSPOT_Y_T1 = SWEETSPOT_Y, SWEETSPOT_Z_T1 = SWEETSPOT_Z,
         HEAD_X_T1 = HEAD_X, 
         HEAD_Y_T1 = HEAD_Y, HEAD_Z_T1 = HEAD_Z)

t2_position = snowflake_bat_tracking %>% 
  filter(FRAME_FROM_CONTACT == -2) %>% 
  select(PLAY_ID, SWEETSPOT_X_T2 = SWEETSPOT_X, 
         SWEETSPOT_Y_T2 = SWEETSPOT_Y, SWEETSPOT_Z_T2 = SWEETSPOT_Z)

avg_hip_point_x = mean(abs(our_hip_queries$MID_HIP_X), na.rm = T)
avg_hip_point_y = mean(our_hip_queries$MID_HIP_Y, na.rm = T)
avg_hip_point_z = mean(our_hip_queries$MID_HIP_Z, na.rm = T)

hip_positions = our_hip_queries %>% 
  mutate(MID_HIP_X = abs(MID_HIP_X),
         y_adjustment = avg_hip_point_y - MID_HIP_Y,
         z_adjustment = avg_hip_point_z - MID_HIP_Z,
         x_adjustment = avg_hip_point_x - MID_HIP_X) %>% 
  select(PLAY_ID, MID_HIP_Y, y_adjustment, MID_HIP_X, x_adjustment,
         MID_HIP_Z, z_adjustment)

complete_swing_data = these_hawkeye_swing_metrics %>% 
  left_join(t1_position, by = c("PLAY_ID")) %>% 
  left_join(t2_position, by = c("PLAY_ID")) %>% 
  left_join(snowflake_bat_tracking, by = c("PLAY_ID"), relationship = "many-to-many") %>% 
  left_join(hip_positions, by = c("PLAY_ID")) %>% 
  filter(!is.na(SEC_FROM_CONTACT)) %>% 
  mutate(dx = SWEETSPOT_X_T1 - SWEETSPOT_X_T2,
         dy = SWEETSPOT_Y_T1 - SWEETSPOT_Y_T2,
         dz = SWEETSPOT_Z_T1 - SWEETSPOT_Z_T2,
         SWEETSPOT_X_T1 = ifelse(BatterSide == "Right", SWEETSPOT_X_T1*-1, SWEETSPOT_X_T1),
         HEAD_X_T1 = ifelse(BatterSide == "Right", HEAD_X_T1*-1, HEAD_X_T1),
         SWEETSPOT_Z = SWEETSPOT_Z,
         SWEETSPOT_Y = SWEETSPOT_Y,
         SWEETSPOT_Z_T1 = SWEETSPOT_Z_T1,
         SWEETSPOT_X = ifelse(BatterSide == "Right", SWEETSPOT_X*-1, SWEETSPOT_X),
         SWEETSPOT_X_T2 = SWEETSPOT_X_T1 - dy * tan(pi/180 * pred_haa_sf),
         SWEETSPOT_Z_T2 = SWEETSPOT_Z_T1 - dy * tan(pi/180 * pred_vaa_sf),
         #SWEETSPOT_X_T2 = ifelse(BatterSide == "Right", SWEETSPOT_X_T2*-1, SWEETSPOT_X_T2),
         SEC_FROM_CONTACT = ifelse(SEC_FROM_CONTACT == 0, -.001, SEC_FROM_CONTACT),
         SWEETSPOT_Y_T1 = SWEETSPOT_Y_T1 - com_adj_contact_point_AA + y_adjustment) %>% 
  select(PLAY_ID, BatterId, BatterSide, FRAME_FROM_CONTACT, SEC_FROM_CONTACT, bat_attack_direction = pred_haa_sf,
         bat_attack_angle = pred_vaa_sf, bat_angle = pred_hba, bat_tilt = pred_vaa_sf, SWEETSPOT_X, SWEETSPOT_Y,
         SWEETSPOT_Z, SWEETSPOT_Y_T1, SWEETSPOT_X_T1, SWEETSPOT_X_T2, SWEETSPOT_Z_T1, 
         SWEETSPOT_Z_T2, x_adjustment, y_adjustment, z_adjustment, swing_length, bat_speed,
         HEAD_X_T1, HEAD_Y_T1, HEAD_Z_T1)

xgb_sweetspot_x = readRDS("~/advance/adhoc_research/swings/swingerprints/models/xgb_sweetspot_x_model.rds")
xgb_sweetspot_y = readRDS("~/advance/adhoc_research/swings/swingerprints/models/xgb_sweetspot_y_model.rds")
xgb_sweetspot_z = readRDS("~/advance/adhoc_research/swings/swingerprints/models/xgb_sweetspot_z_model.rds")

xgb_head_x = readRDS("~/advance/adhoc_research/swings/swingerprints/models/xgb_head_x_model.rds")
xgb_head_y = readRDS("~/advance/adhoc_research/swings/swingerprints/models/xgb_head_y_model.rds")
xgb_head_z = readRDS("~/advance/adhoc_research/swings/swingerprints/models/xgb_head_z_model.rds")


xgb_features = c(
  "SEC_FROM_CONTACT",
  "FRAME_FROM_CONTACT",
  "SWEETSPOT_X_T1", "SWEETSPOT_X_T2",
  "SWEETSPOT_Y_T1",
  "SWEETSPOT_Z_T1", "SWEETSPOT_Z_T2",
  "HEAD_X_T1", "HEAD_Y_T1", "HEAD_Z_T1",
  "bat_attack_direction",
  "bat_attack_angle",
  "bat_angle",
  "bat_tilt",
  "x_adjustment",
  "y_adjustment",
  "z_adjustment",
  "swing_length",
  "bat_speed",
  "SWEETSPOT_X",
  "SWEETSPOT_Y",
  "SWEETSPOT_Z"
)

our_swing_ids = these_hawkeye_swing_metrics %>% 
  #filter(BatterTeam == "SEA") %>% #, BatterSide == "Left") %>% 
  pull(PLAY_ID)

swings = complete_swing_data %>% 
  filter(PLAY_ID %in% our_swing_ids)

X = select(swings, c(all_of(xgb_features), SWEETSPOT_X, SWEETSPOT_Y, SWEETSPOT_Z))

swings = swings %>% 
  mutate(
    pred_sweetspot_pos_x = predict(xgb_sweetspot_x, X %>% select(-c(SWEETSPOT_Y_T1, SWEETSPOT_Z_T1, SWEETSPOT_Z_T2, SWEETSPOT_X, SWEETSPOT_Y, SWEETSPOT_Z, HEAD_X_T1, HEAD_Y_T1, HEAD_Z_T1, SWEETSPOT_X, SWEETSPOT_Y, SWEETSPOT_Z, FRAME_FROM_CONTACT)) %>% as.matrix()),
    pred_sweetspot_pos_y = predict(xgb_sweetspot_y, X %>% select(-c(SWEETSPOT_X_T1, SWEETSPOT_X_T2, SWEETSPOT_Z_T1, SWEETSPOT_Z_T2, SWEETSPOT_X, SWEETSPOT_Y, SWEETSPOT_Z, HEAD_X_T1, HEAD_Y_T1, HEAD_Z_T1, SWEETSPOT_X, SWEETSPOT_Y, SWEETSPOT_Z, FRAME_FROM_CONTACT)) %>% as.matrix()),
    pred_sweetspot_pos_z = predict(xgb_sweetspot_z, X %>% select(-c(SWEETSPOT_Y_T1, SWEETSPOT_X_T1, SWEETSPOT_X_T2, SWEETSPOT_X, SWEETSPOT_Y, SWEETSPOT_Z, HEAD_X_T1, HEAD_Y_T1, HEAD_Z_T1, SWEETSPOT_X, SWEETSPOT_Y, SWEETSPOT_Z, FRAME_FROM_CONTACT)) %>% as.matrix()),
    flip = if_else(BatterSide == "Right", -1, 1),
    SWEETSPOT_X = SWEETSPOT_X * flip,
    pred_sweetspot_pos_x = pred_sweetspot_pos_x * flip
  ) %>% 
  select(-flip) %>% 
  mutate(x_diff = SWEETSPOT_X - pred_sweetspot_pos_x,
         y_diff = SWEETSPOT_Y - pred_sweetspot_pos_y,
         z_diff = SWEETSPOT_Z - pred_sweetspot_pos_z,
         batter_id_side = interaction(BatterId, BatterSide))


hip_adjustments = swings %>% 
  group_by(BatterId, BatterSide) %>% 
  summarise(x_adjustment = mean(x_adjustment, na.rm = T),
            y_adjustment = mean(y_adjustment, na.rm = T),
            z_adjustment = mean(z_adjustment, na.rm = T))

# model systemallicaly underpredicts z values... this is my workaround
z_pos_prediction_error_all = gam(z_diff ~ s(SEC_FROM_CONTACT), data = swings)
gc()
# z_pos_prediction_error_player = bam(z_diff ~ s(SEC_FROM_CONTACT, by = batter_id_side), data = swings)
# gc()

z_error_by_player = swings %>%
  group_by(batter_id_side, FRAME_FROM_CONTACT) %>%
  summarise(z_offset = mean(z_diff, na.rm = TRUE))

sweetspot_x = 0
sweetspot_z = 2.5

frame_from_contact_start = -35
frame_from_contact_end = 5

sec_from_contact_start = -.13
sec_from_contact_end = .015 

home_plate = data.frame(
  x = c(-8.5/12, 8.5/12, 8.5/12, 0, -8.5/12, -8.5/12),  
  y = c(0, 0, -8.5/12, -17/12, -8.5/12, 0),            
  z = c(0, 0, 0, 0, 0, 0)                               
)

zone = data.frame(
  x = c(-8.5/12, 8.5/12, 8.5/12, -8.5/12, -8.5/12),
  y = rep(0, 5),
  z = c(1.5, 1.5, 3.5, 3.5, 1.5)
)

left_batter_box = data.frame(
  x = c((-8.5 - 6 - 48)/12, (-8.5 - 6)/12, (-8.5 - 6)/12, (-8.5 - 6 - 48)/12, (-8.5 - 6 - 48)/12),
  y = c((-8.5 + 36)/12, (-8.5 + 36)/12,( -8.5 - 36)/12, (-8.5 - 36)/12, (-8.5 + 36)/12),
  z = rep(0, 5)
)

right_batter_box = data.frame(
  x = c((8.5 + 6)/12, (8.5 + 6 + 48)/12, (8.5 + 6 + 48)/12, (8.5 + 6)/12, (8.5 + 6)/12),
  y = c((-8.5 + 36)/12, (-8.5 + 36)/12, (-8.5 - 36)/12, (-8.5 - 36)/12, (-8.5 + 36)/12),
  z = rep(0, 5)
)

# start with arbitrary bat coordinates (flip for vR/vL??)
bat_knob_x = 1.602006
bat_knob_y = 1.597316
bat_knob_z = 3.18148
bat_head_x = -0.7035951
bat_head_y = 2.643554
bat_head_z = 2.179058

# bat_side_multiplier = ifelse(pitch$batter_hand == "Left", 1, -1)

cap_angles = seq(pi/2, -pi/2, length.out = 15)
cap_x = -40 - 1.5 * cos(cap_angles)
cap_y = 0.10875 * sin(cap_angles)
barrel_x = seq(-40, -10, length.out = 30)
barrel_top = rep(0.10875, length(barrel_x))
barrel_bottom = -barrel_top
taper_x = seq(-10, 10, length.out = 30)
taper_width = seq(0.10875, .05, length.out = 30)
taper_top = taper_width
taper_bottom = -taper_width
handle_x = seq(10, 28, length.out = 20)
handle_top = rep(.05, 20)
handle_bottom = rep(-0.05, 20)
knob_angles = seq(-pi/2, pi/2, length.out = 15)
knob_x = 28 + 1.5 * cos(knob_angles)
knob_y = 0.08 * sin(knob_angles)

bat = data.frame(
  x = c(cap_x, barrel_x, taper_x, handle_x, knob_x, 
        rev(handle_x), rev(taper_x), rev(barrel_x)),
  y = c(cap_y, barrel_top, taper_top, handle_top, knob_y,
        rev(handle_bottom), rev(taper_bottom), rev(barrel_bottom))
)

bat$x = max(bat$x) - (bat$x - min(bat$x))  
x_min = min(bat$x)
x_max = max(bat$x)
new_min = 0
new_max = 1  
bat$x = (bat$x - x_min) / (x_max - x_min) * (new_max - new_min) + new_min

dx = bat_head_x - bat_knob_x
dy = bat_head_y - bat_knob_y
dz = bat_head_z - bat_knob_z
bat_length = sqrt(dx^2 + dy^2 + dz^2)

bat_scaled = bat
bat_scaled$x = bat_scaled$x * bat_length

our_batters = these_hawkeye_swing_metrics %>% 
  count(batter_name, BatterId, BatterSide)  %>% 
  filter(!is.na(batter_name), n > 5) %>% 
  arrange(batter_name) 

library(webshot2)

tic()
pages = list()
tmp_dir = tempdir()

# top of loop ----

for (k in 1:nrow(our_batters)) {
  batter_id = our_batters$BatterId[k]
  batter_name = our_batters$batter_name[k]
  batter_side = our_batters$BatterSide[k]
  
  print(paste0(batter_name, " - ", batter_side, ": ", round(100*(k-1)/nrow(our_batters)), "%"))
  
  flip = ifelse(batter_side == 'Left', 1, -1)
  
  is_sh = ifelse(nrow(our_batters %>% filter(BatterId == batter_id)) > 1, 1, 0)
  
  batter_swings = these_hawkeye_swing_metrics %>% filter(BatterId == batter_id, BatterSide == batter_side)

  last_swing_date = suppressWarnings(max(as.Date(batter_swings$date), na.rm = T))
  last_observed_str = if (is.finite(last_swing_date)) {
    paste0(as.integer(format(last_swing_date, "%m")), "/",
           as.integer(format(last_swing_date, "%d")), "/",
           format(last_swing_date, "%y"))
  } else {
    "N/A"
  }

  bat_angle = mean(batter_swings$hba, na.rm = T)
  bat_tilt = mean(batter_swings$vba, na.rm = T)
  attack_angle = mean(batter_swings$vaa_sf, na.rm = T)
  attack_direction = mean(batter_swings$haa_sf, na.rm = T)
  contact_depth = mean(batter_swings$com_adj_contact_point, na.rm = T)
  bat_speed = mean(batter_swings$bat_speed, na.rm = T)
  swing_length = mean(batter_swings$swing_length, na.rm = T)
  
  bat_angle_aa = mean(batter_swings$hba_AA, na.rm = T)
  bat_tilt_aa = mean(batter_swings$vba_AA, na.rm = T)
  attack_angle_aa = mean(batter_swings$vaa_sf_AA, na.rm = T)
  attack_direction_aa = mean(batter_swings$haa_sf_AA, na.rm = T)
  contact_depth_aa = mean(batter_swings$com_adj_contact_point_AA, na.rm = T)
  bat_speed_aa = mean(batter_swings$bat_speed_AA, na.rm = T)
  swing_length_aa = mean(batter_swings$swing_length_AA, na.rm = T)
  
  #sd taken at the aggregated player level - sourced from Trident
  
  bat_angle_sd = 3.7
  bat_tilt_sd = 3
  attack_angle_sd = 2.7
  attack_direction_sd = 2.41
  contact_depth_sd = .2
  bat_speed_sd = 2.6
  swing_length_sd = 0.3843786 # NOT FROM TRIDENT
  bat_speed_mean = 71.3
  swing_length_mean = 6# NOT FROM TRIDENT
  contact_depth_mean = 1.65
  
  bat_speed_pct = pnorm(bat_speed, bat_speed_mean, bat_speed_sd)
  swing_length_pct = pnorm(swing_length, swing_length_mean, swing_length_sd)
  contact_depth_pct = pnorm(contact_depth, contact_depth_mean, contact_depth_sd)
  
  bat_angle_tag = case_when(bat_angle_aa >= 2*bat_angle_sd ~ 'mega-hook',
                            bat_angle_aa >= bat_angle_sd ~ 'hook',
                            bat_angle_aa >= -bat_angle_sd ~ '',
                            bat_angle_aa >= 2*-bat_angle ~ 'poke',
                            TRUE ~ 'mega-poke')
  
  bat_tilt_tag = case_when(bat_tilt_aa >= 2*bat_tilt_sd ~ 'mega-frisbee',
                           bat_tilt_aa >= bat_tilt_sd ~ 'frisbee',
                           bat_tilt_aa >= -bat_tilt_sd ~ '',
                           bat_tilt_aa >= 2*-bat_tilt_sd ~ 'driver',
                           TRUE ~ 'mega-driver')
  
  attack_angle_tag = case_when(attack_angle_aa >= 2*attack_angle_sd ~ 'mega-uphill',
                               attack_angle_aa >= attack_angle_sd ~ 'uphill',
                               attack_angle_aa >= -attack_angle_sd ~ '',
                               attack_angle_aa >= 2*-attack_angle_sd ~ 'downhill',
                               TRUE ~ 'mega-downhill')
  
  attack_direction_tag = case_when(attack_direction_aa >= 2*attack_direction_sd ~ 'mega-yank',
                                   attack_direction_aa >= attack_direction_sd ~ 'yank',
                                   attack_direction_aa >= -attack_direction_sd ~ '',
                                   attack_direction_aa >= 2*-attack_direction_sd ~ 'push',
                                   TRUE ~ 'mega-push')
  
  contact_depth_tag = case_when(contact_depth_aa >= 2*contact_depth_sd ~ 'mega-out-front',
                                contact_depth_aa >= contact_depth_sd ~ 'out-front',
                                contact_depth_aa >= -contact_depth_sd ~ '',
                                contact_depth_aa >= 2*-contact_depth_sd ~ 'deep',
                                TRUE ~ 'mega-deep')
  
  bat_speed_tag = case_when(bat_speed_aa >= 2*bat_speed_sd ~ 'mega-fast',
                            bat_speed_aa >= bat_speed_sd ~ 'fast',
                            bat_speed_aa >= -bat_speed_sd ~ '',
                            bat_speed_aa >= 2*-bat_speed_sd ~ 'slow',
                            TRUE ~ 'mega-slow')
  
  swing_length_tag = case_when(swing_length_aa >= 2*swing_length_sd ~ 'mega-long',
                               swing_length_aa >= swing_length_sd ~ 'long',
                               swing_length_aa >= -swing_length_sd ~ '',
                               swing_length_aa >= 2*-swing_length_sd ~ 'short',
                               TRUE ~ 'mega-short')
  
  # need to redo MLB average for every batter because of pitch selection biases in sample...
  
  mlb_bat_angle = bat_angle - bat_angle_aa
  mlb_bat_tilt = bat_tilt - bat_tilt_aa 
  mlb_attack_angle = attack_angle - attack_angle_aa
  mlb_attack_direction = attack_direction - attack_direction_aa
  mlb_contact_depth = contact_depth - contact_depth_aa
  mlb_bat_speed = bat_speed - bat_speed_aa
  mlb_swing_length = swing_length - swing_length_aa
  
  adjustments = hip_adjustments %>%
    filter(BatterId == batter_id, BatterSide == batter_side)
  
  # need to compute bat head (x,y,z)
  
  angle = bat_angle * pi/180
  tilt = bat_tilt * pi/180
  
  u_x = cos(tilt) * cos(angle)
  u_y = cos(tilt) * sin(angle)
  u_z = sin(tilt)
  
  fake_swing = data.frame(
    FRAME_FROM_CONTACT = seq(frame_from_contact_start, frame_from_contact_end),
    SEC_FROM_CONTACT = seq(sec_from_contact_start, sec_from_contact_end, length.out = 41),
    bat_attack_direction = rep(attack_direction, 41),
    bat_attack_angle = rep(attack_angle, 41),
    bat_angle = rep(bat_angle, 41),
    bat_tilt = rep(bat_tilt, 41),
    bat_speed = rep(bat_speed, 41),
    swing_length = rep(swing_length, 41),
    SWEETSPOT_X_T1 = rep(sweetspot_x, 41),
    SWEETSPOT_Y_T1 = rep(contact_depth, 41),
    SWEETSPOT_Z_T1 = rep(sweetspot_z, 41),
    HEAD_X_T1 = rep(sweetspot_x - .5*u_x, 41),
    HEAD_Y_T1 = rep(contact_depth - .5*u_y, 41),
    HEAD_Z_T1 = rep(sweetspot_z + .5*u_z, 41),
    x_adjustment = rep(adjustments$x_adjustment, 41),
    y_adjustment = rep(adjustments$y_adjustment, 41),
    z_adjustment = rep(adjustments$z_adjustment, 41)
  ) %>% 
    mutate(SWEETSPOT_X_T2 = SWEETSPOT_X_T1 - .33 * tan(pi/180 * attack_direction),
           SWEETSPOT_Z_T2 = SWEETSPOT_Z_T1 - .33 * tan(pi/180 * attack_angle)) %>% 
    select(any_of(xgb_features))
  
  
  fake_swing = fake_swing %>% 
    mutate(pred_sweetspot_pos_x = predict(xgb_sweetspot_x, fake_swing %>% select(-c(SWEETSPOT_Y_T1, SWEETSPOT_Z_T1, SWEETSPOT_Z_T2, HEAD_X_T1, HEAD_Y_T1, HEAD_Z_T1, FRAME_FROM_CONTACT)) %>% as.matrix()),
           pred_sweetspot_pos_y = predict(xgb_sweetspot_y, fake_swing %>% select(-c(SWEETSPOT_X_T1, SWEETSPOT_X_T2, SWEETSPOT_Z_T1, SWEETSPOT_Z_T2, HEAD_X_T1, HEAD_Y_T1, HEAD_Z_T1, FRAME_FROM_CONTACT)) %>% as.matrix()),
           pred_sweetspot_pos_z = predict(xgb_sweetspot_z, fake_swing %>% select(-c(SWEETSPOT_Y_T1, SWEETSPOT_X_T1, SWEETSPOT_X_T2, HEAD_X_T1, HEAD_Y_T1, HEAD_Z_T1, FRAME_FROM_CONTACT)) %>% as.matrix())) %>% 
    rename(SWEETSPOT_X = pred_sweetspot_pos_x,
           SWEETSPOT_Y = pred_sweetspot_pos_y,
           SWEETSPOT_Z = pred_sweetspot_pos_z)
  
  fake_swing_pred = fake_swing %>% 
    mutate(pred_head_pos_x = predict(xgb_head_x, fake_swing %>% select(-c(SWEETSPOT_X_T1, SWEETSPOT_X_T2, SWEETSPOT_Y_T1, SWEETSPOT_Z_T1, SWEETSPOT_Z_T2, HEAD_Y_T1, HEAD_Z_T1, SEC_FROM_CONTACT)) %>% as.matrix()),
           pred_head_pos_y = predict(xgb_head_y, fake_swing %>% select(-c(SWEETSPOT_X_T1, SWEETSPOT_X_T2, SWEETSPOT_Y_T1, SWEETSPOT_Z_T1, SWEETSPOT_Z_T2, HEAD_X_T1, HEAD_Z_T1, SEC_FROM_CONTACT)) %>% as.matrix()),
           pred_head_pos_z = predict(xgb_head_z, fake_swing %>% select(-c(SWEETSPOT_X_T1, SWEETSPOT_X_T2, SWEETSPOT_Y_T1, SWEETSPOT_Z_T1, SWEETSPOT_Z_T2, HEAD_X_T1, HEAD_Y_T1, SEC_FROM_CONTACT)) %>% as.matrix()),
           batter_id_side = interaction(batter_id, batter_side)) %>% 
    rename(pred_sweetspot_pos_x = SWEETSPOT_X,
           pred_sweetspot_pos_y = SWEETSPOT_Y,
           pred_sweetspot_pos_z = SWEETSPOT_Z)
  
  player_z_diff = z_error_by_player %>%
    filter(batter_id_side == paste0(batter_id, ".", batter_side))
  
  fake_swing_pred = fake_swing_pred %>% 
    left_join(player_z_diff, by = "FRAME_FROM_CONTACT") %>% 
    mutate(z_offset = ifelse(is.na(z_offset), 0, z_offset),
           pred_sweetspot_pos_z = pred_sweetspot_pos_z + z_offset,
           pred_head_pos_z = pred_head_pos_z + z_offset)
  
  fake_swing_pred = fake_swing_pred %>%
    arrange(SEC_FROM_CONTACT) %>%
    mutate(idx = row_number())
  
  # exponential weights (later points weighted more heavily)
  n = nrow(fake_swing_pred)
  
  weights = abs(1/fake_swing_pred$SEC_FROM_CONTACT)
  
  # fit weighted smoothing splines
  sx = smooth.spline(
    x = fake_swing_pred$idx,
    y = fake_swing_pred$pred_sweetspot_pos_x,
    w = weights,
    spar = 0.5
  )
  
  sy = smooth.spline(
    x = fake_swing_pred$idx,
    y = fake_swing_pred$pred_sweetspot_pos_y,
    w = weights,
    spar = 0.5
  )
  
  sz = smooth.spline(
    x = fake_swing_pred$idx,
    y = fake_swing_pred$pred_sweetspot_pos_z,
    w = weights,
    spar = 0.5
  )
  
  hx = smooth.spline(
    x = fake_swing_pred$idx,
    y = fake_swing_pred$pred_head_pos_x,
    w = weights,
    spar = 0.5
  )
  
  hy = smooth.spline(
    x = fake_swing_pred$idx,
    y = fake_swing_pred$pred_head_pos_y,
    w = weights,
    spar = 0.5
  )
  
  hz = smooth.spline(
    x = fake_swing_pred$idx,
    y = fake_swing_pred$pred_head_pos_z,
    w = weights,
    spar = 0.5
  )
  
  final_z_fudge = 0#fake_swing_pred %>% filter(FRAME_FROM_CONTACT == 0) %>% pull(player_z_diff)
  
  fake_swing_pred = fake_swing_pred %>%
    mutate(
      pred_sweetspot_pos_x_smooth = predict(sx, idx)$y * flip,
      pred_sweetspot_pos_y_smooth = predict(sy, idx)$y + adjustments$y_adjustment,
      pred_sweetspot_pos_z_smooth = predict(sz, idx)$y - c(final_z_fudge),
      pred_head_pos_x_smooth = predict(hx, idx)$y * flip,
      pred_head_pos_y_smooth = predict(hy, idx)$y + adjustments$y_adjustment,
      pred_head_pos_z_smooth = predict(hz, idx)$y - c(final_z_fudge)
    )
  
  # bat head calculations
  mlb_angle = mlb_bat_angle * pi/180
  mlb_tilt = mlb_bat_tilt * pi/180
  
  u_x = cos(mlb_tilt) * cos(mlb_angle)
  u_y = cos(mlb_tilt) * sin(mlb_angle)
  u_z = sin(mlb_tilt)
  
  fake_mlb_swing = data.frame(
    FRAME_FROM_CONTACT = seq(frame_from_contact_start, frame_from_contact_end),
    SEC_FROM_CONTACT = seq(sec_from_contact_start, sec_from_contact_end, length.out = 41),
    bat_attack_direction = rep(mlb_attack_direction, 41),
    bat_attack_angle = rep(mlb_attack_angle, 41),
    bat_angle = rep(mlb_bat_angle, 41),
    bat_tilt = rep(mlb_bat_tilt, 41),
    bat_speed = rep(mlb_bat_speed, 41),
    swing_length = rep(mlb_swing_length, 41),
    SWEETSPOT_X_T1 = rep(sweetspot_x, 41),
    #SWEETSPOT_Y_T1 = rep(mlb_contact_depth, 41),
    SWEETSPOT_Y_T1 = rep(contact_depth, 41),
    SWEETSPOT_Z_T1 = rep(sweetspot_z, 41),
    HEAD_X_T1 = rep(sweetspot_x - .5*u_x, 41),
    # HEAD_Y_T1 = rep(mlb_contact_depth - .5*u_y, 41),
    HEAD_Y_T1 = rep(contact_depth - .5*u_y, 41),
    HEAD_Z_T1 = rep(sweetspot_z + .5*u_z, 41),
    x_adjustment = rep(adjustments$x_adjustment, 41), # what would the average swing look like if taken from where the batter lined up in the box?
    y_adjustment = rep(adjustments$y_adjustment, 41),
    z_adjustment = rep(adjustments$z_adjustment, 41)
  ) %>% 
    mutate(SWEETSPOT_X_T2 = SWEETSPOT_X_T1 - .33 * tan(pi/180 * attack_direction),
           SWEETSPOT_Z_T2 = SWEETSPOT_Z_T1 - .33 * tan(pi/180 * attack_angle)) %>% 
    select(any_of(xgb_features))
  
  fake_mlb_swing = fake_mlb_swing %>% 
    mutate(pred_sweetspot_pos_x = predict(xgb_sweetspot_x, fake_mlb_swing %>% select(-c(SWEETSPOT_Y_T1, SWEETSPOT_Z_T1, SWEETSPOT_Z_T2, HEAD_X_T1, HEAD_Y_T1, HEAD_Z_T1, FRAME_FROM_CONTACT)) %>% as.matrix()),
           pred_sweetspot_pos_y = predict(xgb_sweetspot_y, fake_mlb_swing %>% select(-c(SWEETSPOT_X_T1, SWEETSPOT_X_T2, SWEETSPOT_Z_T1, SWEETSPOT_Z_T2, HEAD_X_T1, HEAD_Y_T1, HEAD_Z_T1, FRAME_FROM_CONTACT)) %>% as.matrix()),
           pred_sweetspot_pos_z = predict(xgb_sweetspot_z, fake_mlb_swing %>% select(-c(SWEETSPOT_Y_T1, SWEETSPOT_X_T1, SWEETSPOT_X_T2, HEAD_X_T1, HEAD_Y_T1, HEAD_Z_T1, FRAME_FROM_CONTACT)) %>% as.matrix())) %>% 
    rename(SWEETSPOT_X = pred_sweetspot_pos_x,
           SWEETSPOT_Y = pred_sweetspot_pos_y,
           SWEETSPOT_Z = pred_sweetspot_pos_z)
  
  fake_mlb_swing_pred = fake_mlb_swing %>% 
    mutate(pred_head_pos_x = predict(xgb_head_x, fake_mlb_swing %>% select(-c(SWEETSPOT_X_T1, SWEETSPOT_X_T2, SWEETSPOT_Y_T1, SWEETSPOT_Z_T1, SWEETSPOT_Z_T2, HEAD_Y_T1, HEAD_Z_T1, SEC_FROM_CONTACT)) %>% as.matrix()),
           pred_head_pos_y = predict(xgb_head_y, fake_mlb_swing %>% select(-c(SWEETSPOT_X_T1, SWEETSPOT_X_T2, SWEETSPOT_Y_T1, SWEETSPOT_Z_T1, SWEETSPOT_Z_T2, HEAD_X_T1, HEAD_Z_T1, SEC_FROM_CONTACT)) %>% as.matrix()),
           pred_head_pos_z = predict(xgb_head_z, fake_mlb_swing %>% select(-c(SWEETSPOT_X_T1, SWEETSPOT_X_T2, SWEETSPOT_Y_T1, SWEETSPOT_Z_T1, SWEETSPOT_Z_T2, HEAD_X_T1, HEAD_Y_T1, SEC_FROM_CONTACT)) %>% as.matrix()),
           batter_id_side = interaction(batter_id, batter_side)) %>% 
    rename(pred_sweetspot_pos_x = SWEETSPOT_X,
           pred_sweetspot_pos_y = SWEETSPOT_Y,
           pred_sweetspot_pos_z = SWEETSPOT_Z) %>% 
    mutate(general_z_diff = predict(z_pos_prediction_error_all, .),
           pred_sweetspot_pos_z = pred_sweetspot_pos_z + general_z_diff,
           pred_head_pos_z = pred_head_pos_z + general_z_diff)
  
  #fake_swing_pred$player_z_diff > fake_mlb_swing_pred$general_z_diff
  
  
  
  fake_mlb_swing_pred = fake_mlb_swing_pred %>%
    arrange(SEC_FROM_CONTACT) %>%
    mutate(idx = row_number())
  
  n = nrow(fake_mlb_swing_pred)
  
  weights = abs(1/fake_mlb_swing_pred$SEC_FROM_CONTACT)
  
  sx = smooth.spline(
    x = fake_mlb_swing_pred$idx,
    y = fake_mlb_swing_pred$pred_sweetspot_pos_x,
    w = weights,
    spar = 0.5
  )
  
  sy = smooth.spline(
    x = fake_mlb_swing_pred$idx,
    y = fake_mlb_swing_pred$pred_sweetspot_pos_y,
    w = weights,
    spar = 0.5
  )
  
  sz = smooth.spline(
    x = fake_mlb_swing_pred$idx,
    y = fake_mlb_swing_pred$pred_sweetspot_pos_z,
    w = weights,
    spar = 0.5
  )
  
  hx = smooth.spline(
    x = fake_mlb_swing_pred$idx,
    y = fake_mlb_swing_pred$pred_head_pos_x,
    w = weights,
    spar = 0.5
  )
  
  hy = smooth.spline(
    x = fake_mlb_swing_pred$idx,
    y = fake_mlb_swing_pred$pred_head_pos_y,
    w = weights,
    spar = 0.5
  )
  
  hz = smooth.spline(
    x = fake_mlb_swing_pred$idx,
    y = fake_mlb_swing_pred$pred_head_pos_z,
    w = weights,
    spar = 0.5
  )
  
  final_z_fudge_mlb = fake_mlb_swing_pred %>% filter(FRAME_FROM_CONTACT == 0) %>% pull(general_z_diff)
  
  fake_mlb_swing_pred = fake_mlb_swing_pred %>%
    mutate(pred_sweetspot_pos_x_smooth = predict(sx, idx)$y * flip,
           pred_sweetspot_pos_y_smooth = predict(sy, idx)$y + adjustments$y_adjustment,
           pred_sweetspot_pos_z_smooth = predict(sz, idx)$y - c(final_z_fudge_mlb),
           pred_head_pos_x_smooth = predict(hx, idx)$y * flip,
           pred_head_pos_y_smooth = predict(hy, idx)$y + adjustments$y_adjustment,
           pred_head_pos_z_smooth = predict(hz, idx)$y - c(final_z_fudge_mlb))
  
  z_lead = sum(fake_swing_pred$pred_sweetspot_pos_z_smooth > fake_mlb_swing_pred$pred_sweetspot_pos_z_smooth)/nrow(fake_swing_pred)
  y_lead = sum(fake_swing_pred$pred_sweetspot_pos_y_smooth > fake_mlb_swing_pred$pred_sweetspot_pos_y_smooth)/nrow(fake_swing_pred)
  
  shape_tag = case_when(z_lead >= .6 & swing_length_pct <= .25 ~ "chop",
                        z_lead >= .6 & swing_length_pct >= .75 ~ "wrap",
                        z_lead <= .4 & swing_length_pct <= .25 ~ "scoop",
                        z_lead <= .4 & swing_length_pct >= .75 ~ "flat",
                        TRUE ~ "")
  
  tag_string = paste(Filter(nzchar, c(shape_tag, bat_angle_tag, bat_tilt_tag, attack_angle_tag,
                                      attack_direction_tag, contact_depth_tag, bat_speed_tag,
                                      swing_length_tag)), collapse = ", ")
  
  angle_xy_bat_3 = (180-bat_angle)*pi/180 # the signs of these might change RHB vs LHB..... # for LHB when we add to the HBA, we shift it back closer to home plate
  angle_z_bat_3 = (bat_tilt*pi/180) # this too.... # for LHB, when we add to the VBA, the bat gets more level
  
  n_theta_bat_3 = 10
  theta_bat_3 = seq(0, 2*pi, length.out = n_theta_bat_3 )
  
  x_matrix_bat_3 = matrix(0, nrow = nrow(bat_scaled), ncol = n_theta_bat_3 )
  y_matrix_bat_3 = matrix(0, nrow = nrow(bat_scaled), ncol = n_theta_bat_3 )
  z_matrix_bat_3 = matrix(0, nrow = nrow(bat_scaled), ncol = n_theta_bat_3 )
  
  for(i in 1:nrow(bat_scaled)) {
    for(j in 1:n_theta_bat_3 ) {
      x_local_bat_3 = bat_scaled$x[i]
      y_local_bat_3 = bat_scaled$y[i] * cos(theta_bat_3[j])
      z_local_bat_3 = bat_scaled$y[i] * sin(theta_bat_3[j])
      
      x_rot1_bat_3 = x_local_bat_3 * cos(angle_xy_bat_3) - y_local_bat_3 * sin(angle_xy_bat_3)
      y_rot1_bat_3 = x_local_bat_3 * sin(angle_xy_bat_3) + y_local_bat_3 * cos(angle_xy_bat_3)
      z_rot1_bat_3 = z_local_bat_3
      
      x_rot2_bat_3 = x_rot1_bat_3 * cos(-angle_z_bat_3) - z_rot1_bat_3 * sin(-angle_z_bat_3)
      y_rot2_bat_3 = y_rot1_bat_3
      z_rot2_bat_3 = x_rot1_bat_3 * sin(-angle_z_bat_3) + z_rot1_bat_3 * cos(-angle_z_bat_3)
      
      x_matrix_bat_3[i, j] = x_rot2_bat_3 + bat_knob_x
      y_matrix_bat_3[i, j] = y_rot2_bat_3 + bat_knob_y
      z_matrix_bat_3[i, j] = z_rot2_bat_3 + bat_knob_z
    }
  }
  
  new_head_x_3 = min(x_matrix_bat_3)
  new_head_y_3 = y_matrix_bat_3[which.min(x_matrix_bat_3)]
  new_head_z_3 = z_matrix_bat_3[which.min(x_matrix_bat_3)]
  
  new_knob_x_3 = max(x_matrix_bat_3)
  new_knob_y_3 = y_matrix_bat_3[which.max(x_matrix_bat_3)]
  new_knob_z_3 = z_matrix_bat_3[which.max(x_matrix_bat_3)]
  
  v_x_3 = new_knob_x_3 - new_head_x_3
  v_y_3 = new_knob_y_3 - new_head_y_3
  v_z_3 = new_knob_z_3 - new_head_z_3
  
  l_bat_3 = sqrt(v_x_3^2 + v_y_3^2 + v_z_3^2)
  
  u_x_3 = v_x_3/l_bat_3
  u_y_3 = v_y_3/l_bat_3
  u_z_3 = v_z_3/l_bat_3
  
  new_sweetspot_x_3 = .5*u_x_3 + new_head_x_3
  new_sweetspot_y_3 = .5*u_y_3 + new_head_y_3
  new_sweetspot_z_3 = .5*u_z_3 + new_head_z_3
  
  sweetspot_diff_x = sweetspot_x - new_sweetspot_x_3
  sweetspot_diff_y = contact_depth - new_sweetspot_y_3
  sweetspot_diff_z = sweetspot_z - new_sweetspot_z_3
  
  x_matrix_bat_3 = (x_matrix_bat_3 + sweetspot_diff_x)*flip
  y_matrix_bat_3 = y_matrix_bat_3 + sweetspot_diff_y + adjustments$y_adjustment
  z_matrix_bat_3 = z_matrix_bat_3 + sweetspot_diff_z
  
  angle_xy_bat_4 = (180 - mlb_bat_angle)*pi/180 # the signs of these might change RHB vs LHB..... # for LHB when we add to the HBA, we shift it back closer to home plate
  angle_z_bat_4 = (mlb_bat_tilt*pi/180) # this too.... # for LHB, when we add to the VBA, the bat gets more level
  
  n_theta_bat_4  = 10
  theta_bat_4  = seq(0, 2*pi, length.out = n_theta_bat_4 )
  
  x_matrix_bat_4  = matrix(0, nrow = nrow(bat_scaled), ncol = n_theta_bat_4 )
  y_matrix_bat_4  = matrix(0, nrow = nrow(bat_scaled), ncol = n_theta_bat_4 )
  z_matrix_bat_4  = matrix(0, nrow = nrow(bat_scaled), ncol = n_theta_bat_4 )
  
  for(i in 1:nrow(bat_scaled)) {
    for(j in 1:n_theta_bat_4 ) {
      x_local_bat_4 = bat_scaled$x[i]
      y_local_bat_4 = bat_scaled$y[i] * cos(theta_bat_4[j])
      z_local_bat_4 = bat_scaled$y[i] * sin(theta_bat_4[j])
      
      x_rot1_bat_4 = x_local_bat_4 * cos(angle_xy_bat_4) - y_local_bat_4 * sin(angle_xy_bat_4)
      y_rot1_bat_4 = x_local_bat_4 * sin(angle_xy_bat_4) + y_local_bat_4 * cos(angle_xy_bat_4)
      z_rot1_bat_4 = z_local_bat_4
      
      x_rot2_bat_4 = x_rot1_bat_4 * cos(-angle_z_bat_4) - z_rot1_bat_4 * sin(-angle_z_bat_4)
      y_rot2_bat_4 = y_rot1_bat_4
      z_rot2_bat_4 = x_rot1_bat_4 * sin(-angle_z_bat_4) + z_rot1_bat_4 * cos(-angle_z_bat_4)
      
      x_matrix_bat_4[i, j] = x_rot2_bat_4 + bat_knob_x
      y_matrix_bat_4[i, j] = y_rot2_bat_4 + bat_knob_y
      z_matrix_bat_4[i, j] = z_rot2_bat_4 + bat_knob_z
    }
  }
  
  new_head_x_4 = min(x_matrix_bat_4)
  new_head_y_4 = y_matrix_bat_4[which.min(x_matrix_bat_4)]
  new_head_z_4 = z_matrix_bat_4[which.min(x_matrix_bat_4)]
  
  new_knob_x_4 = max(x_matrix_bat_4)
  new_knob_y_4 = y_matrix_bat_4[which.max(x_matrix_bat_4)]
  new_knob_z_4 = z_matrix_bat_4[which.max(x_matrix_bat_4)]
  
  v_x_4 = new_knob_x_4 - new_head_x_4
  v_y_4 = new_knob_y_4 - new_head_y_4
  v_z_4 = new_knob_z_4 - new_head_z_4
  
  l_bat_4 = sqrt(v_x_4^2 + v_y_4^2 + v_z_4^2)
  
  u_x_4 = v_x_4/l_bat_4
  u_y_4 = v_y_4/l_bat_4
  u_z_4 = v_z_4/l_bat_4
  
  new_sweetspot_x_4 = .5*u_x_4 + new_head_x_4
  new_sweetspot_y_4 = .5*u_y_4 + new_head_y_4
  new_sweetspot_z_4 = .5*u_z_4 + new_head_z_4
  
  sweetspot_diff_x = sweetspot_x - new_sweetspot_x_4
  sweetspot_diff_y = contact_depth - new_sweetspot_y_4#mlb_contact_depth - new_sweetspot_y_4
  sweetspot_diff_z = sweetspot_z - new_sweetspot_z_4
  
  x_matrix_bat_4 = (x_matrix_bat_4 + sweetspot_diff_x) * flip
  y_matrix_bat_4 = y_matrix_bat_4 + sweetspot_diff_y + adjustments$y_adjustment
  z_matrix_bat_4 = z_matrix_bat_4 + sweetspot_diff_z
  
  print(paste0(k, ": ", batter_name, 
               " - mean_z: ", mean(fake_swing_pred$pred_sweetspot_pos_z_smooth),
               " - final_z_fudge: ", final_z_fudge,
               " - player_z_diff_mean: ", mean(fake_swing_pred$player_z_diff, na.rm = T)))
  
  p_inside = plot_ly() %>%
    add_trace(
      type = 'scatter3d',
      mode = 'lines',
      x = home_plate$x,
      y = home_plate$y,
      z = home_plate$z,
      line = list(color = 'black')
    ) %>%
    add_trace(
      type = 'scatter3d',
      mode = 'lines',
      x = zone$x,
      y = zone$y,
      z = zone$z,
      line = list(color = 'black')
    ) %>%
    add_trace(
      type = 'scatter3d',
      mode = 'lines',
      x = left_batter_box $x,
      y = left_batter_box $y,
      z = left_batter_box $z,
      line = list(color = 'black')
    ) %>%
    add_trace(
      type = 'scatter3d',
      mode = 'lines',
      x = right_batter_box $x,
      y = right_batter_box $y,
      z = right_batter_box $z,
      line = list(color = 'black')
    ) %>%
    add_trace(
      data = fake_swing_pred,
      x = ~pred_sweetspot_pos_x_smooth,
      y = ~pred_sweetspot_pos_y_smooth,
      z = ~pred_sweetspot_pos_z_smooth,
      type = 'scatter3d',
      mode = 'lines',
      line = list(width = 6, color = '#cc7314')
    ) %>%
    # add_trace(
    #   data = fake_swing_pred,
    #   x = ~pred_head_pos_x_smooth,
    #   y = ~pred_head_pos_y_smooth,
    #   z = ~pred_head_pos_z_smooth,
    #   type = 'scatter3d',
    #   mode = 'lines',
    #   line = list(width = 6, color = '#cc7314')
    # ) %>%
    add_trace(
      data = fake_mlb_swing_pred,
      x = ~pred_sweetspot_pos_x_smooth,
      y = ~pred_sweetspot_pos_y_smooth,
      z = ~pred_sweetspot_pos_z_smooth,
      type = 'scatter3d',
      mode = 'lines',
      line = list(width = 6, color = '#8c8a88')
    ) %>%
    # add_trace(
    #   data = fake_mlb_swing_pred,
    #   x = ~pred_head_pos_x_smooth,
    #   y = ~pred_head_pos_y_smooth,
    #   z = ~pred_head_pos_z_smooth,
    #   type = 'scatter3d',
    #   mode = 'lines',
    #   line = list(width = 6, color = '#8c8a88')
    # ) %>%
    add_surface(
      x = x_matrix_bat_4,
      y = y_matrix_bat_4,
      z = z_matrix_bat_4,
      colorscale = list(c(0, "#8c8a88"), c(1, "#8c8a88")),
      showscale = FALSE
    ) %>%
    add_surface(
      x = x_matrix_bat_3,
      y = y_matrix_bat_3,
      z = z_matrix_bat_3,
      colorscale = list(c(0, "#cc7314"), c(1, "#cc7314")),
      showscale = FALSE
    ) %>%
    layout(
      scene = list(
        camera = list(
          eye = list(x = flip *  -1, y = 1, z = 0),
          center = list(x = 0, y = 0, z = 0),
          up = list(x = 0, y = 0, z = 1)
        ),
        xaxis = list(
          showticklabels = FALSE,
          showgrid = FALSE,
          zeroline = FALSE,
          title = ""
        ),
        yaxis = list(
          showticklabels = FALSE,
          showgrid = FALSE,
          zeroline = FALSE,
          title = ""
        ),
        zaxis = list(
          showticklabels = FALSE,
          showgrid = FALSE,
          zeroline = FALSE,
          title = ""
        ),
        bgcolor = "rgba(0,0,0,0)",
        aspectmode = "data"
      ),
      paper_bgcolor = "rgba(0,0,0,0)",
      plot_bgcolor  = "rgba(0,0,0,0)",
      showlegend = FALSE
    )
  
  p_above = plot_ly() %>%
    add_trace(
      type = 'scatter3d',
      mode = 'lines',
      x = home_plate$x,
      y = home_plate$y,
      z = home_plate$z,
      line = list(color = 'black')
    ) %>%
    add_trace(
      type = 'scatter3d',
      mode = 'lines',
      x = zone$x,
      y = zone$y,
      z = zone$z,
      line = list(color = 'black')
    ) %>%
    add_trace(
      type = 'scatter3d',
      mode = 'lines',
      x = left_batter_box $x,
      y = left_batter_box $y,
      z = left_batter_box $z,
      line = list(color = 'black')
    ) %>%
    add_trace(
      type = 'scatter3d',
      mode = 'lines',
      x = right_batter_box $x,
      y = right_batter_box $y,
      z = right_batter_box $z,
      line = list(color = 'black')
    ) %>%
    add_trace(
      data = fake_swing_pred,
      x = ~pred_sweetspot_pos_x_smooth,
      y = ~pred_sweetspot_pos_y_smooth,
      z = ~pred_sweetspot_pos_z_smooth,
      type = 'scatter3d',
      mode = 'lines',
      line = list(width = 6, color = '#cc7314')
    ) %>%
    # add_trace(
    #   data = fake_swing_pred,
    #   x = ~pred_head_pos_x_smooth,
    #   y = ~pred_head_pos_y_smooth,
    #   z = ~pred_head_pos_z_smooth,
    #   type = 'scatter3d',
    #   mode = 'lines',
    #   line = list(width = 6, color = '#cc7314')
    # ) %>%
    add_trace(
      data = fake_mlb_swing_pred,
      x = ~pred_sweetspot_pos_x_smooth,
      y = ~pred_sweetspot_pos_y_smooth,
      z = ~pred_sweetspot_pos_z_smooth,
      type = 'scatter3d',
      mode = 'lines',
      line = list(width = 6, color = '#8c8a88')
    ) %>%
    # add_trace(
    #   data = fake_mlb_swing_pred,
    #   x = ~pred_head_pos_x_smooth,
    #   y = ~pred_head_pos_y_smooth,
    #   z = ~pred_head_pos_z_smooth,
    #   type = 'scatter3d',
    #   mode = 'lines',
    #   line = list(width = 6, color = '#8c8a88')
    # ) %>%
    add_surface(
      x = x_matrix_bat_4,
      y = y_matrix_bat_4,
      z = z_matrix_bat_4,
      colorscale = list(c(0, "#8c8a88"), c(1, "#8c8a88")),
      showscale = FALSE
    ) %>%
    add_surface(
      x = x_matrix_bat_3,
      y = y_matrix_bat_3,
      z = z_matrix_bat_3,
      colorscale = list(c(0, "#cc7314"), c(1, "#cc7314")),
      showscale = FALSE
    ) %>%
    layout(
      scene = list(
        camera = list(
          eye = list(x = flip *  0, y = 0, z = 1.5),
          center = list(x = 0, y = 0, z = 0),
          up = list(x = 0, y = 0, z = 1)
        ),
        xaxis = list(
          showticklabels = FALSE,
          showgrid = FALSE,
          zeroline = FALSE,
          title = ""
        ),
        yaxis = list(
          showticklabels = FALSE,
          showgrid = FALSE,
          zeroline = FALSE,
          title = ""
        ),
        zaxis = list(
          showticklabels = FALSE,
          showgrid = FALSE,
          zeroline = FALSE,
          title = ""
        ),
        bgcolor = "rgba(0,0,0,0)",
        aspectmode = "data"
      ),
      paper_bgcolor = "rgba(0,0,0,0)",
      plot_bgcolor  = "rgba(0,0,0,0)",
      showlegend = FALSE
    )
  
  p_side = plot_ly() %>%
    add_trace(
      type = 'scatter3d',
      mode = 'lines',
      x = home_plate$x,
      y = home_plate$y,
      z = home_plate$z,
      line = list(color = 'black')
    ) %>%
    add_trace(
      type = 'scatter3d',
      mode = 'lines',
      x = zone$x,
      y = zone$y,
      z = zone$z,
      line = list(color = 'black')
    ) %>%
    add_trace(
      type = 'scatter3d',
      mode = 'lines',
      x = left_batter_box $x,
      y = left_batter_box $y,
      z = left_batter_box $z,
      line = list(color = 'black')
    ) %>%
    add_trace(
      type = 'scatter3d',
      mode = 'lines',
      x = right_batter_box $x,
      y = right_batter_box $y,
      z = right_batter_box $z,
      line = list(color = 'black')
    ) %>%
    add_trace(
      data = fake_swing_pred,
      x = ~pred_sweetspot_pos_x_smooth,
      y = ~pred_sweetspot_pos_y_smooth,
      z = ~pred_sweetspot_pos_z_smooth,
      type = 'scatter3d',
      mode = 'lines',
      line = list(width = 6, color = '#cc7314')
    ) %>%
    # add_trace(
    #   data = fake_swing_pred,
    #   x = ~pred_head_pos_x_smooth,
    #   y = ~pred_head_pos_y_smooth,
    #   z = ~pred_head_pos_z_smooth,
    #   type = 'scatter3d',
    #   mode = 'lines',
    #   line = list(width = 6, color = '#cc7314')
    # ) %>%
    add_trace(
      data = fake_mlb_swing_pred,
      x = ~pred_sweetspot_pos_x_smooth,
      y = ~pred_sweetspot_pos_y_smooth,
      z = ~pred_sweetspot_pos_z_smooth,
      type = 'scatter3d',
      mode = 'lines',
      line = list(width = 6, color = '#8c8a88')
    ) %>%
    # add_trace(
    #   data = fake_mlb_swing_pred,
    #   x = ~pred_head_pos_x_smooth,
    #   y = ~pred_head_pos_y_smooth,
    #   z = ~pred_head_pos_z_smooth,
    #   type = 'scatter3d',
    #   mode = 'lines',
    #   line = list(width = 6, color = '#8c8a88')
    # ) %>%
    add_surface(
      x = x_matrix_bat_4,
      y = y_matrix_bat_4,
      z = z_matrix_bat_4,
      colorscale = list(c(0, "#8c8a88"), c(1, "#8c8a88")),
      showscale = FALSE
    ) %>%
    add_surface(
      x = x_matrix_bat_3,
      y = y_matrix_bat_3,
      z = z_matrix_bat_3,
      colorscale = list(c(0, "#cc7314"), c(1, "#cc7314")),
      showscale = FALSE
    ) %>%
    layout(
      scene = list(
        camera = list(
          eye = list(x = flip *  -1, y = 0, z = 0),
          center = list(x = 0, y = 0, z = 0),
          up = list(x = 0, y = 0, z = 1)
        ),
        xaxis = list(
          showticklabels = FALSE,
          showgrid = FALSE,
          zeroline = FALSE,
          title = ""
        ),
        yaxis = list(
          showticklabels = FALSE,
          showgrid = FALSE,
          zeroline = FALSE,
          title = ""
        ),
        zaxis = list(
          showticklabels = FALSE,
          showgrid = FALSE,
          zeroline = FALSE,
          title = ""
        ),
        bgcolor = "rgba(0,0,0,0)",
        aspectmode = "data"
      ),
      paper_bgcolor = "rgba(0,0,0,0)",
      plot_bgcolor  = "rgba(0,0,0,0)",
      showlegend = FALSE
    )
  
  p_center = plot_ly() %>%
    add_trace(
      type = 'scatter3d',
      mode = 'lines',
      x = home_plate$x,
      y = home_plate$y,
      z = home_plate$z,
      line = list(color = 'black')
    ) %>%
    add_trace(
      type = 'scatter3d',
      mode = 'lines',
      x = zone$x,
      y = zone$y,
      z = zone$z,
      line = list(color = 'black')
    ) %>%
    add_trace(
      type = 'scatter3d',
      mode = 'lines',
      x = left_batter_box $x,
      y = left_batter_box $y,
      z = left_batter_box $z,
      line = list(color = 'black')
    ) %>%
    add_trace(
      type = 'scatter3d',
      mode = 'lines',
      x = right_batter_box $x,
      y = right_batter_box $y,
      z = right_batter_box $z,
      line = list(color = 'black')
    ) %>%
    add_trace(
      data = fake_swing_pred,
      x = ~pred_sweetspot_pos_x_smooth,
      y = ~pred_sweetspot_pos_y_smooth,
      z = ~pred_sweetspot_pos_z_smooth,
      type = 'scatter3d',
      mode = 'lines',
      line = list(width = 6, color = '#cc7314')
    ) %>%
    # add_trace(
    #   data = fake_swing_pred,
    #   x = ~pred_head_pos_x_smooth,
    #   y = ~pred_head_pos_y_smooth,
    #   z = ~pred_head_pos_z_smooth,
    #   type = 'scatter3d',
    #   mode = 'lines',
    #   line = list(width = 6, color = '#cc7314')
    # ) %>%
    add_trace(
      data = fake_mlb_swing_pred,
      x = ~pred_sweetspot_pos_x_smooth,
      y = ~pred_sweetspot_pos_y_smooth,
      z = ~pred_sweetspot_pos_z_smooth,
      type = 'scatter3d',
      mode = 'lines',
      line = list(width = 6, color = '#8c8a88')
    ) %>%
    # add_trace(
    #   data = fake_mlb_swing_pred,
    #   x = ~pred_head_pos_x_smooth,
    #   y = ~pred_head_pos_y_smooth,
    #   z = ~pred_head_pos_z_smooth,
    #   type = 'scatter3d',
    #   mode = 'lines',
    #   line = list(width = 6, color = '#8c8a88')
    # ) %>%
    add_surface(
      x = x_matrix_bat_4,
      y = y_matrix_bat_4,
      z = z_matrix_bat_4,
      colorscale = list(c(0, "#8c8a88"), c(1, "#8c8a88")),
      showscale = FALSE
    ) %>%
    add_surface(
      x = x_matrix_bat_3,
      y = y_matrix_bat_3,
      z = z_matrix_bat_3,
      colorscale = list(c(0, "#cc7314"), c(1, "#cc7314")),
      showscale = FALSE
    ) %>%
    layout(
      scene = list(
        camera = list(
          eye = list(x = flip *  0, y = 1.75, z = 0),
          center = list(x = 0, y = 0, z = 0),
          up = list(x = 0, y = 0, z = 1)
        ),
        xaxis = list(
          showticklabels = FALSE,
          showgrid = FALSE,
          zeroline = FALSE,
          title = ""
        ),
        yaxis = list(
          showticklabels = FALSE,
          showgrid = FALSE,
          zeroline = FALSE,
          title = ""
        ),
        zaxis = list(
          showticklabels = FALSE,
          showgrid = FALSE,
          zeroline = FALSE,
          title = ""
        ),
        bgcolor = "rgba(0,0,0,0)",
        aspectmode = "data"
      ),
      paper_bgcolor = "rgba(0,0,0,0)",
      plot_bgcolor  = "rgba(0,0,0,0)",
      showlegend = FALSE
    )
  
  # will need to rename variables... running into an issue with duplicate names
  
  # Create bat matrices for each frame
  bat_matrices_player = list()
  bat_matrices_mlb = list()
  
  frames_with_bat = c(15, 17, 19, 21, 23, 25, 27, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41)
  
  # Player swing
  
  contact_depth_plot = ggplot(grouped_contact_depth) +
    geom_violin(aes(x = "", y = mean_contact_depth_AA + 1.626), fill = '#8c8a88', color = '#8c8a88', alpha = .2) + 
    coord_flip() + 
    geom_hline(yintercept = contact_depth, linetype = 2, color = '#cc7314', size = 2) +
    ylim(1 + 1.626, -1 + 1.626) + 
    theme_void() + 
    theme(plot.margin = ggplot2::margin(5, 5, 5, 5)) +
    labs(title = "",
         #subtitle = "",
         #caption = "",
         x = "",
         y = "")
  
  library(base64enc)
  # Save the violin plot
  violin_path = file.path(tmp_dir, "temp_violin.png")
  ggsave(violin_path, contact_depth_plot, width = 7.25, height = 4, dpi = 150, bg = "transparent")
  img_base64 = dataURI(file = violin_path, mime = "image/png")
  
  p_above = p_above %>%
    layout(
      images = list(
        list(
          source = img_base64,
          xref = "paper",
          yref = "paper",
          x = .35,  
          y = ifelse(flip == 1, .25, 0.75),   
          sizex = 10,  
          sizey = 0.3,   
          xanchor = "middle",
          yanchor = "middle",
          opacity = 1,
          layer = "above"
        )
      )
    )
  
  center_html = file.path(tmp_dir, "center.html")
  side_html   = file.path(tmp_dir, "side.html")
  above_html  = file.path(tmp_dir, "above.html")
  inside_html = file.path(tmp_dir, "inside.html")
  center_png  = file.path(tmp_dir, "center.png")
  side_png    = file.path(tmp_dir, "side.png")
  above_png   = file.path(tmp_dir, "above.png")
  inside_png  = file.path(tmp_dir, "inside.png")

  htmlwidgets::saveWidget(p_center, file = center_html, selfcontained = FALSE)
  htmlwidgets::saveWidget(p_side,   file = side_html,   selfcontained = FALSE)
  htmlwidgets::saveWidget(p_above,  file = above_html,  selfcontained = FALSE)
  htmlwidgets::saveWidget(p_inside, file = inside_html, selfcontained = FALSE)

  webshot(inside_html, inside_png,
          vwidth = 1200, vheight = 900, zoom = 2, delay = 0)
  webshot(above_html, above_png,
          vwidth = 2000, vheight = 1500, zoom = 2, delay = 0)
  webshot(side_html, side_png,
          vwidth = 2000, vheight = 1500, zoom = 2, delay = 0)
  webshot(center_html, center_png,
          vwidth = 2000, vheight = 1500, zoom = 2, delay = 0)
  
  make_titled_page = function(png_files, batter_name, context_text, tag_text, last_observed_str,
                              speedometer_top, speedometer_bottom, metric_tiles = NULL) {

    imgs = lapply(seq_along(png_files), function(i) {
      img = image_read(png_files[[i]])

      if (i <= 2) {
        image_resize(img, "2000x1500!")
      } else {
        image_resize(img, "2000x")
      }
    })

    row1 = image_append(c(imgs[[1]], imgs[[2]]))
    row2 = image_append(c(imgs[[3]], imgs[[4]]))
    grid = image_append(c(row1, row2), stack = TRUE) %>%
      image_background("white", flatten = TRUE)

    total_width = image_info(grid)$width  # should be 4000
    title_height = 400

    # Save speedometers and read back as magick images
    speedo1_path = file.path(tmp_dir, "temp_speedo1.png")
    speedo2_path = file.path(tmp_dir, "temp_speedo2.png")
    ggsave(speedo1_path, speedometer_top,    width = 4, height = 2, dpi = 150, bg = "white")
    ggsave(speedo2_path, speedometer_bottom, width = 4, height = 2, dpi = 150, bg = "white")

    speedo_h = title_height
    speedo_w = speedo_h * 2  # aspect ratio ~2:1 for speedometers

    speedo1_img = image_read(speedo1_path) %>% image_resize(paste0(speedo_w, "x", speedo_h, "!"))
    speedo2_img = image_read(speedo2_path) %>% image_resize(paste0(speedo_w, "x", speedo_h, "!"))

    middle_width = total_width - 2 * speedo_w

    # Title is rendered in two stacked sections so long tag strings can wrap independently of
    # the main name/context line, instead of overflowing one giant centered string.
    line1_text = paste0(batter_name, " ", context_text)
    line1_html = sub(batter_name,
                     paste0("<span style='color:#cc7314'>", batter_name, "</span>"),
                     line1_text, fixed = T)

    # Empirical: bold sans at ggplot size=X (mm) is ~X*2.95 px/char at 150 dpi. middle_width is
    # 2400 px; reserve ~100 px for breathing room -> 2300 px usable.
    size_for_chars = function(n_chars, max_px = 2300, cap = 26, floor_size = 8) {
      if (n_chars <= 0) return(cap)
      s = max_px / (n_chars * 2.95)
      max(min(s, cap), floor_size)
    }
    line1_size = size_for_chars(nchar(line1_text))

    if (nchar(tag_text) > 0) {
      tag_lines = strwrap(tag_text, width = 55)
      wrapped_tags = paste(tag_lines, collapse = "<br>")
      tag_size = min(size_for_chars(max(nchar(tag_lines))), 13)

      title_plot = ggplot() +
        annotate("richtext", x = 0.5, y = 0.78, label = line1_html,
                 fill = NA, label.color = NA, color = "black",
                 family = "sans", fontface = "bold",
                 size = line1_size, hjust = 0.5, vjust = 1) +
        annotate("richtext", x = 0.5, y = 0.38, label = wrapped_tags,
                 fill = NA, label.color = NA, color = "black",
                 family = "sans", fontface = "bold",
                 size = tag_size, hjust = 0.5, vjust = 1, lineheight = 1.05) +
        xlim(0, 1) + ylim(0, 1) + theme_void() +
        theme(plot.background = element_rect(fill = "white", color = NA),
              panel.background = element_rect(fill = "white", color = NA),
              plot.margin = ggplot2::margin(0, 0, 0, 0))
    } else {
      title_plot = ggplot() +
        annotate("richtext", x = 0.5, y = 0.5, label = line1_html,
                 fill = NA, label.color = NA, color = "black",
                 family = "sans", fontface = "bold",
                 size = line1_size, hjust = 0.5, vjust = 0.5) +
        xlim(0, 1) + ylim(0, 1) + theme_void() +
        theme(plot.background = element_rect(fill = "white", color = NA),
              panel.background = element_rect(fill = "white", color = NA),
              plot.margin = ggplot2::margin(0, 0, 0, 0))
    }

    title_path = file.path(tmp_dir, "temp_title.png")
    ggsave(title_path, title_plot,
           width = middle_width / 150, height = title_height / 150,
           dpi = 150, bg = "white", limitsize = F)
    title_middle = image_read(title_path) %>%
      image_resize(paste0(middle_width, "x", title_height, "!"))

    title_bar = image_append(c(speedo1_img, title_middle, speedo2_img))

    footer_height = 100
    footer = image_blank(width = total_width, height = footer_height, color = "white") %>%
      image_annotate(
        text    = paste0("Last Observed Swing: ", last_observed_str),
        size    = 48,
        gravity = "center",
        color   = "black",
        font    = "Arial"
      )

    if (!is.null(metric_tiles) && length(metric_tiles) > 0) {
      n_metrics = length(metric_tiles)
      tile_w = floor(total_width / n_metrics)
      tile_h = 320

      tile_imgs = lapply(seq_along(metric_tiles), function(i) {
        tile_path = file.path(tmp_dir, paste0("temp_metric_tile_", i, ".png"))
        ggsave(tile_path, metric_tiles[[i]], width = 4, height = 2, dpi = 150, bg = "white")
        image_read(tile_path) %>% image_resize(paste0(tile_w, "x", tile_h, "!"))
      })

      metrics_strip = image_append(image_join(tile_imgs))
      image_append(c(title_bar, metrics_strip, grid, footer), stack = TRUE)
    } else {
      image_append(c(title_bar, grid, footer), stack = TRUE)
    }
  }
  
  # speedometers....
  create_speedometer = function(speed = 70, mean = 71, sd = 3, 
                                n_major_ticks = 15, n_minor_ticks = 29, 
                                label = " ", round_digits = 1,
                                metric = "length") {
    
    #browser()
    
    min_speed = mean - 1.5 * sd
    max_speed = mean + 1.5 * sd
    
    lowest = qnorm(.1, mean, sd)
    low = qnorm(.25, mean, sd)
    high = qnorm(.75, mean, sd)
    highest = qnorm(.9, mean, sd)
    
    if (speed > max_speed) {
      middle_speed = (min_speed + max_speed) / 2
      max_speed = speed
      min_speed = middle_speed - (max_speed - middle_speed)
    } else if (speed < min_speed) {
      middle_speed = (min_speed + max_speed) / 2
      min_speed = speed
      max_speed = middle_speed + (middle_speed - min_speed)
    }
    
    speed_range = max_speed - min_speed
    
    n_arc_points = 100
    arc_angles = seq(225, -45, length.out = n_arc_points)
    arc_speeds = min_speed + (225 - arc_angles) / 270 * speed_range
    
    if (metric == "length") {
      arc_colors = sapply(arc_speeds, function(s) {
        if (s < lowest) return("red")      
        else if (s < low) return("orange")
        else if (s > highest) return("blue4")
        else if (s > high) return("blue")  
        else if (s > mean) return("lightblue")
        else return("yellow")                
      })
    } else {
      arc_colors = sapply(arc_speeds, function(s) {
        if (s < lowest) return("blue4")      
        else if (s < low) return("blue")
        else if (s > highest) return("red")
        else if (s > high) return("orange")  
        else if (s > mean) return("yellow")
        else return("lightblue")                
      })
    }
    
    arc_df = data.frame(
      angle = arc_angles,
      speed = arc_speeds,
      color = arc_colors,
      x_inner = cos(arc_angles * pi / 180) * 0.82,
      y_inner = sin(arc_angles * pi / 180) * 0.82,
      x_outer = cos(arc_angles * pi / 180) * 0.98,
      y_outer = sin(arc_angles * pi / 180) * 0.98
    )
    
    major_ticks = seq(min_speed, max_speed, length.out = n_major_ticks)
    minor_ticks = seq(min_speed, max_speed, length.out = n_minor_ticks)
    
    tick_data = data.frame(speed = minor_ticks) %>%
      mutate(angle = 225 - ((speed - min_speed) / speed_range * 270),
             is_major = speed %in% major_ticks,
             x_inner = cos(angle * pi / 180) * 0.85,
             y_inner = sin(angle * pi / 180) * 0.85,
             x_outer = cos(angle * pi / 180) * ifelse(is_major, 0.95, 0.90),
             y_outer = sin(angle * pi / 180) * ifelse(is_major, 0.95, 0.90))
    
    label_data = data.frame(speed = major_ticks) %>%
      mutate(angle = 225 - ((speed - min_speed) / speed_range * 270),
             x = cos(angle * pi / 180) * 0.6,
             y = sin(angle * pi / 180) * 0.6,
             label = round(speed, round_digits))
    
    needle_angle = 225 - ((speed - min_speed) / speed_range * 270)
    needle_x = cos(needle_angle * pi / 180) * 0.75
    needle_y = sin(needle_angle * pi / 180) * 0.75
    
    p = ggplot() +
      geom_segment(data = arc_df,
                   aes(x = x_inner, y = y_inner, 
                       xend = x_outer, yend = y_outer),
                   color = arc_df$color, size = 6, lineend = "butt") +
      annotate("path",
               x = cos(seq(235, -55, length.out = 100) * pi / 180),
               y = sin(seq(235, -55, length.out = 100) * pi / 180),
               color = "grey20", size = 2, alpha = 1) +
      geom_segment(data = tick_data,
                   aes(x = x_inner, y = y_inner, xend = x_outer, yend = y_outer),
                   color = "white", size = ifelse(tick_data$is_major, 1.5, 0.6)) +
      geom_text(data = label_data,
                aes(x = x, y = y, label = label),
                color = "black", size = 4, fontface = "bold", family = "mono") +
      annotate("segment", x = 0, y = 0, xend = needle_x, yend = needle_y,
               color = "black", size = 1.5, lineend = "round") +
      annotate("point", x = 0, y = 0, size = 5, color = "grey20") +
      annotate("point", x = 0, y = 0, size = 3, color = "grey90") +
      annotate("text", x = 0, y = -1, label = label, size = 5, fontface = "bold", family = "mono") + 
      coord_fixed() +
      theme_void() +
      theme(
        plot.background = element_rect(fill = "white", color = NA),
        panel.background = element_rect(fill = "white", color = NA)
      ) +
      xlim(-1.5, 1.5) +
      ylim(-1, 1.1)
    
    return(p)
  }

  create_metric_tile = function(label, value, aa, units = "", decimals = 1) {
    value_str = formatC(value, format = "f", digits = decimals)
    aa_rounded = round(aa, decimals)
    is_up = aa_rounded >= 0
    aa_sign = if (is_up) "+" else ""
    aa_str = paste0(aa_sign, formatC(aa_rounded, format = "f", digits = decimals), units)
    arrow_color = if (is_up) "#cc7314" else "#8c8a88"

    arrow_df = if (is_up) {
      data.frame(x = c(0.18, 0.245, 0.31), y = c(0.10, 0.26, 0.10))
    } else {
      data.frame(x = c(0.18, 0.245, 0.31), y = c(0.26, 0.10, 0.26))
    }

    ggplot() +
      annotate("text", x = 0.5, y = 0.85, label = label, size = 6, color = "#555555", family = "sans", fontface = "bold") +
      annotate("text", x = 0.5, y = 0.52, label = paste0(value_str, units), size = 13, color = "black", family = "sans", fontface = "bold") +
      geom_polygon(data = arrow_df, aes(x = x, y = y), fill = arrow_color) +
      annotate("text", x = 0.36, y = 0.18, label = aa_str, size = 8, color = arrow_color, family = "sans", fontface = "bold", hjust = 0) +
      xlim(0, 1) + ylim(0, 1) +
      theme_void() +
      theme(plot.background = element_rect(fill = "white", color = NA),
            panel.background = element_rect(fill = "white", color = NA),
            plot.margin = ggplot2::margin(8, 8, 8, 8))
  }

  speedometer = create_speedometer(speed = bat_speed, mean = bat_speed_mean, sd = bat_speed_sd,
                                   n_major_ticks = 5, n_minor_ticks = 9,
                                   label = paste0(ordinal(round(bat_speed_pct*100)), " Pct. Bat Speed"),
                                   round_digits = 1, metric = "speed")

  speedometer2 = create_speedometer(speed = swing_length, mean = swing_length_mean, sd = swing_length_sd,
                                    n_major_ticks = 5, n_minor_ticks = 9,
                                    label = paste0(ordinal(round(swing_length_pct*100)), " Pct. Swing Length"),
                                    round_digits = 2, metric = "length")

  metric_tiles = list(
    create_metric_tile("Bat Speed", bat_speed, bat_speed_aa, units = " mph", decimals = 1),
    create_metric_tile("Swing Length", swing_length, swing_length_aa, units = " ft", decimals = 2),
    create_metric_tile("Contact Depth", contact_depth, contact_depth_aa, units = " ft", decimals = 2),
    create_metric_tile("Bat Angle", bat_angle, bat_angle_aa, units = "°", decimals = 1),
    create_metric_tile("Bat Tilt", bat_tilt, bat_tilt_aa, units = "°", decimals = 1),
    create_metric_tile("Attack Angle", attack_angle, attack_angle_aa, units = "°", decimals = 1),
    create_metric_tile("Attack Direction", attack_direction, attack_direction_aa, units = "°", decimals = 1)
  )

  context_text = paste0("2026 Swings",
                        ifelse(is_sh == 0, "", paste0(" ", batter_side)))
  tag_text = if (nchar(tag_string) > 0) toupper(tag_string) else ""

  page = make_titled_page(
    png_files          = c(center_png, side_png, inside_png, above_png),
    batter_name        = batter_name,
    context_text       = context_text,
    tag_text           = tag_text,
    last_observed_str  = last_observed_str,
    speedometer_top    = speedometer,
    speedometer_bottom = speedometer2,
    metric_tiles       = metric_tiles
  )
  
  pages[[length(pages) + 1]] = page
  
}

build_key_page = function(width_px = 4000, height_px = 3820) {

  modeling_text = paste0(
    "<b>Observed.</b> Per-swing Hawkeye measurements averaged over the sample window: Bat Speed, Swing Length, Contact Depth, Attack Angle, Attack Direction, Bat Angle, Bat Tilt.<br><br>",
    "<b><span style='color:#8c8a88'>The grey path</span></b> is the league-average swing taken against the specific pitch mix this hitter has actually seen, then re-anchored to a pitch down the middle. Building it from the hitter's own pitch selection strips out who-sees-what bias; re-centering it gives a fixed reference frame so every comparison happens on the same canvas. What's left is what an average MLB swing would look like if this hitter's pitch diet were thrown right down the heart of the zone.<br><br>",
    "<b><span style='color:#cc7314'>The orange path</span></b> is the hitter's predicted swing on that same down-the-middle pitch. Six XGBoost models - sweetspot x/y/z and bat-head x/y/z - are trained on every available Hawkeye swing and learn how a swing's per-frame position is shaped by its observed metrics. Feeding in this hitter's averaged metrics produces their expected path relative to the grey baseline. 
    We track the gap between past predictions and the hitter's actual swings frame-by-frame and adjust the prediction by that average residual, so the drawn path reflects how this specific hitter has historically deviated from what the model expects.<br><br>",
    "The bat icons drawn on each panel show the average bat orientation at the moment of contact."
  )

  speedos_text = paste0(
    "<b>Header Speedometers.</b> Bat Speed (left) and Swing Length (right). Needle = the hitter; label = league percentile.<br><br>",
    "<b>Metric Tiles.</b> Bat Speed, Swing Length, Contact Depth, Bat Angle, Bat Tilt, Attack Angle, Attack Direction. The big number is the hitter's average; the arrow value is the gap vs. the MLB baseline on this hitter's pitch mix (orange up, grey down)."
  )

  shape_text = paste0(
    "<b>chop</b> - bat tracks above the MLB-avg path with a short swing length<br>",
    "<b>wrap</b> - bat tracks above the MLB-avg path with a long swing length<br>",
    "<b>scoop</b> - bat tracks below the MLB-avg path with a short swing length<br>",
    "<b>flat</b> - bat tracks below the MLB-avg path with a long swing length"
  )

  axis_tags = paste0(
    "1 standard deviation from the MLB baseline triggers the base label; 2+ sd triggers the <b>mega-</b> prefix.<br><br>",
    "<b>Bat Angle:</b> hook (more closed) / poke (more open)<br>",
    "<b>Bat Tilt:</b> frisbee (more level) / driver (more vertical)<br>",
    "<b>Attack Angle:</b> uphill / downhill<br>",
    "<b>Attack Direction:</b> yank (pull-side) / push (oppo)<br>",
    "<b>Contact Depth:</b> out-front / deep<br>",
    "<b>Bat Speed:</b> fast / slow<br>",
    "<b>Swing Length:</b> long / short"
  )

  left_x  = 0.025
  right_x = 0.515
  col_w   = 0.46

  body_size   = 9
  header_size = 13
  title_size  = 26

  page_box = function(label, x, y) {
    geom_textbox(
      data = data.frame(x = x, y = y, label = label),
      aes(x = x, y = y, label = label),
      width  = unit(col_w, "npc"),
      box.color = NA, fill = NA,
      hjust = 0, vjust = 1, halign = 0,
      size = body_size, family = "sans", color = "black",
      lineheight = 1.25,
      box.padding = unit(c(0, 0, 0, 0), "pt"),
      box.margin  = unit(c(0, 0, 0, 0), "pt")
    )
  }

  page_header = function(label, x, y) {
    annotate("richtext", x = x, y = y, label = label,
             size = header_size, fill = NA, label.color = NA, color = "black",
             family = "sans", fontface = "bold", hjust = 0, vjust = 1)
  }

  key_plot = ggplot() +
    annotate("richtext", x = 0.5, y = 0.975, label = "<b>SWINGERPRINT KEY</b>",
             size = title_size, fill = NA, label.color = NA, color = "#cc7314",
             family = "sans", hjust = 0.5, vjust = 1) +
    annotate("segment", x = 0.04, xend = 0.96, y = 0.92, yend = 0.92,
             color = "grey70", size = 0.4) +
    annotate("segment", x = 0.5, xend = 0.5, y = 0.07, yend = 0.90,
             color = "grey80", size = 0.3) +

    page_header("Modeling Pipeline",     left_x, 0.89) +
    page_box(modeling_text,              left_x, 0.86) +

    page_header("Header Gauges & Tiles", right_x, 0.89) +
    page_box(speedos_text,               right_x, 0.86) +

    page_header("Shape Tags",            right_x, 0.62) +
    page_box(shape_text,                 right_x, 0.59) +

    page_header("Axis Tags",             right_x, 0.42) +
    page_box(axis_tags,                  right_x, 0.39) +

    coord_cartesian(xlim = c(0, 1), ylim = c(0, 1), expand = F, clip = "off") +
    theme_void() +
    theme(plot.background = element_rect(fill = "white", color = NA),
          panel.background = element_rect(fill = "white", color = NA),
          plot.margin = ggplot2::margin(0, 0, 0, 0))

  key_path = file.path(tmp_dir, "temp_key_page.png")
  ggsave(key_path, key_plot,
         width = width_px / 150, height = height_px / 150,
         dpi = 150, bg = "white", limitsize = F)

  image_read(key_path) %>%
    image_resize(paste0(width_px, "x", height_px, "!")) %>%
    image_background("white", flatten = T)
}

key_page = build_key_page()
pages = c(list(key_page), pages)

image_write(
  image_join(pages),
  paste0(target_org, " Swingerprints ", Sys.Date(), ".pdf"),
  format = "pdf"
)
toc()
#swing loop


# CREATES BATS
# for(frame_idx in frames_with_bat) {
# 
#   head_x_player = fake_swing_pred$pred_head_pos_x_smooth[frame_idx]
#   head_y_player = fake_swing_pred$pred_head_pos_y_smooth[frame_idx]
#   head_z_player = fake_swing_pred$pred_head_pos_z_smooth[frame_idx]
# 
#   sweetspot_x_player = fake_swing_pred$pred_sweetspot_pos_x_smooth[frame_idx]
#   sweetspot_y_player = fake_swing_pred$pred_sweetspot_pos_y_smooth[frame_idx]
#   sweetspot_z_player = fake_swing_pred$pred_sweetspot_pos_z_smooth[frame_idx]
# 
#   # Vector from head to sweetspot (should be 0.5 feet)
#   v_x_player = sweetspot_x_player - head_x_player
#   v_y_player = sweetspot_y_player - head_y_player
#   v_z_player = sweetspot_z_player - head_z_player
# 
#   # Normalize to get unit vector
#   length_hs_player = sqrt(v_x_player^2 + v_y_player^2 + v_z_player^2)
#   u_x_player = v_x_player / length_hs_player
#   u_y_player = v_y_player / length_hs_player
#   u_z_player = v_z_player / length_hs_player
# 
#   # Calculate knob position (bat_length along the unit vector from head)
#   knob_x_player = head_x_player + bat_length * u_x_player
#   knob_y_player = head_y_player + bat_length * u_y_player
#   knob_z_player = head_z_player + bat_length * u_z_player
# 
#   # Now we need to create a rotation matrix that aligns the x-axis with our unit vector
#   # Create an orthonormal basis
# 
#   # Our primary axis is the bat direction (u_x, u_y, u_z)
# 
#   # Pick a perpendicular vector - if unit vector is mostly horizontal, use z-up as reference
#   # Otherwise use y-forward as reference
#   if (abs(u_z_player) < 0.9) {
#     ref_vec_player = c(0, 0, 1)  # z-up
#   } else {
#     ref_vec_player = c(0, 1, 0)  # y-forward
#   }
# 
#   # Create perpendicular vector using cross product
#   perp1_x_player = ref_vec_player[2] * u_z_player - ref_vec_player[3] * u_y_player
#   perp1_y_player = ref_vec_player[3] * u_x_player - ref_vec_player[1] * u_z_player
#   perp1_z_player = ref_vec_player[1] * u_y_player - ref_vec_player[2] * u_x_player
# 
#   # Normalize
#   len_perp1_player = sqrt(perp1_x_player^2 + perp1_y_player^2 + perp1_z_player^2)
#   perp1_x_player = perp1_x_player / len_perp1_player
#   perp1_y_player = perp1_y_player / len_perp1_player
#   perp1_z_player = perp1_z_player / len_perp1_player
# 
#   # Create second perpendicular vector
#   perp2_x_player = u_y_player * perp1_z_player - u_z_player * perp1_y_player
#   perp2_y_player = u_z_player * perp1_x_player - u_x_player * perp1_z_player
#   perp2_z_player = u_x_player * perp1_y_player - u_y_player * perp1_x_player
# 
#   # Generate bat mesh
#   n_theta_player = 10
#   theta_player = seq(0, 2*pi, length.out = n_theta_player)
# 
#   x_matrix_player = matrix(0, nrow = nrow(bat_scaled), ncol = n_theta_player)
#   y_matrix_player = matrix(0, nrow = nrow(bat_scaled), ncol = n_theta_player)
#   z_matrix_player = matrix(0, nrow = nrow(bat_scaled), ncol = n_theta_player)
# 
#   for(i in 1:nrow(bat_scaled)) {
#     for(j in 1:n_theta_player) {
#       # Local coordinates
#       x_local_player = bat_length - bat_scaled$x[i]  # Along bat axis
#       y_local_player = bat_scaled$y[i] * cos(theta_player[j])  # Radial
#       z_local_player = bat_scaled$y[i] * sin(theta_player[j])  # Radial
# 
#       # Transform to world coordinates using our orthonormal basis
#       # x_local goes along u vector, y_local along perp1, z_local along perp2
#       x_world_player = head_x_player + x_local_player * u_x_player + y_local_player * perp1_x_player + z_local_player * perp2_x_player
#       y_world_player = head_y_player + x_local_player * u_y_player + y_local_player * perp1_y_player + z_local_player * perp2_y_player
#       z_world_player = head_z_player + x_local_player * u_z_player + y_local_player * perp1_z_player + z_local_player * perp2_z_player
# 
#       x_matrix_player[i, j] = x_world_player * flip
#       y_matrix_player[i, j] = y_world_player
#       z_matrix_player[i, j] = z_world_player
#     }
#   }
# 
#   bat_matrices_player[[frame_idx]] = list(
#     x = x_matrix_player,
#     y = y_matrix_player,
#     z = z_matrix_player
#   )
# }
# 
# for(frame_idx in 1:length(bat_matrices_player)) {
#   
#   if (is.null(bat_matrices_player[[frame_idx]])) {
#     next
#   }
#   
#   p_inside = p_inside %>%
#     add_surface(
#       x = bat_matrices_player[[frame_idx]]$x*flip,
#       y = bat_matrices_player[[frame_idx]]$y,
#       z = bat_matrices_player[[frame_idx]]$z,
#       colorscale = list(c(0, "#cc7314"), c(1, "#cc7314")),
#       showscale = FALSE,
#       opacity = 0.1
#     )
#   
#   p_above = p_above %>%
#     add_surface(
#       x = bat_matrices_player[[frame_idx]]$x*flip,
#       y = bat_matrices_player[[frame_idx]]$y,
#       z = bat_matrices_player[[frame_idx]]$z,
#       colorscale = list(c(0, "#cc7314"), c(1, "#cc7314")),
#       showscale = FALSE,
#       opacity = 0.1
#     )
#   
#   p_side = p_side %>%
#     add_surface(
#       x = bat_matrices_player[[frame_idx]]$x*flip,
#       y = bat_matrices_player[[frame_idx]]$y,
#       z = bat_matrices_player[[frame_idx]]$z,
#       colorscale = list(c(0, "#cc7314"), c(1, "#cc7314")),
#       showscale = FALSE,
#       opacity = 0.1
#     )
#   
#   p_center = p_center %>%
#     add_surface(
#       x = bat_matrices_player[[frame_idx]]$x*flip,
#       y = bat_matrices_player[[frame_idx]]$y,
#       z = bat_matrices_player[[frame_idx]]$z,
#       colorscale = list(c(0, "#cc7314"), c(1, "#cc7314")),
#       showscale = FALSE,
#       opacity = 0.1
#     )
# }

# Collect head and knob positions across all frames
# head_x_all_player = numeric(length(frames_with_bat))
# head_y_all_player = numeric(length(frames_with_bat))
# head_z_all_player = numeric(length(frames_with_bat))
# knob_x_all_player = numeric(length(frames_with_bat))
# knob_y_all_player = numeric(length(frames_with_bat))
# knob_z_all_player = numeric(length(frames_with_bat))
# 
# for(i in seq_along(frames_with_bat)) {
#   frame_idx = frames_with_bat[i]
#   
#   head_x_player = fake_swing_pred$pred_head_pos_x_smooth[frame_idx]
#   head_y_player = fake_swing_pred$pred_head_pos_y_smooth[frame_idx]
#   head_z_player = fake_swing_pred$pred_head_pos_z_smooth[frame_idx]
#   
#   sweetspot_x_player = fake_swing_pred$pred_sweetspot_pos_x_smooth[frame_idx]
#   sweetspot_y_player = fake_swing_pred$pred_sweetspot_pos_y_smooth[frame_idx]
#   sweetspot_z_player = fake_swing_pred$pred_sweetspot_pos_z_smooth[frame_idx]
#   
#   v_x_player = sweetspot_x_player - head_x_player
#   v_y_player = sweetspot_y_player - head_y_player
#   v_z_player = sweetspot_z_player - head_z_player
#   
#   length_hs_player = sqrt(v_x_player^2 + v_y_player^2 + v_z_player^2)
#   u_x_player = v_x_player / length_hs_player
#   u_y_player = v_y_player / length_hs_player
#   u_z_player = v_z_player / length_hs_player
#   
#   head_x_all_player[i] = head_x_player
#   head_y_all_player[i] = head_y_player
#   head_z_all_player[i] = head_z_player
#   
#   knob_x_all_player[i] = head_x_player + bat_length * u_x_player
#   knob_y_all_player[i] = head_y_player + bat_length * u_y_player
#   knob_z_all_player[i] = head_z_player + bat_length * u_z_player
# }


# MLB swing 

# BUILDS STICKS - NO BATS
# for(frame_idx in frames_with_bat) {
#   
#   head_x_mlb = fake_mlb_swing_pred$pred_head_pos_x_smooth[frame_idx]
#   head_y_mlb = fake_mlb_swing_pred$pred_head_pos_y_smooth[frame_idx]
#   head_z_mlb = fake_mlb_swing_pred$pred_head_pos_z_smooth[frame_idx]
#   
#   sweetspot_x_mlb = fake_mlb_swing_pred$pred_sweetspot_pos_x_smooth[frame_idx]
#   sweetspot_y_mlb = fake_mlb_swing_pred$pred_sweetspot_pos_y_smooth[frame_idx]
#   sweetspot_z_mlb = fake_mlb_swing_pred$pred_sweetspot_pos_z_smooth[frame_idx]
#   
#   # Vector from head to sweetspot (should be 0.5 feet)
#   v_x_mlb = sweetspot_x_mlb - head_x_mlb
#   v_y_mlb = sweetspot_y_mlb - head_y_mlb
#   v_z_mlb = sweetspot_z_mlb - head_z_mlb
#   
#   # Normalize to get unit vector
#   length_hs_mlb = sqrt(v_x_mlb^2 + v_y_mlb^2 + v_z_mlb^2)
#   u_x_mlb = v_x_mlb / length_hs_mlb
#   u_y_mlb = v_y_mlb / length_hs_mlb
#   u_z_mlb = v_z_mlb / length_hs_mlb
#   
#   # Calculate knob position (bat_length along the unit vector from head)
#   knob_x_mlb = head_x_mlb + bat_length * u_x_mlb
#   knob_y_mlb = head_y_mlb + bat_length * u_y_mlb
#   knob_z_mlb = head_z_mlb + bat_length * u_z_mlb
#   
#   # Now we need to create a rotation matrix that aligns the x-axis with our unit vector
#   # Create an orthonormal basis
#   
#   # Our primary axis is the bat direction (u_x, u_y, u_z)
#   
#   # Pick a perpendicular vector - if unit vector is mostly horizontal, use z-up as reference
#   # Otherwise use y-forward as reference
#   if (abs(u_z_mlb) < 0.9) {
#     ref_vec_mlb = c(0, 0, 1)  # z-up
#   } else {
#     ref_vec_mlb = c(0, 1, 0)  # y-forward
#   }
#   
#   # Create perpendicular vector using cross product
#   perp1_x_mlb = ref_vec_mlb[2] * u_z_mlb - ref_vec_mlb[3] * u_y_mlb
#   perp1_y_mlb = ref_vec_mlb[3] * u_x_mlb - ref_vec_mlb[1] * u_z_mlb
#   perp1_z_mlb = ref_vec_mlb[1] * u_y_mlb - ref_vec_mlb[2] * u_x_mlb
#   
#   # Normalize
#   len_perp1_mlb = sqrt(perp1_x_mlb^2 + perp1_y_mlb^2 + perp1_z_mlb^2)
#   perp1_x_mlb = perp1_x_mlb / len_perp1_mlb
#   perp1_y_mlb = perp1_y_mlb / len_perp1_mlb
#   perp1_z_mlb = perp1_z_mlb / len_perp1_mlb
#   
#   # Create second perpendicular vector
#   perp2_x_mlb = u_y_mlb * perp1_z_mlb - u_z_mlb * perp1_y_mlb
#   perp2_y_mlb = u_z_mlb * perp1_x_mlb - u_x_mlb * perp1_z_mlb
#   perp2_z_mlb = u_x_mlb * perp1_y_mlb - u_y_mlb * perp1_x_mlb
#   
#   # Generate bat mesh
#   n_theta_mlb = 10
#   theta_mlb = seq(0, 2*pi, length.out = n_theta_mlb)
#   
#   x_matrix_mlb = matrix(0, nrow = nrow(bat_scaled), ncol = n_theta_mlb)
#   y_matrix_mlb = matrix(0, nrow = nrow(bat_scaled), ncol = n_theta_mlb)
#   z_matrix_mlb = matrix(0, nrow = nrow(bat_scaled), ncol = n_theta_mlb)
#   
#   for(i in 1:nrow(bat_scaled)) {
#     for(j in 1:n_theta_mlb) {
#       # Local coordinates
#       x_local_mlb = bat_length - bat_scaled$x[i]  # Along bat axis
#       y_local_mlb = bat_scaled$y[i] * cos(theta_mlb[j])  # Radial
#       z_local_mlb = bat_scaled$y[i] * sin(theta_mlb[j])  # Radial
#       
#       # Transform to world coordinates using our orthonormal basis
#       # x_local goes along u vector, y_local along perp1, z_local along perp2
#       x_world_mlb = head_x_mlb + x_local_mlb * u_x_mlb + y_local_mlb * perp1_x_mlb + z_local_mlb * perp2_x_mlb
#       y_world_mlb = head_y_mlb + x_local_mlb * u_y_mlb + y_local_mlb * perp1_y_mlb + z_local_mlb * perp2_y_mlb
#       z_world_mlb = head_z_mlb + x_local_mlb * u_z_mlb + y_local_mlb * perp1_z_mlb + z_local_mlb * perp2_z_mlb
#       
#       x_matrix_mlb[i, j] = x_world_mlb * flip
#       y_matrix_mlb[i, j] = y_world_mlb
#       z_matrix_mlb[i, j] = z_world_mlb
#     }
#   }
#   
#   bat_matrices_mlb[[frame_idx]] = list(
#     x = x_matrix_mlb,
#     y = y_matrix_mlb,
#     z = z_matrix_mlb
#   )
# }
# 
# for(frame_idx in 1:length(bat_matrices_mlb)) {
#   
#   if (is.null(bat_matrices_mlb[[frame_idx]])) {
#     next
#   }
#   
#   p_inside = p_inside %>%
#     add_surface(
#       x = bat_matrices_mlb[[frame_idx]]$x*flip,
#       y = bat_matrices_mlb[[frame_idx]]$y,
#       z = bat_matrices_mlb[[frame_idx]]$z,
#       colorscale = list(c(0, "#8c8a88"), c(1, "#8c8a88")),
#       showscale = FALSE,
#       opacity = 0.1
#     )
#   
#   p_above = p_above %>%
#     add_surface(
#       x = bat_matrices_mlb[[frame_idx]]$x*flip,
#       y = bat_matrices_mlb[[frame_idx]]$y,
#       z = bat_matrices_mlb[[frame_idx]]$z,
#       colorscale = list(c(0, "#8c8a88"), c(1, "#8c8a88")),
#       showscale = FALSE,
#       opacity = 0.1
#     )
#   
#   p_side = p_side %>%
#     add_surface(
#       x = bat_matrices_mlb[[frame_idx]]$x*flip,
#       y = bat_matrices_mlb[[frame_idx]]$y,
#       z = bat_matrices_mlb[[frame_idx]]$z,
#       colorscale = list(c(0, "#8c8a88"), c(1, "#8c8a88")),
#       showscale = FALSE,
#       opacity = 0.1
#     )
#   
#   p_center = p_center %>%
#     add_surface(
#       x = bat_matrices_mlb[[frame_idx]]$x*flip,
#       y = bat_matrices_mlb[[frame_idx]]$y,
#       z = bat_matrices_mlb[[frame_idx]]$z,
#       colorscale = list(c(0, "#8c8a88"), c(1, "#8c8a88")),
#       showscale = FALSE,
#       opacity = 0.1
#     )
# }

# BUILDS A 2D BAT
# for(frame_idx in frames_with_bat) {
#   
#   head_x_mlb = fake_mlb_swing_pred$pred_head_pos_x_smooth[frame_idx]
#   head_y_mlb = fake_mlb_swing_pred$pred_head_pos_y_smooth[frame_idx]
#   head_z_mlb = fake_mlb_swing_pred$pred_head_pos_z_smooth[frame_idx]
#   
#   sweetspot_x_mlb = fake_mlb_swing_pred$pred_sweetspot_pos_x_smooth[frame_idx]
#   sweetspot_y_mlb = fake_mlb_swing_pred$pred_sweetspot_pos_y_smooth[frame_idx]
#   sweetspot_z_mlb = fake_mlb_swing_pred$pred_sweetspot_pos_z_smooth[frame_idx]
#   
#   # Vector from head to sweetspot
#   v_x_mlb = sweetspot_x_mlb - head_x_mlb
#   v_y_mlb = sweetspot_y_mlb - head_y_mlb
#   v_z_mlb = sweetspot_z_mlb - head_z_mlb
#   
#   # Normalize
#   length_hs_mlb = sqrt(v_x_mlb^2 + v_y_mlb^2 + v_z_mlb^2)
#   u_x_mlb = v_x_mlb / length_hs_mlb
#   u_y_mlb = v_y_mlb / length_hs_mlb
#   u_z_mlb = v_z_mlb / length_hs_mlb
#   
#   # Perpendicular vector in x/y plane only
#   perp_x_mlb = -u_y_mlb
#   perp_y_mlb =  u_x_mlb
#   
#   # Generate bat outline - two sides of the profile + z from spine
#   n_pts = nrow(bat_scaled)
#   
#   # Side 1 (+ perpendicular)
#   x_side1 = numeric(n_pts)
#   y_side1 = numeric(n_pts)
#   z_side1 = numeric(n_pts)
#   
#   # Side 2 (- perpendicular)
#   x_side2 = numeric(n_pts)
#   y_side2 = numeric(n_pts)
#   z_side2 = numeric(n_pts)
#   
#   for(i in 1:n_pts) {
#     x_local_mlb = bat_length - bat_scaled$x[i]  # along bat axis
#     radius = bat_scaled$y[i]                      # bat profile width
#     
#     # Spine position in 3D
#     spine_x = head_x_mlb + x_local_mlb * u_x_mlb
#     spine_y = head_y_mlb + x_local_mlb * u_y_mlb
#     spine_z = head_z_mlb + x_local_mlb * u_z_mlb
#     
#     # Offset in x/y plane only using perpendicular
#     x_side1[i] = spine_x + radius * perp_x_mlb
#     y_side1[i] = spine_y + radius * perp_y_mlb
#     z_side1[i] = spine_z
#     
#     x_side2[i] = spine_x - radius * perp_x_mlb
#     y_side2[i] = spine_y - radius * perp_y_mlb
#     z_side2[i] = spine_z
#   }
#   
#   bat_matrices_mlb[[frame_idx]] = list(
#     x = c(x_side1, rev(x_side2), x_side1[1]),
#     y = c(y_side1, rev(y_side2), y_side1[1]),
#     z = c(z_side1, rev(z_side2), z_side1[1])
#   )
# }
# 
# for(frame_idx in 1:length(bat_matrices_mlb)) {
#   
#   if (is.null(bat_matrices_mlb[[frame_idx]])) {
#     next
#   }
#   
#   bat_line = bat_matrices_mlb[[frame_idx]]
#   
#   p_inside = p_inside %>%
#     add_trace(
#       x = bat_line$x,
#       y = bat_line$y,
#       z = bat_line$z,
#       type = "scatter3d", mode = "lines",
#       line = list(color = "#8c8a88", width = 3),
#       showlegend = FALSE,
#       opacity = 0.5
#     )
#   
#   p_above = p_above %>%
#     add_trace(
#       x = bat_line$x,
#       y = bat_line$y,
#       z = bat_line$z,
#       type = "scatter3d", mode = "lines",
#       line = list(color = "#8c8a88", width = 3),
#       showlegend = FALSE,
#       opacity = 0.5
#     )
#   
#   p_side = p_side %>%
#     add_trace(
#       x = bat_line$x,
#       y = bat_line$y,
#       z = bat_line$z,
#       type = "scatter3d", mode = "lines",
#       line = list(color = "#8c8a88", width = 3),
#       showlegend = FALSE,
#       opacity = 0.5
#     )
#   
#   p_center = p_center %>%
#     add_trace(
#       x = bat_line$x,
#       y = bat_line$y,
#       z = bat_line$z,
#       type = "scatter3d", mode = "lines",
#       line = list(color = "#8c8a88", width = 3),
#       showlegend = FALSE,
#       opacity = 0.5
#     )
# }

# Collect head and knob positions across all frames
# head_x_all = numeric(length(frames_with_bat))
# head_y_all = numeric(length(frames_with_bat))
# head_z_all = numeric(length(frames_with_bat))
# knob_x_all = numeric(length(frames_with_bat))
# knob_y_all = numeric(length(frames_with_bat))
# knob_z_all = numeric(length(frames_with_bat))
# 
# for(i in seq_along(frames_with_bat)) {
#   frame_idx = frames_with_bat[i]
#   
#   head_x = fake_mlb_swing_pred$pred_head_pos_x_smooth[frame_idx]
#   head_y = fake_mlb_swing_pred$pred_head_pos_y_smooth[frame_idx]
#   head_z = fake_mlb_swing_pred$pred_head_pos_z_smooth[frame_idx]
#   
#   sweetspot_x = fake_mlb_swing_pred$pred_sweetspot_pos_x_smooth[frame_idx]
#   sweetspot_y = fake_mlb_swing_pred$pred_sweetspot_pos_y_smooth[frame_idx]
#   sweetspot_z = fake_mlb_swing_pred$pred_sweetspot_pos_z_smooth[frame_idx]
#   
#   v_x = sweetspot_x - head_x
#   v_y = sweetspot_y - head_y
#   v_z = sweetspot_z - head_z
#   
#   length_hs = sqrt(v_x^2 + v_y^2 + v_z^2)
#   u_x = v_x / length_hs
#   u_y = v_y / length_hs
#   u_z = v_z / length_hs
#   
#   head_x_all[i] = head_x
#   head_y_all[i] = head_y
#   head_z_all[i] = head_z
#   
#   knob_x_all[i] = head_x + bat_length * u_x
#   knob_y_all[i] = head_y + bat_length * u_y
#   knob_z_all[i] = head_z + bat_length * u_z
# }

# Build surface matrices - 2 rows (head and knob), n_frames columns
# surf_x = rbind(head_x_all * flip, knob_x_all * flip)
# surf_y = rbind(head_y_all, knob_y_all)
# surf_z = rbind(head_z_all, knob_z_all)

# p_inside = p_inside %>%
#   add_surface(
#     x = surf_x*flip, y = surf_y, z = surf_z,
#     colorscale = list(c(0, "#8c8a88"), c(1, "#8c8a88")),
#     showscale = FALSE,
#     opacity = .8
#   )
# 
# p_above = p_above %>%
#   add_surface(
#     x = surf_x*flip, y = surf_y, z = surf_z,
#     colorscale = list(c(0, "#8c8a88"), c(1, "#8c8a88")),
#     showscale = FALSE,
#     opacity = .8
#   )
# 
# p_side = p_side %>%
#   add_surface(
#     x = surf_x*flip, y = surf_y, z = surf_z,
#     colorscale = list(c(0, "#8c8a88"), c(1, "#8c8a88")),
#     showscale = FALSE,
#     opacity = .8
#   )
# 
# p_center = p_center %>%
#   add_surface(
#     x = surf_x*flip, y = surf_y, z = surf_z,
#     colorscale = list(c(0, "#8c8a88"), c(1, "#8c8a88")),
#     showscale = FALSE,
#     opacity = .8
#   )

# Build surface matrices - 2 rows (head and knob), n_frames columns
# surf_x_player = rbind(head_x_all_player * flip, knob_x_all_player * flip)
# surf_y_player = rbind(head_y_all_player, knob_y_all_player)
# surf_z_player = rbind(head_z_all_player, knob_z_all_player)

# p_inside = p_inside %>%
#   add_surface(
#     x = surf_x_player*flip, y = surf_y_player, z = surf_z_player,
#     colorscale = list(c(0, "#cc7314"), c(1, "#cc7314")),
#     showscale = FALSE,
#     opacity = 1
#   )
# 
# p_above = p_above %>%
#   add_surface(
#     x = surf_x_player*flip, y = surf_y_player, z = surf_z_player,
#     colorscale = list(c(0, "#cc7314"), c(1, "#cc7314")),
#     showscale = FALSE,
#     opacity = 1
#   )
# 
# p_side = p_side %>%
#   add_surface(
#     x = surf_x_player*flip, y = surf_y_player, z = surf_z_player,
#     colorscale = list(c(0, "#cc7314"), c(1, "#cc7314")),
#     showscale = FALSE,
#     opacity = 1
#   )
# 
# p_center = p_center %>%
#   add_surface(
#     x = surf_x_player*flip, y = surf_y_player, z = surf_z_player,
#     colorscale = list(c(0, "#cc7314"), c(1, "#cc7314")),
#     showscale = FALSE,
#     opacity = 1
#   )