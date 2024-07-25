import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { buttonCVA } from ".";

// Base button props
interface BaseButtonProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof buttonCVA> {
  title: string;
  className?: string;
  onClick?: () => void;
}

// Link button props
interface LinkButtonProps extends BaseButtonProps {
  as?: 'link';
  href: string;
}

// Button button props
interface RealButtonProps extends BaseButtonProps {
  as?: 'button';
  href?: never;
}

// Union type for all button props
export type ButtonProps = LinkButtonProps | RealButtonProps;