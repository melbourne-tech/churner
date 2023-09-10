
drop view public.cards_scores;

drop view public.cards_normalized_stats;

drop view public.bonus_points_stats;

alter table public.bonus_points
add column yearly_fee_cents bigint default 0;

update public.bonus_points bp
set
  yearly_fee_cents = c.yearly_fee_cents
from
  cards c
where
  c.id = bp.card_id;

alter table public.cards
drop column yearly_fee_cents;

alter table bonus_points
alter column yearly_fee_cents
set not null;

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
  round(((yearly_fee_cents + (amount * 2.5) + minimum_spend_per_day_cents) / 4.5) * 100) as score
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