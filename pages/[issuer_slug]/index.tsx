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
import { getCardsByIssuerId } from '~/data/cards'
import { getIssuerBySlug, getIssuerSlugs } from '~/data/issuers'
import { RewardsProgram } from '~/data/types'
import { useUrlState } from '~/lib/router'
import { NextPageWithLayout } from '~/lib/types'

export const getStaticPaths: GetStaticPaths = async () => {
  const issuers = await getIssuerSlugs()

  return {
    paths: issuers.map(({ slug }) => ({
      params: {
        issuer_slug: slug,
      },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const issuerSlug = params?.issuer_slug as string

  const issuer = await getIssuerBySlug(issuerSlug)
  if (!issuer) return { notFound: true }

  const cards = await getCardsByIssuerId(issuer.id)

  return {
    props: {
      issuer,
      cards,
    },
    revalidate: 10 * 60, // 10 minutes
  }
}

interface IssuerPageProps extends InferGetStaticPropsType<
  typeof getStaticProps
> {}

const IssuerPage: NextPageWithLayout<IssuerPageProps> = ({
  issuer,
  cards: allCards,
}) => {
  const availableRewardsPrograms = Array.from(
    new Set(
      allCards.flatMap((card) =>
        card.bonusPoints.map(({ rewardsProgram }) => rewardsProgram),
      ),
    ),
  )
  const hasMultipleRewardsPrograms = availableRewardsPrograms.length > 1

  const [rewardsProgram, setRewardsProgram] = useUrlState<RewardsProgram>(
    'program',
    availableRewardsPrograms[0],
    availableRewardsPrograms,
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

IssuerPage.getLayout = (page) => <Layout>{page}</Layout>

export default IssuerPage
