import { HomePageProps } from './HomePage';
import { LayoutProps } from "./Layout";
import { NotFoundPageProps } from './NotFoundPage';

export interface IDictionary {
  layout: LayoutProps;
  notFoundPage: NotFoundPageProps;
  homePage: HomePageProps;  
} 