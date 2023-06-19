export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type LinkItem = {
  title: string;
  description?: string;
  href: string;
};

export type MainLinkItem = LinkItem;

export type LinkConfig = {
  mainLink: MainLinkItem[];
};

export type Project = {
  name: string;
  description: string;
  image?: string;
  url?: string;
};

export type ProjectItem = {
  title: string;
  image?: string;
  description: string;
  href?: string;
};

export type MainProjectItem = ProjectItem;

export type ProjectConfig = {
  mainLink: MainProjectItem[];
};
