import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

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
    [key in IconTypes]?: PortfolioLink | PortfolioLink[];
}

export interface WorkExperienceEntry {
    year: string;
    logo: HTMLImageElement;
    title: string;
    subTitle: string;
    text: string;
    link?: LinkTypes;
}

export interface PortfolioEntry {
    title: string;
    text: string;
    categories: string[];
    image: HTMLImageElement;
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
