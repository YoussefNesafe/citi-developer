import { CardProps, CardType } from './types'
import PointCard from './PointCard'
import JourneyCard from './JourneyCard'




const Card = ({ type, ...props }: CardProps) => {

  const CardsMap: { [type in CardType]: any } = {
    [CardType.POINT_CARD]: <PointCard {...props} />,
    [CardType.JOURNEY_CARD]: <JourneyCard   {...props} />,
  }


  return (
    <>
      {CardsMap[type]}
    </>
  )
}

export default Card