import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image'
import React, { HTMLAttributes } from 'react'

export type SideSectionImagesProps = HTMLAttributes<HTMLElement> & {
  images: ImageProps[];
  animatedText: string;
}


const SideSectionImages = ({ animatedText, images, className }: SideSectionImagesProps) => {

  const FormatAnimatedText = () => {
    return (
      <>
        {
          animatedText.split("").map((char, index) => <span style={{
            transform: `rotate(${index * 7}deg)`
          }}>{char}</span>)
        }
      </>
    )
  }

  return (
    <div className='w-full h-auto'>
      <div className={cn(' w-full h-full  desktop:h-full flex gap-[2.796vw] tablet:gap-[3.125vw] desktop:gap-[1.3vw]', className)}>
        <Image {...images[0]} alt={images[0]?.alt}
          className='self-end shadow-lg rounded-[4.66vw] tablet:rounded-[2.5vw] desktop:rounded-[1.976vw] object-cover w-[41.474vw] tablet:w-[45.25vw] desktop:w-[18.824vw] h-[73.861vw] tablet:h-[80.875vw] desktop:h-[33.644vw] z-[2]' />
        <div className='flex flex-col gap-[2.796vw] tablet:gap-[3.125vw] desktop:gap-[1.3vw]'>
          <Image {...images[1]} alt={images[1]?.alt}
            className='shadow-lg  rounded-[4.66vw] tablet:rounded-[2.5vw] desktop:rounded-[1.976vw] object-cover w-[41.008vw] tablet:w-[44.75vw] desktop:w-[18.616vw] h-[41.241vw] tablet:h-[45.25vw] desktop:h-[18.824vw]' />
          <Image {...images[2]} alt={images[2]?.alt}
            className='shadow-lg  rounded-[4.66vw] tablet:rounded-[2.5vw] desktop:rounded-[1.976vw] object-cover w-[41.008vw] tablet:w-[44.75vw] desktop:w-[18.616vw] h-[26.562vw] tablet:h-[29.125vw] desktop:h-[12.116vw]' />
        </div>
      </div>
      <div className='absolute -top-[10%] left-[50%] -translate-x-[50%] '>
        <div className='animatedText text-primary-600 text-[2.796vw] tablet:text-[1.75vw] desktop:text-[1.04vw] h-[30.29vw] tablet:h-[33.25vw] desktop:h-[13.832vw] w-[30.29vw] tablet:w-[33.25vw] desktop:w-[13.832vw] rounded-full relative'>
          <FormatAnimatedText />
        </div>
      </div>
    </div>
  )
}

export default SideSectionImages