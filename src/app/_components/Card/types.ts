import { ImageProps } from "next/image";
import { HTMLAttributes } from "react";

export enum CardType  {
  HORIZONTAL = 'horizontal',
  POINT_CARD = 'point_card',
  DEFAULT = 'default'
}

export type CardProps = HTMLAttributes<HTMLElement> & {
  type?:  CardType;
  title: string;
  description: string;
  image?: ImageProps & {className?: string};
}