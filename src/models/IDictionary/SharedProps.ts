import { ButtonProps } from "@/app/_components/Button/button-types";
import { CardProps } from "@/app/_components/Card/types";
import { HTMLAttributes } from "react";
export type AdditionalProps = HTMLAttributes<HTMLElement>

export type SectionHeaderProps = HTMLAttributes<HTMLElement> & {
  subtitle?: string;
  title?: string;
  description?: string;
}

export type VisitExperienceCenterSectionProps =  HTMLAttributes<HTMLElement> & {
  header: SectionHeaderProps;
  videoSrc: string;
  button: ButtonProps;
}

export type LatestNewsProps = AdditionalProps & {
  header: SectionHeaderProps;
  button: ButtonProps;
  mainArticle: CardProps;
  cards: CardProps[];
}



