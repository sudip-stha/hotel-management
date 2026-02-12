import type {
  frontDeskButton,
  RoomTableDataType,
  CheckDateType,
  AgeYears,
} from "../types/data";

const title = "Front Desk";

const buttonValue: frontDeskButton = {
  btn1: "All room(5)",
  btn2: "Single",
  btn3: "Double",
  btn4: "Triple",
  btn5: "VIP",
};

const checkDate: CheckDateType = {
  checkIn: "Check in",
  checkOut: "Check out",
};

const AgeYears: AgeYears[] = [
  {
    title: "Adult",
    description: "Older than 12 years",
  },
  {
    title: "Children",
    description: "0-12 years",
  },
];

const tableTitle: string[] = [
  "Room number",
  "Bed type",
  "Room floor",
  "Room Facility",
  "Status",
];

const tableData: RoomTableDataType[] = [
  {
    roomNumber: "045",
    bedType: "Double bed",
    roomFloor: "Floor - 1",
    roomFacility: "AC, shower, Double bed, towel bathtub, TV",
    status: "Available",
    dotIcon: "/images/threeDot.svg",
  },
  {
    roomNumber: "020",
    bedType: "Single bed",
    roomFloor: "Floor -2",
    roomFacility: "AC, shower, Double bed, towel bathtub, TV",
    status: "Booked",
    dotIcon: "/images/threeDot.svg",
  },
  {
    roomNumber: "003",
    bedType: "VIP",
    roomFloor: "Floor -1",
    roomFacility: "AC, shower, Double bed, towel bathtub, TV",
    status: "Booked",
    dotIcon: "/images/threeDot.svg",
  },
  {
    roomNumber: "040",
    bedType: "VIP",
    roomFloor: "Floor -1",
    roomFacility: "AC, shower, Double bed, towel bathtub, TV",
    status: "Reserved",
    dotIcon: "/images/threeDot.svg",
  },
  {
    roomNumber: "015",
    bedType: "Single bed",
    roomFloor: "Floor -1",
    roomFacility: "AC, shower, Double bed, towel bathtub, TV",
    status: "Reserved",
    dotIcon: "/images/threeDot.svg",
  },
];

export const frontDeskData = {
  title,
  tableTitle,
  tableData,
  buttonValue,
  checkDate,
  AgeYears,
};
