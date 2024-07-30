import React from 'react'

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div className='font-bold text-[5.126vw] tablet:text-[3vw] desktop:text-[2.288vw] leading-[1.3] text-dark'>{text}</div>
  )
}

export default SectionTitle