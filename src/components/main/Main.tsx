import Guest from "../section/Guest";
import Deal from "../section/Deal";
import { Route, Routes } from "react-router-dom";
import Header from "../Header";
import FrontDesk from "../section/FrontDesk";
import Rate from "../section/Rate";
import Room from "../section/Room";
import Dashboard from "../section/Dashboard";
import { AppRoutes } from "../../data/routes";

const Main = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path={AppRoutes.dashboard} element={<Dashboard />} />
        <Route path={AppRoutes.guest} element={<Guest />} />
        <Route path={AppRoutes.deal} element={<Deal />} />
        <Route path={AppRoutes.room} element={<Room />} />
        <Route path={AppRoutes.rate} element={<Rate />} />
        <Route path={AppRoutes.forntDesk} element={<FrontDesk />} />
      </Routes>
    </main>
  );
};

export default Main;
