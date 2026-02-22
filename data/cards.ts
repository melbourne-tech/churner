import { sql } from '~/lib/db'
import { BonusPoint, CardScore, Issuer, RewardsProgram } from './types'

interface CardRow {
  id: string
  updatedAt: Date
  slug: string
  name: string
  imagePath: string | null
  url: string | null
  issuerId: string
}

export async function getCards() {
  const cards = await sql<CardRow[]>`
    SELECT id, updated_at, slug, name, image_path, issuer_id
    FROM cards
  `
  if (cards.length === 0) return []

  const issuerIds = Array.from(new Set(cards.map((c) => c.issuerId)))
  const cardIds = cards.map((c) => c.id)

  const [issuers, bonusPoints, scores] = await Promise.all([
    sql<Issuer[]>`
      SELECT id, slug, name
      FROM issuers
      WHERE id = ANY(${issuerIds})
    `,
    sql<BonusPoint[]>`
      SELECT id, card_id, rewards_program, amount, yearly_fee_cents
      FROM bonus_points
      WHERE card_id = ANY(${cardIds})
    `,
    sql<CardScore[]>`
      SELECT id, rewards_program, score
      FROM cards_scores
      WHERE id = ANY(${cardIds})
    `,
  ])

  const issuerMap = new Map(issuers.map((i) => [i.id, i]))

  return cards.map((card) => ({
    id: card.id,
    updatedAt: card.updatedAt.toISOString(),
    slug: card.slug,
    name: card.name,
    imagePath: card.imagePath,
    issuer: issuerMap.get(card.issuerId)!,
    bonusPoints: bonusPoints
      .filter((bp) => bp.cardId === card.id)
      .map(({ cardId, ...bp }) => bp),
    scores: scores
      .filter((s) => s.id === card.id)
      .map(({ id, ...s }) => s),
  }))
}

export async function getCardsByIssuerId(issuerId: string) {
  const cards = await sql<CardRow[]>`
    SELECT id, updated_at, slug, name, image_path, issuer_id
    FROM cards
    WHERE issuer_id = ${issuerId}
  `
  if (cards.length === 0) return []

  const cardIds = cards.map((c) => c.id)

  const [issuers, bonusPoints, scores] = await Promise.all([
    sql<Issuer[]>`
      SELECT id, slug, name
      FROM issuers
      WHERE id = ${issuerId}
    `,
    sql<BonusPoint[]>`
      SELECT id, card_id, rewards_program, amount, yearly_fee_cents
      FROM bonus_points
      WHERE card_id = ANY(${cardIds})
    `,
    sql<CardScore[]>`
      SELECT id, rewards_program, score
      FROM cards_scores
      WHERE id = ANY(${cardIds})
    `,
  ])

  const issuer = issuers[0]

  return cards.map((card) => ({
    id: card.id,
    updatedAt: card.updatedAt.toISOString(),
    slug: card.slug,
    name: card.name,
    imagePath: card.imagePath,
    issuer,
    bonusPoints: bonusPoints
      .filter((bp) => bp.cardId === card.id)
      .map(({ cardId, ...bp }) => bp),
    scores: scores
      .filter((s) => s.id === card.id)
      .map(({ id, ...s }) => s),
  }))
}

export async function getCardByIssuerIdAndSlug(
  issuerId: string,
  slug: string,
) {
  const cards = await sql<CardRow[]>`
    SELECT id, updated_at, slug, name, url, image_path, issuer_id
    FROM cards
    WHERE issuer_id = ${issuerId} AND slug = ${slug}
    LIMIT 1
  `
  const card = cards[0]
  if (!card) return null

  const [issuers, bonusPoints] = await Promise.all([
    sql<Issuer[]>`
      SELECT id, slug, name, url
      FROM issuers
      WHERE id = ${issuerId}
    `,
    sql<(BonusPoint & { minimumSpendCents: string; timeFrameDays: number })[]>`
      SELECT id, card_id, rewards_program, amount, minimum_spend_cents, time_frame_days, yearly_fee_cents
      FROM bonus_points
      WHERE card_id = ${card.id}
      ORDER BY rewards_program ASC NULLS LAST
    `,
  ])

  return {
    id: card.id,
    updatedAt: card.updatedAt.toISOString(),
    slug: card.slug,
    name: card.name,
    url: card.url,
    imagePath: card.imagePath,
    issuer: issuers[0],
    bonusPoints: bonusPoints.map(({ cardId, ...bp }) => bp),
  }
}

export async function getCardsWithIssuerUrl() {
  return sql<{ id: string; name: string; url: string; rewardsProgram: RewardsProgram }[]>`
    SELECT c.id, c.name, c.card_issuer_url AS url, bp.rewards_program
    FROM cards c
    JOIN bonus_points bp ON bp.card_id = c.id
    WHERE c.card_issuer_url IS NOT NULL
  `
}

export async function getCardSlugsWithIssuer() {
  return sql<{ slug: string; issuerSlug: string }[]>`
    SELECT c.slug, i.slug as issuer_slug
    FROM cards c
    JOIN issuers i ON i.id = c.issuer_id
  `
}
