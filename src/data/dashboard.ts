import type { OverviewType, SecondaryBtnType } from "../types/data";

const btn1: SecondaryBtnType = {
  title: "Create booking",
};

const overview: OverviewType = {
  title: "Overview",
  checkInTitle: "Check-in",
  checkOutTitle: "Check-out",
  inHotelTitle: "In hotel",
  inHotelValue: 60,
  availableRoomTitle: "Available room",
  availableRoomValue: 10,
  occupiedRoomTitle: "Occupied room",
  today: "Today's",
  total: "Total",
};

export const dashboardData = {
  btn1,
  overview,
};
