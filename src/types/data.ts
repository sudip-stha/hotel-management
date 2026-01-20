//Aside type checking
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

//Header type checking
export interface HeaderItem {
  placeholder: string;
  searchIcon: string;
  notificationIcon: string;
  profile: string;
}
