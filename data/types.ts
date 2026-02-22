export enum RewardsProgram {
  Qantas = 'QANTAS',
  Velocity = 'VELOCITY',
}

export interface Issuer {
  id: string
  slug: string
  name: string
  url: string | null
}

export interface BonusPoint {
  id: string
  cardId: string
  rewardsProgram: RewardsProgram
  amount: number
  minimumSpendCents: string
  timeFrameDays: number
  yearlyFeeCents: string
}

export interface CardScore {
  id: string
  rewardsProgram: RewardsProgram | null
  score: number | null
}

export interface BonusPointsStats {
  rewardsProgram: RewardsProgram
  minAmount: number | null
  maxAmount: number | null
  minMinimumSpendCents: string | null
  maxMinimumSpendCents: string | null
  minYearlyFeeCents: string | null
  maxYearlyFeeCents: string | null
  minTimeFrameDays: number | null
  maxTimeFrameDays: number | null
}
