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
import { graphql } from '~/gql'
import { RewardsProgram } from '~/gql/graphql'
import { useUrlState } from '~/lib/router'
import supabaseAdmin, { adminGraphQLClient } from '~/lib/supabase-admin'
import { NextPageWithLayout } from '~/lib/types'
import { formatAUDollars } from '~/lib/utils'

const query = graphql(/* GraphQL */ `
  query CardQuery($issuerId: UUID!, $slug: Opaque!) {
    cardsCollection(
      first: 1
      filter: { issuerId: { eq: $issuerId }, slug: { eq: $slug } }
    ) {
      edges {
        node {
          id
          updatedAt
          slug
          name
          url
          imagePath
          issuer {
            id
            slug
            name
            url
          }
          bonusPoints: bonusPointsCollection(
            orderBy: { rewardsProgram: AscNullsLast }
          ) {
            edges {
              node {
                id
                rewardsProgram
                amount
                minimumSpendCents
                timeFrameDays
                yearlyFeeCents
              }
            }
          }
        }
      }
    }

    bonusPointsStatsCollection {
      edges {
        node {
          rewardsProgram
          minAmount
          maxAmount
          minMinimumSpendCents
          maxMinimumSpendCents
          minYearlyFeeCents
          maxYearlyFeeCents
          minTimeFrameDays
          maxTimeFrameDays
        }
      }
    }
  }
`)

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await supabaseAdmin
    .from('cards')
    .select('slug,issuer:issuers(slug)')
  if (error) throw error

  return {
    paths: data.map(({ slug, issuer }) => ({
      params: {
        card_slug: slug,
        issuer_slug: issuer?.slug,
      },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { data: issuerData } = await supabaseAdmin
    .from('issuers')
    .select('id')
    .eq('slug', params?.issuer_slug)
    .maybeSingle()
  if (!issuerData) return { notFound: true }

  const data = await adminGraphQLClient.request(query, {
    issuerId: issuerData.id,
    slug: params?.card_slug,
  })
  const card = data.cardsCollection?.edges?.[0]?.node
  if (!card) return { notFound: true }

  return {
    props: {
      card: {
        ...card,
        bonusPoints: card.bonusPoints?.edges.map(({ node }) => node) ?? [],
      },
      bonusPointsStats:
        data.bonusPointsStatsCollection?.edges.map(({ node }) => node) ?? [],
    },
    revalidate: 10 * 60, // 10 minutes
  }
}

interface CardPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const CardPage: NextPageWithLayout<CardPageProps> = ({
  card,
  bonusPointsStats,
}) => {
  const availableRewardsPrograms = card.bonusPoints.map(
    ({ rewardsProgram }) => rewardsProgram
  )
  const [rewardsProgram, setRewardsProgram] = useUrlState<RewardsProgram>(
    'program',
    availableRewardsPrograms[0] ?? RewardsProgram.Qantas,
    [RewardsProgram.Qantas, RewardsProgram.Velocity]
  )
  const hasMultipleRewardsPrograms = availableRewardsPrograms.length > 1

  const minMaxStats = bonusPointsStats.find(
    (stats) => stats.rewardsProgram === rewardsProgram
  )!
  const bonus = card.bonusPoints.find(
    (bonus) => bonus.rewardsProgram === rewardsProgram
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
                  `Incorrect Info for ${card.issuer.name} ${card.name} (${card.id})`
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
