import { Plus } from 'lucide-react'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { useMemo } from 'react'
import CardLink from '~/components/CardLink'
import RewardsProgramPicker from '~/components/RewardsProgramPicker'
import Layout from '~/components/layout/Layout'
import { Button } from '~/components/ui/Button'
import { getCards } from '~/data/cards'
import { RewardsProgram } from '~/gql/graphql'
import { useUrlState } from '~/lib/router'
import { NextPageWithLayout } from '~/lib/types'

export const getStaticProps = async () => {
  const cards = await getCards()

  return {
    props: {
      cards,
    },
    revalidate: 10 * 60, // 10 minutes
  }
}

interface HomePageProps extends InferGetStaticPropsType<
  typeof getStaticProps
> {}

const Home: NextPageWithLayout<HomePageProps> = ({ cards: allCards }) => {
  const [rewardsProgram, setRewardsProgram] = useUrlState<RewardsProgram>(
    'program',
    RewardsProgram.Qantas,
    [RewardsProgram.Qantas, RewardsProgram.Velocity],
  )

  const cards = useMemo(
    () =>
      allCards
        .filter((card) =>
          card.scores.some((score) => score.rewardsProgram === rewardsProgram),
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
              (bonusPoint) => bonusPoint.rewardsProgram === rewardsProgram,
            )?.amount ?? 0
          const bPoints =
            b.bonusPoints.find(
              (bonusPoint) => bonusPoint.rewardsProgram === rewardsProgram,
            )?.amount ?? 0

          return bScore - aScore || bPoints - aPoints
        }),

    [allCards, rewardsProgram],
  )

  return (
    <>
      <div className="m-4 flex flex-col gap-6">
        <h1 className="text-2xl text-center font-bold">
          Compare Credit Card Welcome Bonuses
        </h1>

        <p>
          We rank cards by calculating a score based on the number of bonus
          points, annual fee, minimum spend, and the minimum spend period in
          relation to all the other cards.
          <br />
          Please note that scores may change as offers are updated, and new
          cards join the list.
          <br />
          <Link
            href="/faq"
            className="text-blue-600 hover:underline hover:text-blue-500 transition-colors"
          >
            Learn more about how we input the card details.
          </Link>
        </p>

        <Button variant="secondary" asChild>
          <a
            href={`mailto:hello@churner.com.au?subject=${encodeURIComponent(
              `Request a New Card`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start"
          >
            <Plus className="h-4 w-4" />
            <span>Request a New Card</span>
          </a>
        </Button>
      </div>

      <hr />

      <div className="m-4">
        <RewardsProgramPicker
          rewardsProgram={rewardsProgram}
          setRewardsProgram={setRewardsProgram}
        />
      </div>

      <ul className="flex flex-col divide-y">
        {cards.map((card) => {
          const score =
            card.scores.find((score) => score.rewardsProgram === rewardsProgram)
              ?.score ?? 0
          const bonusPoints = card.bonusPoints.find(
            (bonusPoint) => bonusPoint.rewardsProgram === rewardsProgram,
          )

          const cardAvailableRewardsPrograms = new Set(
            card.bonusPoints.map(({ rewardsProgram }) => rewardsProgram),
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

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
