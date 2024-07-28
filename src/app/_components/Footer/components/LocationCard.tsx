import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { HTMLAttributes } from 'react'
import Button from '../../Button'
import { LocationCardProps } from '@/models/IDictionary/Layout'
import Link from 'next/link'

type Props = LocationCardProps & HTMLAttributes<HTMLElement>

const LocationCard = ({ title, description, locationUrl, button, className }: Props) => {
  return (
    <div className={cn('bg-white px-[7.456vw] h-fit tablet:px-[4vw] desktop:px-[2.496vw] py-[6.524vw] tablet:py-[3.5vw] desktop:py-[2.236vw] border-primary-900 border w-full  flex flex-col tablet:flex-row desktop:flex-col gap-[3.262vw] tablet:gap-[4vw] desktop:gap-[1.092vw]', className)}>
      <Link href={locationUrl} target='_blank' >
        <Image src='/images/shared/location-on-map.png' alt='location map' width={455} height={413} className='w-[70.832vw] tablet:w-[27vw] desktop:w-[23.556vw] h-auto' />
      </Link>
      <div className='flex flex-col h-full  gap-[3.262vw] tablet:gap-[2.625vw] desktop:gap-[1.092vw]'>
        <div className='leading-[1.25] text-[5.592vw] tablet:text-[3vw] desktop:text-[1.872vw] [&>span]:font-bold [&>span]:italic' dangerouslySetInnerHTML={{ __html: title }} />

        <div className='leading-[1.25] text-[2.796vw] tablet:text-[1.75vw] desktop:text-[0.936vw] text-wrap'>
          {description}
        </div>
        <Button size='md' {...button} className='uppercase self-end' />
      </div>
    </div>
  )
}

export default LocationCard