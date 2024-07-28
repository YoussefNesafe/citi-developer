/* eslint-disable jsx-a11y/alt-text */
import Button from '@/app/_components/Button'
import { HomePageBannerProps } from '@/models/IDictionary/HomePage'
import Image from 'next/image'
import React from 'react'

const LastLayer = ({ thirdLayerData: { button, image, sloganText, title } }: Pick<HomePageBannerProps, 'thirdLayerData'>) => {
  return (
    <div className='lastLayer absolute top-0 left-0 h-screen w-full '>
      <div className='contactus opacity-0 desktop:-bottom-[5.208vw] absolute left-0 w-full z-[2] text-center  '>
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          className='desktop:max-w-[52.728vw] desktop:mb-[0.833vw] text-white font-lexendExa m-auto font-bold desktop:text-[5.72vw] textShadow'
        />
        <div className=' w-full bottom-0 flex flex-col justify-center items-center bg-white'>
          <Button theme='secondary' {...button} className='desktop:-translate-y-[2.084vw]' />
          <p className=' desktop:text-[1.042vw]'>{sloganText}</p>
        </div>
      </div>
      <Image {...image} className='w-full min-h-screen object-cover h-auto desktop:scale-[0.16]' />
    </div>
  )
}

export default LastLayer