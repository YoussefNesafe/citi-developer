"use client"
import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'
import Image from 'next/image'
import { FooterProps, SocialMediaLinkProps } from '@/models/IDictionary/Layout'
import Link from 'next/link'
import X from '../../icons/X'
import Facebook from '../../icons/Facebook'
import Linkedin from '../../icons/Linkedin'
import Instagram from '../../icons/Instagram'
import Youtube from '../../icons/Youtube'
import Button from '../../Button'
import ArrowDown from '../../icons/ArrowDown'
import { useWindowSize } from '@/hooks/useWindowSize'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion'
import NavLink from '../../Navbar/components/NavLink'

type Props = Pick<FooterProps, 'links' | 'socialMediaLinks' | 'contactUsButton'> & HTMLAttributes<HTMLElement>


const SocialMediaLinks = ({ links }: { links: SocialMediaLinkProps[] }) => {
  const IconsMap = {
    x: <X />,
    facebook: <Facebook />,
    linkedin: <Linkedin />,
    instagram: <Instagram />,
    youtube: <Youtube />
  }

  type iconType = keyof typeof IconsMap
  return (
    <div className='flex w-full items-center justify-between tablet:w-fit gap-[1.864vw] tablet:gap-[1.25vw] desktop:gap-[0.416vw]'>

      {
        links.map(({ href, icon }) => <Link key={href} href={href} className='[&>svg>path]:hover:fill-primary-900 hover:[&>svg]:fill-white  w-[10.718vw] tablet:w-[7.75vw] desktop:w-[2.392vw] h-[10.718vw] shrink-0 [&>svg]:w-full [&>svg]:h-full tablet:h-[7.75vw] desktop:h-[2.392vw]'>
          {IconsMap?.[icon as iconType]}
        </Link>)
      }
    </div>
  )
}

const DesktopLinks = ({ links, contactUsButton }: Pick<FooterProps, 'contactUsButton' | 'links'>) => {
  return (
    <div className='flex justify-between items-start text-white'>
      {
        links.map(link => (
          link?.href ? <Link key={link.pageKey} href={link.href} className='desktop:text-[1.04vw] font-medium leading-[1.25]'>{link.title}</Link> : <div key={link.pageKey} className='flex flex-col desktop:gap-[1.3vw]'>
            <div className='flex items-center desktop:gap-[0.52vw] desktop:text-[1.04vw] font-medium leading-[1.25]'>
              {link.title}
              <ArrowDown fill='#FFFFFF' fillOpacity={1} className='desktop:w-[0.572vw] desktop:h-[0.416vw]' />
            </div>
            <div className='flex flex-col desktop:gap-[0.416vw]'>
              {link?.subLinks?.map(subLink => <Link className='desktop:text-[1.04vw] leading-[1.25]' key={subLink.pageKey} href={subLink.href}>{subLink.title}</Link>)}
            </div>
          </div>
        ))
      }
      <Button {...contactUsButton} size='sm' theme='white' className='uppercase' />
    </div>
  )
}

const MobileLinks = ({ links, contactUsButton }: Pick<FooterProps, 'contactUsButton' | 'links'>) => {
  return <>
    <Accordion type='single' collapsible>
      {
        links.map(link => (
          <AccordionItem value={link.pageKey} key={link.pageKey} className='border-b-white'>
            {
              link?.href ?
                <NavLink {...link} className='py-[3.262vw] tablet:py-[1.75vw] text-white ' />
                : <>
                  <AccordionTrigger className={cn(
                    'py-[3.262vw] tablet:py-[1.75vw]  text-white text-[3.728vw] tablet:text-[2vw]'
                  )}>
                    {link.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    {
                      link?.subLinks?.map(sublink => <NavLink key={sublink.pageKey} {...sublink} className='py-[2.33vw] tablet:py-[1.25vw] mx-[4.66vw] tablet:mx-[2.5vw] px-[4.66vw] tablet:px-[2.5vw] transition-all duration-300  border-b-[0.233vw] last-of-type:border-none  border-white/50 text-white' />)
                    }
                  </AccordionContent>
                </>
            }
          </AccordionItem>
        ))
      }
    </Accordion>
    <Button {...contactUsButton} size='md' theme='white' className='w-full' />
  </>
}

const FooterLinks = ({ links, socialMediaLinks, contactUsButton, className }: Props) => {
  const { isMobile, isDesktop } = useWindowSize()
  return (
    <div className={cn('flex flex-col gap-[9.32vw] tablet:gap-[5vw] desktop:gap-[4.316vw] py-[9.32vw] tablet:py-[5vw] desktop:py-[2.6vw]', className)}>
      <div className='flex flex-col gap-[4.66vw] tablet:gap-[2.5vw] desktop:gap-0 tablet:flex-row justify-between items-center'>
        <Image src='/images/shared/logo-with-slogan.png' alt='logo' width={530} height={158} className='w-[58.25vw] tablet:w-[25vw] desktop:w-[13.78vw] h-auto' />
        <SocialMediaLinks links={socialMediaLinks} />
      </div>
      {isDesktop && <DesktopLinks links={links} contactUsButton={contactUsButton} />}
      {isMobile && <MobileLinks links={links} contactUsButton={contactUsButton} />}
    </div>
  )
}

export default FooterLinks
