import type {
  ButtonValue,
  SecondaryBtnType,
  DealTableDataType,
} from "../types/data";

const buttonValue: ButtonValue = {
  btn1: "Ongoing",
  btn2: "Finished",
};

const btn3: SecondaryBtnType = {
  title: "Filter",
  icon: "/images/filterIcon.svg",
};

const btn4: SecondaryBtnType = {
  title: "Add deal",
};

const title = "Deal";

const tableTitle: string[] = [
  "Reference number",
  "Deal name",
  "Reservation left",
  "End date",
  "Room type",
  "Status",
];
const tableData: DealTableDataType[] = [
  {
    referenceNumber: 5644,
    dealName: "Family deal",
    reservationLeft: 10,
    endDate: "21/3/23",
    roomType: "VIP",
    status: "Ongoing",
    dotIcon: "/images/threeDot.svg",
  },
  {
    referenceNumber: 6112,
    dealName: "Christmas deal",
    reservationLeft: 12,
    endDate: "25/3/23",
    roomType: "Single, Double",
    status: "Full",
    dotIcon: "/images/threeDot.svg",
  },
  {
    referenceNumber: 6141,
    dealName: "Family deal",
    reservationLeft: 15,
    endDate: "-",
    roomType: "Triple",
    status: "Inactive",
    dotIcon: "/images/threeDot.svg",
  },
  {
    referenceNumber: 6535,
    dealName: "Black Friday",
    reservationLeft: 10,
    endDate: "1/5/23",
    roomType: "VIP",
    status: "New",
    dotIcon: "/images/threeDot.svg",
  },
];

export const dealData = {
  title,
  tableTitle,
  tableData,
  btn3,
  btn4,
  buttonValue,
};
