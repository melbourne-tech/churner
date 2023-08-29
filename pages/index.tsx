import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useMemo, useState } from 'react'
import CardLink from '~/components/CardLink'
import Layout from '~/components/layout/Layout'
import { Label } from '~/components/ui/Label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/Select'
import { graphql } from '~/gql'
import { Database } from '~/lib/database.types'
import { adminGraphQLClient } from '~/lib/supabase-admin'
import { NextPageWithLayout } from '~/lib/types'

export type RewardsProgram = Database['public']['Enums']['rewards_program']

export const getStaticProps = async () => {
  const query = graphql(/* GraphQL */ `
    query CardsQuery {
      cards: cardsCollection {
        edges {
          node {
            id
            updatedAt
            slug
            name
            imagePath
            yearlyFeeCents
            bonusPoints: bonusPointsCollection {
              edges {
                node {
                  id
                  updatedAt
                  rewardsProgram
                  amount
                }
              }
            }
            scores: scoresCollection {
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

  const data = await adminGraphQLClient.request(query)
  if (!data.cards) throw new Error('Failed to fetch data from Supabase')

  return {
    props: {
      cards: data.cards.edges
        .map(({ node }) => ({
          ...node,
          bonusPoints: node.bonusPoints?.edges.map(({ node }) => node) ?? [],
          scores: node.scores.edges.map(({ node }) => node),
        }))
        .sort((a, b) => (b.scores[0]?.score ?? 0) - (a.scores[0]?.score ?? 0)),
    },
  }
}

interface HomePageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const Home: NextPageWithLayout<HomePageProps> = ({ cards: allCards }) => {
  const [rewardsProgram, setRewardsProgram] = useState<RewardsProgram>('QANTAS')
  const cards = useMemo(
    () =>
      allCards.filter((card) =>
        card.scores.some((score) => score.rewardsProgram === rewardsProgram)
      ),
    [allCards, rewardsProgram]
  )

  return (
    <>
      <Head>
        <title>
          Credit Card Churner Australia &#8212; Compare Welcome Point Bonuses
          &amp; Offers
        </title>
        <link rel="icon" href="https://fav.farm/🧈" />
      </Head>

      <div className="m-3">
        <Label htmlFor="rewards-program" className="mb-1">
          Rewards Program
        </Label>
        <Select
          value={rewardsProgram}
          onValueChange={(value) => setRewardsProgram(value as RewardsProgram)}
        >
          <SelectTrigger id="rewards-program" className="w-full">
            <SelectValue placeholder="Rewards Program" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="QANTAS">Qantas</SelectItem>
            <SelectItem value="VELOCITY">Velocity</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ul className="flex flex-col divide-y">
        {cards.map((card) => {
          const score =
            card.scores.find((score) => score.rewardsProgram === rewardsProgram)
              ?.score ?? 0
          const bonusPoints =
            card.bonusPoints.find(
              (bonusPoint) => bonusPoint.rewardsProgram === rewardsProgram
            )?.amount ?? 0

          return (
            <li key={card.id}>
              <CardLink
                issuerSlug={card.issuer.slug}
                cardSlug={card.slug}
                issuerName={card.issuer.name}
                cardName={card.name}
                score={score}
                bonusPoints={bonusPoints}
                yearlyFeeCents={Number(card.yearlyFeeCents)}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
