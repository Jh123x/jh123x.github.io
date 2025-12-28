import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import { StaticImageData } from "next/image";

export enum IconTypes {
  github = "github",
  link = "link",
  google = "google",
  apple = "apple",
  linkedin = "linkedin",
  youtube = "youtube",
  docs = "docs",
}

export type Icon = OverridableComponent<SvgIconTypeMap<{}, "svg">>;

export interface PortfolioLink {
  link: string;
  tooltip?: string;
}

export type LinkTypes = {
  [key in IconTypes]?: PortfolioLink;
};

export interface Entry {
  year: string;
  logo: HTMLImageElement | StaticImageData;
  title: string;
  subTitle: string;
  text: string;
  link?: LinkTypes;
}

export interface PortfolioEntry {
  title: string;
  text: string;
  categories: string[];
  stack: string[];
  image: StaticImageData;
  links: LinkTypes;
}

export interface SchoolExperienceEntry {
  year: string;
  logo: string;
  title: string;
  subTitle: string;
  text: string;
}

export interface Title {
  title: string;
  span: string;
}
