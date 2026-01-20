import type { Aside, Navitem } from "../types/data";

const navList: Navitem[] = [
  {
    label: "Dashboard",
    icon: "/images/dashboard.svg",
    URL: "/dashboard",
  },
  {
    label: "Front desk",
    icon: "/images/front-desk.svg",
    URL: "/front-desk",
  },
  {
    label: "Guest",
    icon: "/images/guest.svg",
    URL: "/guest",
  },
  {
    label: "Room",
    icon: "/images/room.svg",
    URL: "/room",
  },
  {
    label: "Deal",
    icon: "/images/deal.svg",
    URL: "/deal",
  },
  {
    label: "Rate",
    icon: "/images/rate.svg",
    URL: "/rate",
  },
];

const siteInfo: Aside = {
  logo: "/images/logo.svg",
  title: "Novotel",
};

const asideData = {
  ...siteInfo,
  navList,
};

export default asideData;
