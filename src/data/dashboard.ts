import type {
  DashBoardRoom,
  FloorStatus,
  OverviewType,
  RoomStatusDetails,
  SecondaryBtnType,
  OccupancyStatistics,
  CustomersFeedbackType,
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

const roomStatus: RoomStatusDetails = {
  title: "Room status",
  occupiedRooms: [
    {
      title: "Occupied rooms",
      value: 104,
    },
    {
      title: "Clean",
      value: 90,
    },
    {
      title: "Dirty",
      value: 4,
    },
    {
      title: "Inspected",
      value: 60,
    },
  ],
  availableRooms: [
    {
      title: "Available rooms",
      value: 20,
    },
    {
      title: "Clean",
      value: 30,
    },
    {
      title: "Dirty",
      value: 19,
    },
    {
      title: "Inspected",
      value: 30,
    },
  ],
};

const floorStatus: FloorStatus = {
  title: "Floor status",
  completed: 80,
};

const occupancyStatistics: OccupancyStatistics = {
  title: "Occupancy Statistics",
  janStats: 99,
  febStats: 100,
  mayStats: 88,
  junStats: 65,
  julStats: 83,
  augStats: 40,
  sepStats: 100,
  octStats: 85,
  novStats: 85,
  decStats: 85,
  monthBtn: {
    title: "Monthly",
    icon: "/images/calendarIcon.svg",
  },
};

const customersFeedback: CustomersFeedbackType = {
  title: "Customers feedback",
  dotIcon: "/images/threeDot.svg",
  userComment: [
    {
      name: "Mark",
      comment: "Food could be better.",
      roomNumber: "A201",
    },
    {
      name: "Christian",
      comment: "Facilities are not enough for amount paid.",
      roomNumber: "A101",
    },
    {
      name: "Alexander",
      comment: "Room cleaning could be better.",
      roomNumber: "A301",
    },
  ],
};

export const dashboardData = {
  btn1,
  overview,
  rooms,
  roomStatus,
  floorStatus,
  occupancyStatistics,
  customersFeedback,
};
