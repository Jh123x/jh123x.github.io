export interface IconProps {
  href: string;
  ariaLabel?: string;
}

export type IconElement = (props: IconProps) => React.JSX.Element;
