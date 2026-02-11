import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { dashboardData } from "../../../data/dashboard";

const DashboardFloorStatus = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const completed = dashboardData.floorStatus.completed;
  const data = {
    datasets: [
      {
        data: [completed, 100 - completed],
        backgroundColor: ["rgb(68,141,242)", "rgb(238,240,242)"],
        borderRadius: 20,
      },
    ],
  };
  const options = {
    circumference: 180,
    rotation: 270,
    cutout: "80%",
    maintainAspectRatio: false,
  };
  return (
    <div className="dashboard-sub-container">
      <h3>{dashboardData.floorStatus.title}</h3>
      <div className="sub-floor-status">
        <div className="doughnut-wrapper">
          <Doughnut data={data} options={options} />
          <span className="completed-value">{completed}%</span>
        </div>
        <div className="color-indicate">
          <div className="color-indicate-item">
            <span className="dot completed"></span>
            <span className="label">Completed</span>
          </div>

          <div className="color-indicate-item">
            <span className="dot remain"></span>
            <span className="label">Yet to Complete</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFloorStatus;
