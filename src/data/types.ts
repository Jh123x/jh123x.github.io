export interface PortfolioLink {
    link: string
    tooltip?: string
}

export interface WorkExperienceEntry {
    year: string;
    logo: string;
    title: string;
    subTitle: string;
    text: string;
    links?: LinkTypes
}

export interface LinkTypes {
    github?: PortfolioLink | string
    youtube?: PortfolioLink | string
    google?: PortfolioLink | string
    link?: PortfolioLink | string
    link2?: PortfolioLink | string
    docs?: PortfolioLink | string
    feature_site?: PortfolioLink | string
    project_showcase?: PortfolioLink | string
    official?: PortfolioLink | string
}

export interface PortfolioEntry {
    title: string
    text: string
    categories: string[]
    image: string
    links: LinkTypes
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