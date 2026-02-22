import { insertBonusPointsHistory } from '~/data/bonus-points'
import { RewardsProgram } from '~/data/types'
import { parseCardInfo } from '~/lib/parse-card-info'
import { scrapeUrl } from '~/lib/scrapeless'

export type UpdateCardWorkflowInput = {
  id: string
  name: string
  url: string
  rewardsProgram: RewardsProgram
}

// Map of hostnames to tags to wait for
const waitForTagMap = new Map<string, string>([
  ['www.americanexpress.com', '#eligibility'],
])

async function scrapeCardInfoAsMarkdownStep(url: string) {
  'use step'

  const waitForTag = waitForTagMap.get(new URL(url).hostname)

  return await scrapeUrl(url, waitForTag)
}

async function parseCardInfoStep(
  markdown: string,
  cardName: string,
  rewardsProgram: RewardsProgram,
) {
  'use step'

  return await parseCardInfo(markdown, cardName, rewardsProgram)
}

type BonusPointInfo = Awaited<ReturnType<typeof parseCardInfo>>

async function updateCardStep(
  card: UpdateCardWorkflowInput,
  info: BonusPointInfo,
) {
  'use step'

  return await insertBonusPointsHistory({
    cardId: card.id,
    rewardsProgram: card.rewardsProgram,
    amount: info.pointsAmount,
    minimumSpendCents: info.minimumSpend * 100,
    timeFrameDays: info.minimumSpendTimeframeDays,
    yearlyFeeCents: info.yearlyFee * 100,
  })
}

export async function updateCardWorkflow(card: UpdateCardWorkflowInput) {
  'use workflow'

  const markdown = await scrapeCardInfoAsMarkdownStep(card.url)

  const info = await parseCardInfoStep(markdown, card.name, card.rewardsProgram)

  return await updateCardStep(card, info)
}
