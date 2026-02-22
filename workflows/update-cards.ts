import { start } from 'workflow/api'
import { getCardsWithIssuerUrl } from '~/data/cards'
import { updateCardWorkflow, UpdateCardWorkflowInput } from './update-card'

async function getCardsStep() {
  'use step'

  const cards = await getCardsWithIssuerUrl()

  return cards
}

async function triggerUpdateCardWorkflowStep(card: UpdateCardWorkflowInput) {
  'use step'

  const run = await start(updateCardWorkflow, [card])

  return { runId: run.runId }
}

export async function updateCardsWorkflow() {
  'use workflow'

  const cards = await getCardsStep()

  const runs = await Promise.all(cards.map(triggerUpdateCardWorkflowStep))

  return runs
}
