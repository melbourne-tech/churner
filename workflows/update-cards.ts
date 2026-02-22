import { getCards } from '~/data/cards'

async function getCardsStep() {
  'use step'

  const cards = await getCards()

  return cards
}

export async function updateCardsWorkflow() {
  'use workflow'

  const cards = await getCardsStep()

  return { cards }
}
