/* eslint-disable jsx-a11y/alt-text */
import { HomePageBannerProps } from '@/models/IDictionary/HomePage'
import Image from 'next/image'
import React from 'react'

const MidLayer = ({ secondLayerData: { image, luxuary } }: Pick<HomePageBannerProps, 'secondLayerData'>) => {
  return (
    <div className='midLayer absolute top-0 left-0 h-screen w-auto '>
      <h2
        dangerouslySetInnerHTML={{ __html: luxuary }}
        className='luxuryBox desktop:max-w-[47.736vw] z-[2] desktop:text-[7.28vw] leading-1 opacity-0 font-bold textShadow text-white absolute desktop:bottom-[1.56vw] desktop:right-[1.56vw] '
      />
      <Image {...image} className='w-full object-cover min-h-screen scale-75' />
    </div>
  )
}

export default MidLayer