import type { SecondaryBtnType, RateTableDataType } from "../types/data";

const btn1: SecondaryBtnType = {
  title: "Add rate",
};

const btn2: SecondaryBtnType = {
  title: "Filter",
  icon: "/images/filterIcon.svg",
};

const title = "Rate";

const tableTitle: string[] = [
  "Room type",
  "Deals",
  "Cancellation policy",
  "Deal price",
  "Rate",
  "Availability",
];

const tableData: RateTableDataType[] = [
  {
    roomType: "Single",
    deals: "Family deal",
    cancellationPolicy: "Strict",
    dealPrice: 800,
    rate: 800,
    availability: "5 rooms",
    dotIcon: "/images/threeDot.svg",
  },
  {
    roomType: "Double",
    deals: "Christmas deal",
    cancellationPolicy: "Strict",
    dealPrice: 1200,
    rate: 1200,
    availability: "Full",
    dotIcon: "/images/threeDot.svg",
  },
  {
    roomType: "Triple",
    deals: "Family deal",
    cancellationPolicy: "Flexible",
    dealPrice: 2000,
    rate: 2000,
    availability: "12 rooms",
    dotIcon: "/images/threeDot.svg",
  },
  {
    roomType: "VIP",
    deals: "Black Friday",
    cancellationPolicy: "Non refundable",
    dealPrice: 4000,
    rate: 4000,
    availability: "10 rooms",
    dotIcon: "/images/threeDot.svg",
  },
];

export const rateData = {
  title,
  tableTitle,
  tableData,
  btn1,
  btn2,
};
