export interface Aside {
  logo: string;
  title: string;
}

export interface Navitem {
  label: string;
  icon: string;
  URL: string;
}

export interface NavListing {
  navList: Navitem[];
}
