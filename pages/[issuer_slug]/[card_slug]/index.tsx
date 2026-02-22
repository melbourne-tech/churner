import { AlertTriangle, ExternalLink } from 'lucide-react'
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import CardImage from '~/components/CardImage'
import RewardsProgramPicker from '~/components/RewardsProgramPicker'
import ScoreBar from '~/components/ScoreBar'
import Layout from '~/components/layout/Layout'
import { Button } from '~/components/ui/Button'
import { getBonusPointsStats } from '~/data/bonus-points'
import { getCardByIssuerIdAndSlug, getCardSlugsWithIssuer } from '~/data/cards'
import { getIssuerBySlug } from '~/data/issuers'
import { RewardsProgram } from '~/data/types'
import { useUrlState } from '~/lib/router'
import { NextPageWithLayout } from '~/lib/types'
import { formatAUDollars } from '~/lib/utils'

export const getStaticPaths: GetStaticPaths = async () => {
  const cards = await getCardSlugsWithIssuer()

  return {
    paths: cards.map(({ slug, issuerSlug }) => ({
      params: {
        card_slug: slug,
        issuer_slug: issuerSlug,
      },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const issuerSlug = params?.issuer_slug as string
  const cardSlug = params?.card_slug as string

  const issuer = await getIssuerBySlug(issuerSlug)
  if (!issuer) return { notFound: true }

  const card = await getCardByIssuerIdAndSlug(issuer.id, cardSlug)
  if (!card) return { notFound: true }
  if (card.bonusPoints.length === 0) return { notFound: true }

  const bonusPointsStats = await getBonusPointsStats()

  return {
    props: {
      card,
      bonusPointsStats,
    },
    revalidate: 10 * 60, // 10 minutes
  }
}

interface CardPageProps extends InferGetStaticPropsType<
  typeof getStaticProps
> {}

const CardPage: NextPageWithLayout<CardPageProps> = ({
  card,
  bonusPointsStats,
}) => {
  const availableRewardsPrograms = card.bonusPoints.map(
    ({ rewardsProgram }) => rewardsProgram,
  )
  const [rewardsProgram, setRewardsProgram] = useUrlState<RewardsProgram>(
    'program',
    availableRewardsPrograms[0] ?? RewardsProgram.Qantas,
    [RewardsProgram.Qantas, RewardsProgram.Velocity],
  )
  const hasMultipleRewardsPrograms = availableRewardsPrograms.length > 1

  const minMaxStats = bonusPointsStats.find(
    (stats) => stats.rewardsProgram === rewardsProgram,
  )!
  const bonus = card.bonusPoints.find(
    (bonus) => bonus.rewardsProgram === rewardsProgram,
  )!

  return (
    <>
      <NextSeo title={`${card.issuer.name} ${card.name}`} />

      <div className="m-4 flex flex-col">
        <div className="flex flex-col gap-8">
          <div>
            <Link
              href={`/${card.issuer.slug}`}
              className="text-xl font-semibold"
            >
              {card.issuer.name}
            </Link>
            <h1 className="text-3xl font-bold">{card.name}</h1>
          </div>

          {card.imagePath && (
            <div className="flex items-center justify-center">
              <CardImage
                imagePath={card.imagePath}
                issuerName={card.issuer.name}
                cardName={card.name}
              />
            </div>
          )}

          <div className="overflow-x-scroll flex gap-2">
            {card.url && (
              <Button variant="default" asChild>
                <a href={card.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  <span>Visit Card Website</span>
                </a>
              </Button>
            )}

            <Button variant="secondary" asChild>
              <a
                href={`mailto:hello@churner.com.au?subject=${encodeURIComponent(
                  `Incorrect Info for ${card.issuer.name} ${card.name} (${card.id})`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AlertTriangle className="h-4 w-4" />
                <span>Report Incorrect Info</span>
              </a>
            </Button>
          </div>
        </div>

        <hr className="mt-8 mb-4" />

        {hasMultipleRewardsPrograms && (
          <RewardsProgramPicker
            rewardsProgram={rewardsProgram}
            setRewardsProgram={setRewardsProgram}
          />
        )}

        <div className="flex flex-col gap-4 mt-4">
          <ScoreBar
            label="Bonus Points"
            value={bonus.amount}
            min={minMaxStats.minAmount!}
            max={minMaxStats.maxAmount!}
          />

          <ScoreBar
            label="Annual Fee"
            value={Number(bonus.yearlyFeeCents)}
            min={Number(minMaxStats.minYearlyFeeCents)}
            max={Number(minMaxStats.maxYearlyFeeCents)}
            formatter={(value) => formatAUDollars(value / 100)}
            reverse={true}
          />

          <ScoreBar
            label="Minimum Spend"
            value={Number(bonus.minimumSpendCents)}
            min={Number(minMaxStats.minMinimumSpendCents)}
            max={Number(minMaxStats.maxMinimumSpendCents)}
            formatter={(value) => formatAUDollars(value / 100)}
            reverse={true}
          />

          <ScoreBar
            label="Day Minimum Spend Period"
            value={bonus.timeFrameDays}
            min={minMaxStats.minTimeFrameDays!}
            max={minMaxStats.maxTimeFrameDays!}
          />
        </div>
      </div>
    </>
  )
}

CardPage.getLayout = (page) => <Layout>{page}</Layout>

export default CardPage
