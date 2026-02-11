import AddButton from "../../ui/buttons/AddButton";
import Heading_6 from "../../ui/heading/Headin_6";
import { dashboardData } from "../../../data/dashboard";
import Overview from "./Overview";
import DashboardRooms from "./DashboardRooms";
import DashboardRoomStatus from "./DashboardRoomStatus";
import DashboardFloorStatus from "./DashboardFloorStatus";

const Dashboard = () => {
  const todayDate = new Date();
  const formatted = todayDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div>
      <div className="dashboard-top">
        <Heading_6 value={formatted.toString()} />
        <AddButton value={dashboardData.btn1} />
      </div>
      <div className="dashboard-main-container">
        <Overview />
        <DashboardRooms />
        <div className="dashboard-status-section">
          <DashboardRoomStatus />
          <DashboardFloorStatus />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
