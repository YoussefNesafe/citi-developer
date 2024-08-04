import LongArrowUp from '@/app/_components/icons/LongArrowUp'
import { HomePageBannerProps } from '@/models/IDictionary/HomePage'
import Image from 'next/image'
import React from 'react'

const FirstLayer = ({ firstLayerData, sloganBox }: Omit<HomePageBannerProps, 'secondLayerData' | 'thirdLayerData'>) => {
  return (
    <div className='firstLayer h-screen w-auto overflow-hidden'>
      <div className='sloganBox absolute translate-x-0 opacity-0 bottom-[23.3vw] tablet:bottom-[25vw] desktop:bottom-[1.56vw] z-[2] max-w-[52.425vw] tablet:max-w-[37.5vw] desktop:max-w-[28.236vw] bg-black/50 rounded-[2.796vw] tablet:rounded-[1.5vw] desktop:rounded-[0.624vw] p-[2.33vw] tablet:p-[2.5vw] desktop:p-[1.04vw] backdrop-blur-sm'>
        <h2 className='textShadow text-primary-600 text-[3.262vw] tablet:text-[3.75vw] desktop:text-[1.56vw] font-semibold'>{sloganBox.title}</h2>
        <div className='text-[4.194vw] tablet:text-[3vw] desktop:text-[2.6vw] font-semibold text-white textShadow'>{sloganBox.description}</div>
      </div>
      <div className='experienceBox opacity-0 z-[2] absolute bottom-0 -translate-y-[10%] w-full text-[3.728vw] tablet:text-[2.5vw] desktop:text-[1.04vw] font-semibold flex flex-col items-center justify-center'>
        <LongArrowUp />
        <div className='w-full text-center text-white textShadow'>{firstLayerData.startText}</div>
      </div>
      <Image {...firstLayerData.image} alt={firstLayerData.image.alt} className='min-h-screen background w-full object-cover h-auto desktop:-mt-[3.12vw]' />
    </div>
  )
}

export default FirstLayer