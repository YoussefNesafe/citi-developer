import Card from '@/app/_components/Card'
import { CardType } from '@/app/_components/Card/types'
import SectionHeader from '@/app/_components/SectionHeader'
import { cn } from '@/lib/utils'
import { OurJourneySectionProps } from '@/models/IDictionary/HomePage'
import React from 'react'

const OurJourney = ({ cards, header, className, ...props }: OurJourneySectionProps) => {
  return (
    <section {...props} className={cn('flex flex-col gap-[6.99vw] tablet:gap-[6.25vw] desktop:gap-[4.68vw]', className)}>
      <SectionHeader {...header} className='text-center' />
      <div className='flex flex-col items-center desktop:flex-row desktop:items-stretch gap-[2.33vw] tablet:gap-[5vw] desktop:gap-[4.16vw] desktop:justify-between'>
        {
          cards.map((card, index) => <Card className='w-full tablet:max-w-[59.5vw] desktop:max-w-full desktop:w-[24.752vw]' key={index + "-card"} {...card} type={CardType.JOURNEY_CARD} />)
        }
      </div>
    </section>
  )
}

export default OurJourney