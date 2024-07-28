import { ButtonProps } from "@/app/_components/Button/button-types";

export type InternetConnectionProps = {
  title: string;
  description: string;
}

// Language Menu Types
type LangItem = {
  label: string;
  value: string;
  href: string;
}
export type LanguagesProps = LangItem[];


// Pages Links Types

export type PageLinkItemProps = {
  title:  string;
  href: string;
  pageKey: string;
}
type PageLinkProps =  PageLinkItemProps & {subLinks?: PageLinkItemProps[];}

export type PagesLinksProps = PageLinkProps[];

// Main Layout Types (it should match with the en.json file)
export type LayoutProps = {
  internetConnection : InternetConnectionProps;
  navbar: Omit<NavbarProps, 'links'>
  pagesLinks:PagesLinksProps;
}

// Nabar Type
export type NavbarProps = {
  languages: LanguagesProps;
  links: PagesLinksProps;
  contactUsButton: ButtonProps;
}