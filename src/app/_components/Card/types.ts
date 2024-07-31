import { ImageProps } from "next/image";
import { HTMLAttributes } from "react";
import { ButtonProps } from "../Button/button-types";

export enum CardType  {
  POINT_CARD = 'point_card',
  JOURNEY_CARD= 'journey_card'
}

export type CardProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description: string;
  type:  CardType;
  date?: string;
  image?: ImageProps & {className?: string};
  button?: ButtonProps;
  readMore?: string;
}