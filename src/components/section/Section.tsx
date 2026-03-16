import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../../data/routes";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Guest = lazy(() => import("./guest/Guest"));
const Deal = lazy(() => import("./Deal"));
const Room = lazy(() => import("./room/Room"));
const Rate = lazy(() => import("./Rate/Rate"));
const FrontDesk = lazy(() => import("./frontDesk/FrontDesk"));

const Section = () => {
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <Routes>
        <Route path={AppRoutes.home} element={<Dashboard />} />
        <Route path={AppRoutes.dashboard} element={<Dashboard />} />
        <Route path={AppRoutes.guest} element={<Guest />} />
        <Route path={AppRoutes.deal} element={<Deal />} />
        <Route path={AppRoutes.room} element={<Room />} />
        <Route path={AppRoutes.rate} element={<Rate />} />
        <Route path={AppRoutes.forntDesk} element={<FrontDesk />} />
      </Routes>
    </Suspense>
  );
};

export default Section;
