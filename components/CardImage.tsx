import { VariantProps, cva } from 'class-variance-authority'
import Image from 'next/image'
import { getImageUrl } from '~/lib/images'

export const cardImageVariants = cva('overflow-hidden max-w-xs shadow-md', {
  variants: {
    variant: {
      default: 'border-8 rounded-[20px]',
      small: 'border-2 rounded-[5px]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface CardImageProps extends VariantProps<typeof cardImageVariants> {
  imagePath: string
  issuerName: string
  cardName: string
}

const CardImage = ({
  imagePath,
  issuerName,
  cardName,
  variant,
}: CardImageProps) => {
  return (
    <div className={cardImageVariants({ variant })}>
      <Image
        src={getImageUrl(imagePath)}
        width={600}
        height={380}
        alt={`${issuerName} ${cardName} Card`}
      />
    </div>
  )
}

export default CardImage
