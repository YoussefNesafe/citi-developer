import { ButtonProps } from "@/app/_components/Button/button-types";
import { HTMLAttributes } from "react";

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