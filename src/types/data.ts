import Header from "../components/Header";

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
  getInput: (data: string) => void;
}

export interface Header {
  notificationIcon: string;
  profile: string;
}

//Guest data type checking
export interface ButtonValue {
  btn1: string;
  btn2: string;
  btn3?: string;
}

export interface ButtonAction {
  action: string;
  onClick: (action: string) => void;
  disabled?: boolean;
}

export interface SecondaryBtnType {
  title: string;
  icon?: string;
}

export interface SecondaryBtnTypeWrap {
  value: SecondaryBtnType;
  btnAction: ButtonAction;
}

export interface PrimaryBtnType {
  value: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface FilterButtonType {
  value: SecondaryBtnType;
  handleFilterChange: () => void;
}

export interface PaginationListType {
  totalPages: number;
  hanldePagination: (pageNumber: number) => void;
  currentPage: number;
}

export interface StringType {
  value?: string;
}

export interface NumberListType {
  item: number[];
}

export interface StringListType {
  item: string[];
}

export interface GuestTableDataType {
  id: number;
  reservationId: number;
  name: string;
  roomNumber: string;
  totalAmt: number;
  amtPaid: number;
  status: string;
  checkIn: boolean;
  dotIcon: string;
}

export interface GuestTableDataTypeList {
  data: GuestTableDataType[];
}

export interface DealTableDataType {
  referenceNumber: number;
  dealName: string;
  reservationLeft: number;
  endDate: string;
  roomType: string;
  status: string;
  dotIcon: string;
}

export interface DealTableDataTypeList {
  data: DealTableDataType[];
}

export interface RoomTableDataType {
  roomNumber: string;
  bedType: string;
  roomFloor: string;
  roomFacility: string;
  status: string;
  dotIcon: string;
}

export interface RoomTableDataTypeList {
  data: RoomTableDataType[];
}

export interface RateTableDataType {
  roomType: string;
  deals: string;
  cancellationPolicy: string;
  dealPrice: number;
  rate: number;
  availability: string;
  dotIcon: string;
}

export interface RateTableDataTypeList {
  data: RateTableDataType[];
}
