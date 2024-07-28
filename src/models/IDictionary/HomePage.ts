import { ButtonProps } from "@/app/_components/Button"
import { ImageProps } from "next/image"


export type HomePageProps = {
  banner: HomePageBannerProps;
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