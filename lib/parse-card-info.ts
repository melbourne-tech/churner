import { generateText, Output } from 'ai'
import z from 'zod'
import { stripIndent } from 'common-tags'

const schema = z.object({
  pointsAmount: z
    .number()
    .describe(
      'The number of points you will get as a bonus in the first year only',
    ),
  minimumSpend: z
    .number()
    .describe(
      'The minimum amount of money you need to spend in the first year to qualify for the bonus points',
    ),
  minimumSpendTimeframeDays: z
    .number()
    .describe(
      'The maximum number of days you can take to complete the minimum spend',
    ),
  yearlyFee: z
    .number()
    .describe(
      'The annual fee you will pay for the card including any reward program fees, minus any cashback/credit offers',
    ),
})

const systemPrompt = stripIndent`
  You are a structured data extraction assistant. Your task is to parse credit card welcome offer details from a markdown webpage and return them as structured data.

  You will be told which card and rewards program to extract for. The page may contain multiple cards — only extract information for the specified card. Ignore all other cards.

  Extract the following fields, applying these rules precisely:

  **pointsAmount**: The total bonus points earned in the first year only. If a card offers additional bonus points for keeping the card beyond the first year, ignore those. For example, if a card offers 90,000 bonus points in the first year and 30,000 for a second year, return 90000. The page may show points in multiple programs (e.g. a bank's own rewards program and the equivalent Qantas/Velocity points). If the specified rewards program (Qantas or Velocity) points value is shown, always use that value instead of the bank's internal rewards points. For example, "Automatically redeem 70,000 Velocity Points (from 140,000 NAB Rewards Bonus Points)" — if the specified program is VELOCITY, return 70000. However, some issuers (e.g. American Express) only show their own points program and do not list a separate Qantas/Velocity conversion. In that case, use the issuer's points value as-is.

  **yearlyFee**: The annual fee for the first year only, including any reward program fees. Subtract any cashback offered for meeting the minimum spend, but do NOT subtract other credits (e.g. travel credits, lounge passes). If the card charges a monthly fee instead, multiply it by 12 to get the annual fee. If the first-year fee differs from subsequent years, use only the first-year fee.

  **minimumSpend**: The total minimum spend required to earn the bonus points. If the card requires a minimum spend per month over several months, multiply the monthly amount by the number of months. For example, $1,000/month for 3 months = 3000.

  **minimumSpendTimeframeDays**: The number of days allowed to complete the minimum spend. If specified in months, convert to days (1 month = 30 days). If a monthly minimum spend is required over several months, set this to the number of months multiplied by 30.
`

export async function parseCardInfo(
  markdown: string,
  cardName: string,
  rewardsProgram?: 'QANTAS' | 'VELOCITY',
) {
  const { output } = await generateText({
    model: 'google/gemini-3-flash',
    output: Output.object({
      schema,
    }),
    system: systemPrompt,
    prompt: stripIndent`
      Card: ${cardName}
      Rewards Program: ${rewardsProgram ?? 'N/A'}
      
      Page content:
      ${markdown}
    `,
  })

  if (output.pointsAmount <= 0) {
    throw new Error('No points amount found')
  }

  return output
}
