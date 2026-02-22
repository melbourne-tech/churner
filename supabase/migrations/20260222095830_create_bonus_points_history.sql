-- Drop dependent views (in reverse dependency order)
drop view if exists public.cards_scores;
drop view if exists public.cards_normalized_stats;
drop view if exists public.bonus_points_stats;

-- Drop the trigger on bonus_points (no longer needed since the table is going away)
drop trigger if exists bonus_points_updated_at on public.bonus_points;

-- Create the history table with the same structure as the current bonus_points table
create table
  public.bonus_points_history (
    "id" uuid primary key not null default gen_random_uuid (),
    "created_at" timestamp with time zone not null default now(),
    "card_id" uuid not null references public.cards ("id") on delete cascade on update cascade,
    "rewards_program" public.rewards_program not null,
    "amount" integer not null default 0,
    "minimum_spend_cents" bigint not null default 0,
    "time_frame_days" integer not null default 0,
    "minimum_spend_per_day_cents" double precision generated always as (
      case
        when time_frame_days > 0 then minimum_spend_cents / time_frame_days
        else 0
      end
    ) stored,
    "yearly_fee_cents" bigint not null default 0
  );

create index on public.bonus_points_history ("card_id", "rewards_program");
create index on public.bonus_points_history ("card_id", "rewards_program", "created_at" desc);

alter table public.bonus_points_history enable row level security;

-- Migrate all existing data from bonus_points into bonus_points_history
insert into public.bonus_points_history (
  id, created_at, card_id, rewards_program, amount,
  minimum_spend_cents, time_frame_days, yearly_fee_cents
)
select
  id, created_at, card_id, rewards_program, amount,
  minimum_spend_cents, time_frame_days, yearly_fee_cents
from public.bonus_points;

-- Drop the original table
drop table public.bonus_points;

-- Recreate bonus_points as a view showing the latest entry per (card_id, rewards_program)
create view
  public.bonus_points as
select distinct on (card_id, rewards_program)
  id,
  created_at,
  card_id,
  rewards_program,
  amount,
  minimum_spend_cents,
  time_frame_days,
  minimum_spend_per_day_cents,
  yearly_fee_cents
from public.bonus_points_history
order by card_id, rewards_program, created_at desc;

comment on view public.bonus_points is e'@graphql({
  "primary_key_columns": ["id"],
  "foreign_keys": [
    {
      "local_name": "bonusPointsCollection",
      "local_columns": ["card_id"],
      "foreign_name": "card",
      "foreign_schema": "public",
      "foreign_table": "cards",
      "foreign_columns": ["id"]
    }
  ]
})';

-- Recreate dependent views

create view
  public.bonus_points_stats as
select
  bp.rewards_program,
  min(bp.yearly_fee_cents) as min_yearly_fee_cents,
  max(bp.yearly_fee_cents) as max_yearly_fee_cents,
  min(bp.amount) as min_amount,
  max(bp.amount) as max_amount,
  min(bp.minimum_spend_cents) as min_minimum_spend_cents,
  max(bp.minimum_spend_cents) as max_minimum_spend_cents,
  min(bp.time_frame_days) as min_time_frame_days,
  max(bp.time_frame_days) as max_time_frame_days,
  min(bp.minimum_spend_per_day_cents) as min_minimum_spend_per_day_cents,
  max(bp.minimum_spend_per_day_cents) as max_minimum_spend_per_day_cents
from
  bonus_points bp
group by
  bp.rewards_program;

comment on view public.bonus_points_stats is e'@graphql({
  "primary_key_columns": ["rewards_program"]
})';

create view
  public.cards_normalized_stats as
select
  bp.card_id as id,
  bp.rewards_program,
  coalesce(abs((bp.yearly_fee_cents::double precision / nullif(stats.max_yearly_fee_cents::double precision, 0)) - 1), 1) as yearly_fee_cents,
  coalesce(bp.amount::double precision / nullif(stats.max_amount::double precision, 0), 1) as amount,
  coalesce(abs((bp.minimum_spend_cents::double precision / nullif(stats.max_minimum_spend_cents::double precision, 0)) - 1), 1) as minimum_spend_cents,
  coalesce(bp.time_frame_days::double precision / nullif(stats.max_time_frame_days::double precision, 0), 1) as time_frame_days,
  coalesce(abs((bp.minimum_spend_per_day_cents::double precision / nullif(stats.max_minimum_spend_per_day_cents::double precision, 0)) - 1), 1) as minimum_spend_per_day_cents
from bonus_points bp
join bonus_points_stats stats on stats.rewards_program = bp.rewards_program;

comment on view public.cards_normalized_stats is e'@graphql({
  "primary_key_columns": ["id", "rewards_program"],
  "foreign_keys": [
    {
      "local_name": "cardsNormalizedStatsCollection",
      "local_columns": ["id"],
      "foreign_name": "card",
      "foreign_schema": "public",
      "foreign_table": "cards",
      "foreign_columns": ["id"]
    }
  ]
})';

create view
  public.cards_scores as
select
  id,
  rewards_program,
  round(((yearly_fee_cents + (amount * 2) + minimum_spend_per_day_cents) / 4) * 100) as score
from cards_normalized_stats;

comment on view public.cards_scores is e'@graphql({
  "primary_key_columns": ["id", "rewards_program"],
  "foreign_keys": [
    {
      "local_name": "cardScoresCollection",
      "local_columns": ["id"],
      "foreign_name": "card",
      "foreign_schema": "public",
      "foreign_table": "cards",
      "foreign_columns": ["id"]
    }
  ]
})';
