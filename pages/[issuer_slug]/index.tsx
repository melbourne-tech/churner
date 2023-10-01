import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import { NextSeo } from 'next-seo'
import { useMemo } from 'react'
import CardLink from '~/components/CardLink'
import RewardsProgramPicker from '~/components/RewardsProgramPicker'
import Layout from '~/components/layout/Layout'
import { graphql } from '~/gql'
import { RewardsProgram } from '~/gql/graphql'
import { useUrlState } from '~/lib/router'
import supabaseAdmin, { adminGraphQLClient } from '~/lib/supabase-admin'
import { NextPageWithLayout } from '~/lib/types'

const query = graphql(/* GraphQL */ `
  query IssuerCardsQuery($issuerId: UUID!) {
    cards: cardsCollection(filter: { issuerId: { eq: $issuerId } }) {
      edges {
        node {
          id
          updatedAt
          slug
          name
          imagePath
          bonusPoints: bonusPointsCollection {
            edges {
              node {
                id
                updatedAt
                rewardsProgram
                amount
                yearlyFeeCents
              }
            }
          }
          scores: cardScoresCollection {
            edges {
              node {
                rewardsProgram
                score
              }
            }
          }
          issuer {
            id
            slug
            name
          }
        }
      }
    }
  }
`)

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await supabaseAdmin.from('issuers').select('slug')
  if (error) throw error

  return {
    paths: data.map(({ slug }) => ({
      params: {
        issuer_slug: slug,
      },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { data: issuerData } = await supabaseAdmin
    .from('issuers')
    .select('id,name')
    .eq('slug', params?.issuer_slug)
    .maybeSingle()
  if (!issuerData) return { notFound: true }

  const data = await adminGraphQLClient.request(query, {
    issuerId: issuerData.id,
  })
  if (!data.cards) throw new Error('Failed to fetch data from Supabase')

  return {
    props: {
      issuer: issuerData,
      cards: data.cards.edges.map(({ node }) => ({
        ...node,
        bonusPoints: node.bonusPoints?.edges.map(({ node }) => node) ?? [],
        scores: node.scores.edges.map(({ node }) => node),
      })),
    },
    revalidate: 10 * 60, // 10 minutes
  }
}

interface IssuerPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const IssuerPage: NextPageWithLayout<IssuerPageProps> = ({
  issuer,
  cards: allCards,
}) => {
  const availableRewardsPrograms = Array.from(
    new Set(
      allCards.flatMap((card) =>
        card.bonusPoints.map(({ rewardsProgram }) => rewardsProgram)
      )
    )
  )
  const hasMultipleRewardsPrograms = availableRewardsPrograms.length > 1

  const [rewardsProgram, setRewardsProgram] = useUrlState<RewardsProgram>(
    'program',
    availableRewardsPrograms[0],
    availableRewardsPrograms
  )

  const cards = useMemo(
    () =>
      allCards
        .filter((card) =>
          card.scores.some((score) => score.rewardsProgram === rewardsProgram)
        )
        .sort((a, b) => {
          const aScore =
            a.scores.find((score) => score.rewardsProgram === rewardsProgram)
              ?.score ?? 0
          const bScore =
            b.scores.find((score) => score.rewardsProgram === rewardsProgram)
              ?.score ?? 0

          const aPoints =
            a.bonusPoints.find(
              (bonusPoint) => bonusPoint.rewardsProgram === rewardsProgram
            )?.amount ?? 0
          const bPoints =
            b.bonusPoints.find(
              (bonusPoint) => bonusPoint.rewardsProgram === rewardsProgram
            )?.amount ?? 0

          return bScore - aScore || bPoints - aPoints
        }),

    [allCards, rewardsProgram]
  )

  return (
    <>
      <NextSeo title={`Compare Credit Cards from ${issuer.name}`} />

      <div className="m-4 flex flex-col gap-6">
        <h1 className="text-2xl text-center font-bold">{issuer.name}</h1>
      </div>
      {hasMultipleRewardsPrograms && (
        <div className="m-4">
          <RewardsProgramPicker
            rewardsProgram={rewardsProgram}
            setRewardsProgram={setRewardsProgram}
          />
        </div>
      )}

      <ul className="flex flex-col divide-y">
        {cards.map((card) => {
          const score =
            card.scores.find((score) => score.rewardsProgram === rewardsProgram)
              ?.score ?? 0
          const bonusPoints = card.bonusPoints.find(
            (bonusPoint) => bonusPoint.rewardsProgram === rewardsProgram
          )

          const cardAvailableRewardsPrograms = new Set(
            card.bonusPoints.map(({ rewardsProgram }) => rewardsProgram)
          )
          const hasMultipleRewardsPrograms =
            cardAvailableRewardsPrograms.size > 1

          return (
            <li key={card.id}>
              <CardLink
                issuerSlug={card.issuer.slug}
                cardSlug={card.slug}
                issuerName={card.issuer.name}
                cardName={card.name}
                imagePath={card.imagePath ?? undefined}
                score={score}
                bonusPoints={bonusPoints?.amount ?? 0}
                yearlyFeeCents={Number(bonusPoints?.yearlyFeeCents ?? 0)}
                rewardsProgram={rewardsProgram}
                hasMultipleRewardsPrograms={hasMultipleRewardsPrograms}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

IssuerPage.getLayout = (page) => <Layout>{page}</Layout>

export default IssuerPage
