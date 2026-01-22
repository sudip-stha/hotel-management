import Header from "../components/main/Header";

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
export interface Input {
  searchIcon: string;
  placeholder: string;
}

export interface InputAll {
  value: Input;
}

export interface Header {
  notificationIcon: string;
  profile: string;
}

//Guest data type checking
export interface ButtonValue {
  btn1: string;
  btn2: string;
}

export interface SecondaryBtnType {
  title: string;
  icon: string;
}

export interface SecondaryBtnTypeWrap {
  value: SecondaryBtnType;
}

export interface StringType {
  value: string;
}

export interface NumberListType {
  item: number[];
}

export interface StringListType {
  item: string[];
}

export interface tableDataType {
  id: number;
  name: string;
  roomNumber: string;
  totalAmt: number;
  amtPaid: number;
  status: string;
  dotIcon: string;
}

export interface tableDataTypeList {
  data: tableDataType[];
}
