import type {
  ButtonValue,
  Input,
  SecondaryBtnType,
  tableDataType,
} from "../types/data";

const btn3: SecondaryBtnType = {
  title: "Filter",
  icon: "/images/filterIcon.svg",
};

const btn4: SecondaryBtnType = {
  title: "Next",
  icon: "/images/rightArrow.svg",
};

const btn5: SecondaryBtnType = {
  title: "Previous",
  icon: "/images/leftArrow.svg",
};

const buttonValue: ButtonValue = {
  btn1: "Check in",
  btn2: "Check out",
};

const input: Input = {
  placeholder: "Search by room number",
  searchIcon: "/images/searchIcon.svg",
};

const title = "Guest";

const tableTitle: string[] = [
  "Reservation Id",
  "Name",
  "Room Number",
  "Total amount",
  "Amount paid",
  "Status",
];
const tableData: tableDataType[] = [
  {
    id: 5644,
    name: "Alexander",
    roomNumber: "A647",
    totalAmt: 467,
    amtPaid: 200,
    status: "Clean",
    dotIcon: "/images/threeDot.svg",
  },
  {
    id: 6112,
    name: "Pegasus",
    roomNumber: "A456",
    totalAmt: 645,
    amtPaid: 250,
    status: "Dirty",
    dotIcon: "/images/threeDot.svg",
  },
  {
    id: 6141,
    name: "Martin",
    roomNumber: "A645",
    totalAmt: 686,
    amtPaid: 400,
    status: "Dirty",
    dotIcon: "/images/threeDot.svg",
  },
  {
    id: 6535,
    name: "Cecil",
    roomNumber: "A684",
    totalAmt: 8413,
    amtPaid: 2500,
    status: "Inspected",
    dotIcon: "/images/threeDot.svg",
  },
  {
    id: 6541,
    name: "Luke",
    roomNumber: "B464",
    totalAmt: 841,
    amtPaid: 400,
    status: "Clean",
    dotIcon: "/images/threeDot.svg",
  },
  {
    id: 9846,
    name: "Yadrin",
    roomNumber: "C648",
    totalAmt: 684,
    amtPaid: 300,
    status: "Clean",
    dotIcon: "/images/threeDot.svg",
  },
  {
    id: 4921,
    name: "Kiand",
    roomNumber: "D644",
    totalAmt: 984,
    amtPaid: 513,
    status: "Pick up",
    dotIcon: "/images/threeDot.svg",
  },
  {
    id: 4921,
    name: "Kiand",
    roomNumber: "D644",
    totalAmt: 984,
    amtPaid: 513,
    status: "Pick up",
    dotIcon: "/images/threeDot.svg",
  },
  {
    id: 9841,
    name: "Turen",
    roomNumber: "B641",
    totalAmt: 984,
    amtPaid: 600,
    status: "Dirty",
    dotIcon: "/images/threeDot.svg",
  },
  {
    id: 9841,
    name: "Turen",
    roomNumber: "B641",
    totalAmt: 984,
    amtPaid: 600,
    status: "Dirty",
    dotIcon: "/images/threeDot.svg",
  },
];

const Pagination: number[] = [1, 2, 3, 4, 5, 6, 7];

export const guestData = {
  title,
  tableTitle,
  tableData,
  btn3,
  btn4,
  btn5,
  buttonValue,
  input,
  Pagination,
};
