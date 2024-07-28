/* eslint-disable jsx-a11y/alt-text */
import LongArrowUp from '@/app/_components/icons/LongArrowUp'
import { HomePageBannerProps } from '@/models/IDictionary/HomePage'
import Image from 'next/image'
import React from 'react'

const FirstLayer = ({ firstLayerData, sloganBox }: Pick<HomePageBannerProps, 'firstLayerData' | 'sloganBox'>) => {
  return (
    <div className='firstLayer h-screen w-auto overflow-hidden'>
      <div className='sloganBox absolute desktop:left-0 opacity-0 desktop:bottom-[1.56vw] z-[2] desktop:max-w-[28.236vw] bg-black/50 rounded-lg desktop:p-[1.04vw] backdrop-blur-sm'>
        <h2 className='textShadow text-primary-600  desktop:text-[1.56vw] font-semibold'>{sloganBox.title}</h2>
        <div className='desktop:text-[2.6vw] font-semibold text-white textShadow'>{sloganBox.description}</div>
      </div>
      <div className='experienceBox opacity-0 z-[2] absolute desktop:-bottom-[1.56vw] desktop:left-0 w-full desktop:text-[1.04vw] font-semibold flex flex-col items-center justify-center'>
        <LongArrowUp />
        <div className='w-full text-center text-white'>{firstLayerData.startText}</div>
      </div>
      <Image {...firstLayerData.image} className='min-h-screen background w-full object-cover h-auto desktop:-mt-[3.12vw] ' />
    </div>
  )
}

export default FirstLayer