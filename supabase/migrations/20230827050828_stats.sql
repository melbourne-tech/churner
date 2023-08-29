create view
  public.bonus_points_stats as
select
  bp.rewards_program,
  min(c.yearly_fee_cents) as min_yearly_fee_cents,
  max(c.yearly_fee_cents) as max_yearly_fee_cents,
  min(c.points_per_dollar) as min_points_per_dollar,
  max(c.points_per_dollar) as max_points_per_dollar,
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
  join cards c on c.id = bp.card_id
group by
  bp.rewards_program;

create view
  public.cards_normalized_stats as
select
  c.id,
  bp.rewards_program,
  coalesce(abs(((c.yearly_fee_cents - stats.min_yearly_fee_cents)::double precision / nullif((stats.max_yearly_fee_cents - stats.min_yearly_fee_cents)::double precision, 0)) - 1), 1) as yearly_fee_cents,
  coalesce((c.points_per_dollar - stats.min_points_per_dollar)::double precision / nullif((stats.max_points_per_dollar - stats.min_points_per_dollar)::double precision, 0), 1) as points_per_dollar,
  coalesce((bp.amount - stats.min_amount)::double precision / nullif((stats.max_amount - stats.min_amount)::double precision, 0), 1) as amount,
  coalesce(abs(((bp.minimum_spend_cents - stats.min_minimum_spend_cents)::double precision / nullif((stats.max_minimum_spend_cents - stats.min_minimum_spend_cents)::double precision, 0)) - 1), 1) as minimum_spend_cents,
  coalesce((bp.time_frame_days - stats.min_time_frame_days)::double precision / nullif((stats.max_time_frame_days - stats.min_time_frame_days)::double precision, 0), 1) as time_frame_days,
  coalesce(abs(((bp.minimum_spend_per_day_cents - stats.min_minimum_spend_per_day_cents)::double precision / nullif((stats.max_minimum_spend_per_day_cents - stats.min_minimum_spend_per_day_cents)::double precision, 0)) - 1), 1) as minimum_spend_per_day_cents
from bonus_points bp
join cards c on c.id = bp.card_id
join bonus_points_stats stats on stats.rewards_program = bp.rewards_program;

comment on view public.cards_normalized_stats is e'@graphql({
  "primary_key_columns": ["id", "rewards_program"],
  "foreign_keys": [
    {
      "local_name": "normalizedStatsCollection",
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
  round(((yearly_fee_cents + points_per_dollar + (amount * 2) + time_frame_days + minimum_spend_per_day_cents) / 6) * 100) as score
from cards_normalized_stats;

comment on view public.cards_scores is e'@graphql({
  "primary_key_columns": ["id", "rewards_program"],
  "foreign_keys": [
    {
      "local_name": "scoresCollection",
      "local_columns": ["id"],
      "foreign_name": "card",
      "foreign_schema": "public",
      "foreign_table": "cards",
      "foreign_columns": ["id"]
    }
  ]
})';