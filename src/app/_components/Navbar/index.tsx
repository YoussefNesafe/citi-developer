"use client"
import { useWindowSize } from '@/hooks/useWindowSize'
import React from 'react'
import DesktopNavbar from './components/DesktopNavbar'
import MobileNavbar from './components/MobileNavbar'

const Navbar = () => {
  const { isDesktop } = useWindowSize()
  return (
    <nav className='fixed top-0'>
      {
        isDesktop ? <DesktopNavbar /> : <MobileNavbar />
      }
    </nav>
  )
}

export default Navbar