import { Plus_Jakarta_Sans } from "next/font/google";
import "../../styles/tailwind.scss";
import { i18n, Locale } from "../../../i18n-config";
import { getDictionaries, setDictionaries } from "@/get-dictionary";
import Navbar from "@/app/_components/Navbar";
import { Suspense } from "react";
import InternetConnection from "@/app/_components/InternetConnection";
import getLocalizedData from "@/services/getLocalizedData";
import { LayoutProps } from "@/models/IDictionary/Layout";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
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
  const { internetConnection } = await getLocalizedData<LayoutProps>(lang, 'layout');

  return (
    <html lang={lang} dir="">
      <body className={plusJakartaSans.className}>
        <Suspense>
          <InternetConnection {...internetConnection} />
        </Suspense>
        <Suspense>
          <Navbar />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
