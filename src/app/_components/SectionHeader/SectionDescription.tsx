import React from 'react'

const SectionDescription = ({ text }: { text: string }) => {
  return (
    <div className='text-[3.262vw] tablet:text-[2.25vw] desktop:text-[0.936vw]  text-gray-450 font-medium desktop:font-normal leading-[1.25]'>{text}</div>
  )
}

export default SectionDescription