import { getCards } from '~/data/cards'
import { parseCardInfo } from '~/lib/parse-card-info'
import { scrapeUrl } from '~/lib/scrapeless'

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
  rewardsProgram?: 'QANTAS' | 'VELOCITY',
) {
  'use step'

  return await parseCardInfo(markdown, cardName, rewardsProgram)
}

export async function updateCardWorkflow(card: {
  id: string
  name: string
  url: string
  rewardsProgram?: 'QANTAS' | 'VELOCITY'
}) {
  'use workflow'

  const markdown = await scrapeCardInfoAsMarkdownStep(card.url)

  console.log('markdown length:', markdown.length)

  const parsed = await parseCardInfoStep(
    markdown,
    card.name,
    card.rewardsProgram,
  )

  return { parsed }
}
