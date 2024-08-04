import { ButtonProps } from "@/app/_components/Button/button-types";
import { ImageProps } from "next/image"
import { AdditionalProps, SectionHeaderProps, VisitExperienceCenterSectionProps } from "./SharedProps";
import { HTMLAttributes } from "react";
import { CardProps } from "@/app/_components/Card/types";


export type HomePageProps = {
  banner: HomePageBannerProps;
  counterCards: CountUpSectionProps;
  whatMakesUsDifferent: WhatMakesUsDifferentSectionProps;
  avelineSection: AvelineSectionProps;
  visitExperienceCenter :VisitExperienceCenterSectionProps;
  ourJourney: OurJourneySectionProps;
}

// Banner Props
export type  HomePageBannerProps = AdditionalProps & {
    sloganBox : {
      title: string;
      description: string;
    },
    firstLayerData: {
      image: ImageProps;
      startText: string;
    },
    secondLayerData: {
      image: ImageProps;
      luxuary: string;
    },
    thirdLayerData: {
      image: ImageProps;
      button: ButtonProps;
      title:string;
      sloganText: string;
    }
}

// CountUp Section Props
export type CountUpSectionProps = CountUpCardProps[]
export type CountUpCardProps = {
  number: number;
  text: string;
  suffix?: string;
}

// What Makes Us Different Section Props
export type WhatMakesUsDifferentSectionProps ={
  header: SectionHeaderProps;
  cards: WhatMakesUsDifferentCardProps[];
  animatedText: string;
  images: ImageProps[];
}

export type WhatMakesUsDifferentCardProps ={
  image: ImageProps;
  title: string;
  description: string;
}


// Our Journey Section Props

export type OurJourneySectionProps = AdditionalProps & {
  header: SectionHeaderProps;
  cards: CardProps[]; 
}

// Aveline Section Props

export type AvelineSectionProps = AdditionalProps & {
  header: SectionHeaderProps;
  images: ImageProps[];
}