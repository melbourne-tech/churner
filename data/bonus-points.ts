import { sql } from '~/lib/db'
import { BonusPointsStats } from './types'

export async function getBonusPointsStats() {
  return sql<BonusPointsStats[]>`
    SELECT
      rewards_program,
      min_amount,
      max_amount,
      min_minimum_spend_cents,
      max_minimum_spend_cents,
      min_yearly_fee_cents,
      max_yearly_fee_cents,
      min_time_frame_days,
      max_time_frame_days
    FROM bonus_points_stats
  `
}
