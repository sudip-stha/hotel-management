import Guest from "./guest/Guest";
import Deal from "../section/Deal";
import { Route, Routes } from "react-router-dom";
import FrontDesk from "./frontDesk/FrontDesk";
import Rate from "../section/Rate";
import Room from "../section/Room";
import Dashboard from "./dashboard/Dashboard";
import { AppRoutes } from "../../data/routes";

const Section = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path={AppRoutes.dashboard} element={<Dashboard />} />
      <Route path={AppRoutes.guest} element={<Guest />} />
      <Route path={AppRoutes.deal} element={<Deal />} />
      <Route path={AppRoutes.room} element={<Room />} />
      <Route path={AppRoutes.rate} element={<Rate />} />
      <Route path={AppRoutes.forntDesk} element={<FrontDesk />} />
    </Routes>
  );
};

export default Section;
