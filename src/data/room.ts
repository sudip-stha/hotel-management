import type {
  ButtonValue,
  SecondaryBtnType,
  RoomTableDataType,
} from "../types/data";

const buttonValue: ButtonValue = {
  btn1: "All room(100)",
  btn2: "Available room(20)",
  btn3: "Booked(80)",
};

const btn4: SecondaryBtnType = {
  title: "Add room",
};

const btn5: SecondaryBtnType = {
  title: "Next",
  icon: "/images/rightArrow.svg",
};

const btn6: SecondaryBtnType = {
  title: "Previous",
  icon: "/images/leftArrow.svg",
};

const title = "Room";

const tableTitle: string[] = [
  "Room number",
  "Bed type",
  "Room floor",
  "Room facility",
  "Status",
];
const tableData: RoomTableDataType[] = [
  {
    roomNumber: "001",
    bedType: "Double bed",
    roomFloor: "Floor - 1",
    roomFacility: "AC, shower, Double bed, towel bathtub, TV",
    status: "Available",
    dotIcon: "/images/threeDot.svg",
  },
  {
    roomNumber: "002",
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
    roomNumber: "004",
    bedType: "VIP",
    roomFloor: "Floor -1",
    roomFacility: "AC, shower, Double bed, towel bathtub, TV",
    status: "Reserved",
    dotIcon: "/images/threeDot.svg",
  },
  {
    roomNumber: "005",
    bedType: "Single bed",
    roomFloor: "Floor -1",
    roomFacility: "AC, shower, Double bed, towel bathtub, TV",
    status: "Reserved",
    dotIcon: "/images/threeDot.svg",
  },
  {
    roomNumber: "006",
    bedType: "Double bed",
    roomFloor: "Floor -2",
    roomFacility: "AC, shower, Double bed, towel bathtub, TV",
    status: "Waitlist",
    dotIcon: "/images/threeDot.svg",
  },
  {
    roomNumber: "007",
    bedType: "Double bed",
    roomFloor: "Floor -3",
    roomFacility: "AC, shower, Double bed, towel bathtub, TV",
    status: "Reserved",
    dotIcon: "/images/threeDot.svg",
  },
  {
    roomNumber: "008",
    bedType: "Single bed",
    roomFloor: "Floor -5",
    roomFacility: "AC, shower, Double bed, towel bathtub, TV",
    status: "Blocked",
    dotIcon: "/images/threeDot.svg",
  },
];

const Pagination: number[] = [1, 2, 3, 4, 5, 6, 7];

export const roomData = {
  title,
  tableTitle,
  tableData,
  btn4,
  btn5,
  btn6,
  buttonValue,
  Pagination,
};
