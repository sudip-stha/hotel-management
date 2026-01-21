import type { ButtonValue, Input, SecondaryBtnType } from "../types/data";

export const btn3: SecondaryBtnType = {
  title: "Filter",
  icon: "/images/filterIcon.svg",
};

export const btn4: SecondaryBtnType = {
  title: "Next",
  icon: "/images/rightArrow.svg",
};

 export const btn5: SecondaryBtnType = {
  title: "Previous",
  icon: "/images/leftArrow.svg",
};

export const buttonValue: ButtonValue = {
  btn1: "Check in",
  btn2: "Check out",
};

export const input: Input = {
  placeholder: "Search by room number",
  searchIcon: "/images/searchIcon.svg",
};

const title: string = "Guest";

const idValue: number[] = [
  5644, 6112, 6141, 6535, 6541, 9846, 4921, 4921, 9841, 9841,
];
const idTitle: string = "Reservation ID";

const nameTitle: string = "Name";
const nameValue: string[] = [
  "Alexander",
  "Pegasus",
  "Martin",
  "Cecil",
  "Luke",
  "Yadrin",
  "Kiand",
  "Kiand",
  "Turen",
  "Turen",
];

const roomTitle: string = "Room Number";
const roomNumber: string[] = [
  "A647",
  "A456",
  "A645",
  "A684",
  "B464",
  "C648",
  "D644",
  "D644",
  "B641",
  "B641",
];

const amtTitle: string = "Total amount";
const amtValue: number[] = [467, 645, 686, 8413, 841, 684, 984, 984, 984, 984];

const amtPaidTitle: string = "Amount paid";
const amtPaidValue: number[] = [
  200, 250, 400, 2500, 400, 300, 513, 513, 600, 600,
];

const statusTitle: string = "Status";
const statusValue: string[] = [
  "Clean",
  "Dirty",
  "Dirty",
  "Inspected",
  "Clean",
  "Clean",
  "Pick up",
  "Pick up",
  "Dirty",
  "Dirty",
];

const Pagination: number[] = [1, 2, 3, 4, 5, 6, 7];

export const tableData = {
  title,
  idTitle,
  idValue,
  nameTitle,
  nameValue,
  roomTitle,
  roomNumber,
  amtTitle,
  amtValue,
  amtPaidTitle,
  amtPaidValue,
  statusTitle,
  statusValue,
  Pagination,
};
