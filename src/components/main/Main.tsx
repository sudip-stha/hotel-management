import Guest from "./Guest";
import Deal from "./Deal";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import FrontDesk from "./FrontDesk";
import Rate from "./Rate";
import Room from "./Room";
import Dashboard from "./Dashboard";
const Main = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/deal" element={<Deal />} />
        <Route path="/room" element={<Room />} />
        <Route path="/rate" element={<Rate />} />
        <Route path="/front-desk" element={<FrontDesk />} />
      </Routes>
    </main>
  );
};

export default Main;
