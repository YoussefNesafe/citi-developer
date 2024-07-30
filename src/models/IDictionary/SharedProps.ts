import { HTMLAttributes } from "react";

export type SectionHeaderProps = HTMLAttributes<HTMLElement> & {
  subtitle: string;
  title: string;
  description: string;
} 