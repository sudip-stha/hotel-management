import AddButton from "../../ui/buttons/AddButton";
import Heading from "../../ui/Heading";
import { dashboardData } from "../../../data/dashboard";
import Overview from "./Overview";

const Dashboard = () => {
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  return (
    <div className="dashboard-main-container">
      <div className="dashboard-top">
        <Heading value={todayDate.toString()} />
        <AddButton value={dashboardData.btn1} />
      </div>
      <Overview />
    </div>
  );
};

export default Dashboard;
