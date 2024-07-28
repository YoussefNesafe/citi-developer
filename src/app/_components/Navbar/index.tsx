"use client"
import { useWindowSize } from '@/hooks/useWindowSize'
import React, { useRef } from 'react'
import DesktopNavbar from './components/DesktopNavbar'
import MobileNavbar from './components/MobileNavbar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { twMerge } from 'tailwind-merge'
import { NavbarProps } from '@/models/IDictionary/Layout'



const Navbar = ({ languages, links, contactUsButton }: NavbarProps) => {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        top: 0,
        duration: 1,
      })
    },
    {
      scope: containerRef,
    }
  );
  const { isDesktop } = useWindowSize();
  return (
    <header className={twMerge('fixed flex items-center z-50 -top-[17.475vw] tablet:-top-[10vw] desktop:-top-[6.25vw] w-full bg-white desktop:min-h-[4.948vw] shadow-lg rounded-b-[3.262vw] tablet:rounded-b-[1.75vw] desktop:rounded-b-[1.042vw] px-[6.99vw] tablet:px-[3.75vw] desktop:px-[4.16vw] justify-between')} ref={containerRef}>
      {
        isDesktop ? <DesktopNavbar
          contactUsButton={contactUsButton}
          links={links}
          languages={languages}
          className={'desktop:min-h-[4.948vw]'}
        /> :
          <MobileNavbar
            contactUsButton={contactUsButton}
            links={links}
            languages={languages} />
      }
    </header>
  )
}

export default Navbar