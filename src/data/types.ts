export interface PortfolioLink {
    link: string;
    tooltip?: string;
}

export interface WorkExperienceEntry {
    year: string;
    logo: string;
    title: string;
    subTitle: string;
    text: string;
    links?: LinkTypes;
}

export interface LinkTypes {
    github?: PortfolioLink;
    youtube?: PortfolioLink;
    google?: PortfolioLink;
    link?: PortfolioLink;
    link2?: PortfolioLink;
    docs?: PortfolioLink;
    feature_site?: PortfolioLink;
    project_showcase?: PortfolioLink;
    official?: PortfolioLink;
}

export interface PortfolioEntry {
    title: string;
    text: string;
    categories: string[];
    image: string;
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