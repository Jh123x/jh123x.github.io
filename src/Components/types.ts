export interface InterestDescription {
  image: HTMLImageElement;
  title: string;
  paragraph?: string;
  href: string;
}

export interface WithChildren {
  children?: React.ReactNode[] | React.ReactNode;
}
