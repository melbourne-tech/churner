import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useMemo, useState } from 'react'
import CardLink from '~/components/CardLink'
import Layout from '~/components/Layout'
import { Label } from '~/components/ui/Label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/Select'
import { Database } from '~/lib/database.types'
import { adminGraphQL } from '~/lib/supabase-admin'
import { NextPageWithLayout } from '~/lib/types'

export type RewardsProgram = Database['public']['Enums']['rewards_program']

export const getStaticProps: GetStaticProps = async () => {
  const query = /* GraphQL */ `
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
  `

  const { data } = await adminGraphQL(query)

  return {
    props: {
      cards: data.cards.edges
        .map(({ node }: any) => ({
          ...node,
          bonusPoints: node.bonusPoints.edges.map(({ node }: any) => node),
          scores: node.scores.edges.map(({ node }: any) => node),
        }))
        .sort((a: any, b: any) => b.scores[0].score - a.scores[0].score),
    },
  }
}

interface HomePageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const Home: NextPageWithLayout = ({ cards: allCards }: HomePageProps) => {
  const [rewardsProgram, setRewardsProgram] = useState<RewardsProgram>('QANTAS')
  const cards = useMemo(
    () =>
      allCards.filter((card: any) =>
        card.scores.some(
          (score: any) => score.rewardsProgram === rewardsProgram
        )
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
        {cards.map((card: any) => {
          const score = card.scores.find(
            (score: any) => score.rewardsProgram === rewardsProgram
          )?.score
          const bonusPoints = card.bonusPoints.find(
            (bonusPoint: any) => bonusPoint.rewardsProgram === rewardsProgram
          )?.amount

          return (
            <li key={card.id}>
              <CardLink
                issuerSlug={card.issuer.slug}
                cardSlug={card.slug}
                issuerName={card.issuer.name}
                cardName={card.name}
                score={score}
                bonusPoints={bonusPoints}
                yearlyFeeCents={card.yearlyFeeCents}
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
