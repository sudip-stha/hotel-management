import { dashboardData } from "../../../data/dashboard";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useRef } from "react";

const OccupancyStatistics = () => {
  const ref = useRef(null);
  const data = {
    labels: [
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
    ],
    datasets: [
      {
        data: [
          dashboardData.occupancyStatistics.mayStats,
          dashboardData.occupancyStatistics.junStats,
          dashboardData.occupancyStatistics.julStats,
          dashboardData.occupancyStatistics.augStats,
          dashboardData.occupancyStatistics.sepStats,
          dashboardData.occupancyStatistics.octStats,
          dashboardData.occupancyStatistics.novStats,
          dashboardData.occupancyStatistics.decStats,
          dashboardData.occupancyStatistics.janStats,
          dashboardData.occupancyStatistics.febStats,
        ],
        backgroundColor: "#4990F2",
        borderWidth: 1,
      },
    ],
  };

  const option = {
    maintainAspectRatio: false,
  };
  return (
    <div className="dashboard-sub-container">
      <h3>{dashboardData.occupancyStatistics.title}</h3>
      <div className="bar-stats">
        <Bar ref={ref} data={data} options={option} />
      </div>
    </div>
  );
};

export default OccupancyStatistics;
