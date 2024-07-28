import { ButtonProps } from "@/app/_components/Button/button-types";
import { ImageProps } from "next/image"


export type HomePageProps = {
  banner: HomePageBannerProps;
  counterCards: CountUpSectionProps;
}

export type  HomePageBannerProps = {
  subtractImage:ImageProps;
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



export type CountUpSectionProps = CountUpCardProps[]
export type CountUpCardProps = {
  number: number;
  text: string;
  suffix?: string;
}