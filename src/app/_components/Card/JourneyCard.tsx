import React from 'react'
import { CardProps } from './types'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { sanitize } from 'isomorphic-dompurify'
import Button from '../Button'

const JourneyCard = ({ date, description, readMore, button, image, title, className }: Omit<CardProps, 'type'>) => {
  return (
    <div className={cn('flex flex-col p-[4.194vw] tablet:p-[2.5vw] desktop:p-[1.04vw] gap-[2.33vw] tablet:gap-[1.875vw] desktop:gap-[1.3vw] rounded-[6.99vw] tablet:rounded-[3.75vw] desktop:rounded-[1.56vw] linear-border-vertical cursor-pointer transition-all duration-700 hover:desktop:p-0 group overflow-hidden bg-white ', className)} >
      {image && <div className='shrink-0 w-full h-[59.648vw] tablet:h-[38.875vw] desktop:h-[16.172vw] rounded-t-[6.99vw] tablet:rounded-t-[3.75vw] desktop:rounded-t-[1.56vw] rounded-b-[2.33vw] tablet:rounded-b-[1.25vw] desktop:rounded-b-[0.52vw] overflow-hidden group-hover:w-full group-hover:h-full  transition-all duration-700 group-hover:rounded-b-[6.99vw]  group-hover:tablet:rounded-b-[3.75vw]  group-hover:desktop:rounded-b-[1.56vw] '>
        <Image {...image} alt='country' className='h-full w-full object-cover' />
      </div>}
      <div className='transition-all duration-200 group-hover:hidden flex justify-between items-center font-bold text-[4.66vw] tablet:text-[3vw] desktop:text-[1.456vw]'>
        <span>{title}</span>
        <span className='text-primary-900'>{date}</span>
      </div>
      <div className='transition-all duration-200 group-hover:opacity-0 text-gray-450 flex flex-col justify-between gap-[2.33vw] tablet:gap-[1.25vw] desktop:gap-[1.04vw] h-full  text-[3.262vw] tablet:text-[1.75vw] desktop:text-[0.936vw] '>
        <p>{description}</p>
        {readMore && <p className='[&>span]:text-primary-900' dangerouslySetInnerHTML={{ __html: sanitize(readMore) }} />}
      </div>
      {button && <Button {...button} theme='transparent' className='absolute top-[50%] left-0 -translate-x-[50%] group-hover:left-[50%] -translate-y-[50%] w-fit text-nowrap hidden group-hover:block' />}
    </div>
  )
}

export default JourneyCard