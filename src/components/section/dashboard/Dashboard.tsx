import AddButton from "../../ui/buttons/AddButton";
import Heading_6 from "../../ui/heading/Headin_6";
import { dashboardData } from "../../../data/dashboard";
import Overview from "./Overview";
import DashboardRooms from "./DashboardRooms";

const Dashboard = () => {
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  return (
    <div>
      <div className="dashboard-top">
        <Heading_6 value={todayDate.toString()} />
        <AddButton value={dashboardData.btn1} />
      </div>
      <div className="dashboard-main-container">
        <Overview />
        <DashboardRooms />
      </div>
    </div>
  );
};

export default Dashboard;
