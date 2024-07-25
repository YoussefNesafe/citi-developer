import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export type LogoProps = {
  type?: "gold" | "white"
}


const Logo = ({ type = "gold" }: LogoProps) => {
  return (
    <Link href={"/"}>
      {
        type === "gold" ? <Image src='/images/shared/logo-gold.png' alt='logo' width={286} height={95} className='w-auto h-[15vw] tablet:h-[10vw]  desktop:h-[4.94vw]' /> : <Image src='/images/shared/logo-white.png' alt='logo' width={286} height={95} className='w-auto h-[15vw] tablet:h-[10vw] desktop:h-[4.94vw]' />
      }
    </Link>
  )
}

export default Logo