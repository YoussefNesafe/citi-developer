import { Cairo, Lexend_Exa, Play, Playfair_Display, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "../../styles/tailwind.scss";
import { i18n, Locale } from "../../../i18n-config";
import { getDictionaries, setDictionaries } from "@/get-dictionary";
import Navbar from "@/app/_components/Navbar";
import { Suspense } from "react";
import InternetConnection from "@/app/_components/InternetConnection";
import getLocalizedData from "@/services/getLocalizedData";
import { LayoutProps } from "@/models/IDictionary/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { isRtlLang } from "../utils/isRtlLang";
import { getLangDir } from "../utils/getLangDir";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP)

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plusJakartaSans',
});
const cairoFont = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
});

export const metadata = {
  manifest: '/manifest.json',
  themeColor: '#FFFFFF',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}


export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  setDictionaries(getDictionaries());
  const { internetConnection, navbar, pagesLinks } = await getLocalizedData<LayoutProps>(lang, 'layout');
  const fontFamilyVariable = isRtlLang(lang) ? cairoFont.variable : plusJakartaSans.variable;
  return (
    <html lang={lang} dir={getLangDir(lang)} className={fontFamilyVariable}>
      <body>
        <Suspense>
          <InternetConnection {...internetConnection} />
        </Suspense>
        <Suspense>
          <Navbar {...navbar} links={pagesLinks} />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
