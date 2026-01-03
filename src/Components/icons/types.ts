export interface IconProps {
  href: string;
  ariaLabel?: string;
}

export type IconElement = (_: IconProps) => React.ReactNode;
