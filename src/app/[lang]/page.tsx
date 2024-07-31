import { HomePageProps } from "@/models/IDictionary/HomePage";
import { Locale } from "../../../i18n-config";
import getLocalizedData from "@/services/getLocalizedData";
import BannerSectionHomePage from "../_sections/homepage/BannerSectionHomePage";
import CountUpSection from "../_sections/homepage/CountUpSection";
import WhatMakesUsDifferent from "../_sections/homepage/WhatMakesUsDifferent";
import VisitExperienceCenterSection from "../_sections/homepage/VisitExperienceCenterSection";
import OurJourney from "../_sections/homepage/OurJourney";


export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const { banner, counterCards, whatMakesUsDifferent, visitExperienceCenter, ourJourney } = await getLocalizedData<HomePageProps>(lang, 'homePage');

  return (
    <>
      <BannerSectionHomePage {...banner} />
      <CountUpSection cards={counterCards} className="section-py" />
      <WhatMakesUsDifferent {...whatMakesUsDifferent} className="section-py" />
      <VisitExperienceCenterSection {...visitExperienceCenter} className="section-py" />
      <OurJourney {...ourJourney} className="section-py" />
    </>
  );
}
