import { dashboardData } from "../../../data/dashboard";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useRef } from "react";
import Button from "../../ui/buttons/Button";
import Heading_3 from "../../ui/heading/Heading_3";

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
        borderRadius: 4,
        categoryPercentage: 0.5,
      },
    ],
  };

  const option = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            family: "Inter, sans-serif",
          },
          color: "#858D9D",
        },
      },

      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          font: {
            size: 12,
            family: "Inter, sans-serif",
          },
          color: "#858D9D",
        },
      },
    },
  };
  return (
    <div className="dashboard-sub-container">
      <div className="top-part-occupancy">
        <Heading_3 value={dashboardData.occupancyStatistics.title} />
        <Button
          value={dashboardData.occupancyStatistics.monthBtn}
          btnAction={{
            action: "",
            onClick: () => {},
            disabled: false,
          }}
        />
      </div>
      <div className="bar-stats">
        <Bar ref={ref} data={data} options={option} />
      </div>
    </div>
  );
};

export default OccupancyStatistics;
