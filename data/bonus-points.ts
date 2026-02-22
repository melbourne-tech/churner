import { sql } from '~/lib/db'
import { BonusPointsStats, RewardsProgram } from './types'

interface InsertBonusPointsHistory {
  cardId: string
  rewardsProgram: RewardsProgram
  amount: number
  minimumSpendCents: number
  timeFrameDays: number
  yearlyFeeCents: number
}

export async function insertBonusPointsHistory(
  row: InsertBonusPointsHistory,
) {
  const [result] = await sql<{ id: string }[]>`
    INSERT INTO bonus_points_history (
      card_id,
      rewards_program,
      amount,
      minimum_spend_cents,
      time_frame_days,
      yearly_fee_cents
    ) VALUES (
      ${row.cardId},
      ${row.rewardsProgram},
      ${row.amount},
      ${row.minimumSpendCents},
      ${row.timeFrameDays},
      ${row.yearlyFeeCents}
    )
    RETURNING id
  `
  return result
}

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
