import type {
  DashBoardRoom,
  OverviewType,
  SecondaryBtnType,
} from "../types/data";

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

const rooms: DashBoardRoom = {
  title: "Rooms",
  RoomDetails: [
    {
      deal: "2 Deals",
      roomType: "Single sharing",
      bookedRoom: 2,
      totalRoom: 30,
      perDayPrice: 568,
      dotIcon: "/images/threeDot.svg",
    },
    {
      deal: "2 Deals",
      roomType: "Double sharing",
      bookedRoom: 2,
      totalRoom: 35,
      perDayPrice: 1068,
      dotIcon: "/images/threeDot.svg",
    },
    {
      deal: "",
      roomType: "Triple sharing",
      bookedRoom: 2,
      totalRoom: 25,
      perDayPrice: 1568,
      dotIcon: "/images/threeDot.svg",
    },
    {
      deal: "",
      roomType: "VIP Suit",
      bookedRoom: 4,
      totalRoom: 10,
      perDayPrice: 2568,
      dotIcon: "/images/threeDot.svg",
    },
  ],
};

export const dashboardData = {
  btn1,
  overview,
  rooms,
};
