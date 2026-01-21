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

//Guest data type checking
export interface ButtonValue {
  btn1: string;
  btn2: string;
  btn3: string;
  filterIcon: string;
  btn4: string;
  rightArrow: string;
  btn5: string;
  leftArrow: string;
}

