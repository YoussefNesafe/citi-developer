import { HomePageProps } from "@/models/IDictionary/HomePage";
import { Locale } from "../../../i18n-config";
import getLocalizedData from "@/services/getLocalizedData";
import BannerSectionHomePage from "../_sections/homepage/BannerSectionHomePage";
import CountUpSection from "../_sections/homepage/CountUpSection";


export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const { banner, counterCards } = await getLocalizedData<HomePageProps>(lang, 'homePage');

  return (
    <main>
      <BannerSectionHomePage {...banner} />
      <CountUpSection cards={counterCards} />
    </main>
  );
}
