import type { ChangeEvent } from "react";
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

export interface AddBtnTypeWrap {
  value: SecondaryBtnType;
  onClickAddBtn?: () => void;
}

export interface PrimaryBtnType {
  value: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface FilterButtonType {
  value: SecondaryBtnType;
  handleFilterChange: (event: ChangeEvent<HTMLSelectElement>) => void;
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
  checkIn?: boolean;
  dotIcon?: string;
  registrationNumber?: number;
  checkInDate: string;
  roomType?: string;
  stay?: string;
  discount?: number;
  guestPP: string;
}

export interface GuestTableDataTypeList {
  data: GuestTableDataType[];
  handleIndividualData: (item: GuestTableDataType) => void;
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

export interface guestIndividualTitleType {
  guestName: string;
  registrationNumber: string;
  checkInDate: string;
  roomType: string;
  stay: string;
  discount: string;
}

export interface guestIndividualType {
  guest: GuestTableDataType;
  onClose: () => void;
}

export interface GuestFormTitleType {
  reservationId: string;
  name: string;
  roomNumber: string;
  totalAmt: string;
  amtPaid: string;
  status: string;
  checkInDate: string;
}

export interface UpdateGuestArgumentType {
  id: number;
  reservationId: number;
  name: string;
  roomNumber: string;
  totalAmt: number;
  amtPaid: number;
  status: string;
  checkInDate: string;
  guestPP: string;
  dotIcon: string;
}

export interface UpdateGuestType {
  updateGuest: (from: UpdateGuestArgumentType) => void;
  totalGuest: number;
  onClose: () => void;
}

export interface OverviewType {
  title: string;
  checkInTitle: string;
  checkOutTitle: string;
  inHotelTitle: string;
  inHotelValue: number;
  availableRoomTitle: string;
  availableRoomValue: number;
  occupiedRoomTitle: string;
  today: string;
  total: string;
}

//for dashboard
interface DashBoardRoomDetails {
  deal: string;
  roomType: string;
  bookedRoom: number;
  totalRoom: number;
  perDayPrice: number;
  dotIcon: string;
}

export interface DashBoardRoom {
  title: string;
  RoomDetails: DashBoardRoomDetails[];
}

interface RoomStatus {
  title: string;
  value: number;
}

export interface RoomStatusDetails {
  title: string;
  occupiedRooms: RoomStatus[];
  availableRooms: RoomStatus[];
}

export interface FloorStatus {
  title: string;
  completed: number;
}

export interface OccupancyStatistics {
  title: string;
  janStats: number;
  febStats: number;
  mayStats: number;
  junStats: number;
  julStats: number;
  augStats: number;
  sepStats: number;
  octStats: number;
  novStats: number;
  decStats: number;
  monthBtn: SecondaryBtnType;
}

interface UserCommentType {
  name: string;
  comment: string;
  roomNumber: string;
}

export interface CustomersFeedbackType {
  title: string;
  dotIcon: string;
  userComment: UserCommentType[];
}

//For Front Desk
export interface frontDeskButton extends ButtonValue {
  btn4: string;
  btn5: string;
}

export interface CheckDateType {
  checkIn: string;
  checkOut: string;
}

export interface AgeYears {
  adultTitle: string;
  adultDescription: string;
  childrenTitle: string;
  childrenDescription: string;
}

export interface IncAndDecBtnType {
  incrementBtn: string;
  DecrementBtn: string;
}

export interface IncBtnClickHandle {
  handleClick: () => void;
}

export interface DecBtnClickHandle extends IncBtnClickHandle {
  guestCount: number;
}

export interface UpdateRoomType {
  updateRoom: () => void;
}
