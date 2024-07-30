import React, { ReactElement } from 'react'
import { CardProps, CardType } from './types'
import PointCard from './PointCard'




const Card = ({ description, title, image, type = CardType.DEFAULT, ...props }: CardProps) => {

  const CardsMap: { [type in CardType]: any } = {
    [CardType.POINT_CARD]: <PointCard title={title} description={description} image={image} {...props} />,
    [CardType.DEFAULT]: <></>,
    [CardType.HORIZONTAL]: <></>
  }


  return (
    <>
      {CardsMap[type]}
    </>
  )
}

export default Card