import type { RoomTableDataType } from "../types/data";

const title = "Front Desk";

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

export const frontDesk = {
  title,
  tableTitle,
  tableData,
};
