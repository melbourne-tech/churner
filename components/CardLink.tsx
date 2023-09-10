import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { RewardsProgram } from '~/gql/graphql'
import { formatAUDollars, progressColorPair } from '~/lib/utils'
import CardImage from './CardImage'

export interface CardLinkProps {
  issuerSlug: string
  cardSlug: string
  issuerName: string
  cardName: string
  score: number
  bonusPoints: number
  yearlyFeeCents: number
  hasMultipleRewardsPrograms: boolean
  rewardsProgram: RewardsProgram
  imagePath?: string
}

const CardLink = ({
  issuerSlug,
  cardSlug,
  issuerName,
  cardName,
  score,
  bonusPoints,
  yearlyFeeCents,
  hasMultipleRewardsPrograms,
  rewardsProgram,
  imagePath,
}: CardLinkProps) => {
  const [pathColor, textColor] = progressColorPair(score / 100)

  return (
    <Link
      href={`/${issuerSlug}/${cardSlug}${
        hasMultipleRewardsPrograms ? `?program=${rewardsProgram}` : ''
      }`}
      className="flex items-center gap-3 px-4 py-4"
    >
      <div className="h-16 w-16">
        <CircularProgressbar
          value={score}
          text={`${score}`}
          strokeWidth={10}
          styles={buildStyles({
            textSize: '28px',
            textColor,
            pathColor,
          })}
        />
      </div>

      <div className="flex-1 flex flex-col">
        <span className="text-sm text-gray-700">{issuerName}</span>
        <span className="text-lg font-medium">{cardName}</span>
        <span className="text-sm text-gray-900">
          <strong className="font-semibold">
            {bonusPoints.toLocaleString()}
          </strong>{' '}
          Bonus Points &bull; {formatAUDollars(yearlyFeeCents / 100)}
        </span>
      </div>

      <div className="flex items-center gap-4">
        {imagePath && (
          <div className="w-24 hidden sm:block">
            <CardImage
              imagePath={imagePath}
              issuerName={issuerName}
              cardName={cardName}
              variant="small"
            />
          </div>
        )}

        <ArrowRight className="h-6 w-6" />
      </div>
    </Link>
  )
}

export default CardLink
