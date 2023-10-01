create or replace view
  public.cards_scores as
select
  id,
  rewards_program,
  round(((yearly_fee_cents + (amount * 2) + minimum_spend_per_day_cents) / 4) * 100) as score
from cards_normalized_stats;