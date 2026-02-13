import { dashboardData } from "../../../data/dashboard";
import Heading_3 from "../../ui/heading/Heading_3";

const DashboardRoomStatus = () => {
  return (
    <div className="dashboard-sub-container">
      <Heading_3 value={dashboardData.roomStatus.title} />

      <div className="room-status-container">
        <div className="room-status-list">
          {dashboardData.roomStatus.occupiedRooms.map((data) => {
            return (
              <div className="room-status-list-value" key={data.title}>
                <span className="roomStatus-title">{data.title}</span>
                <span className="roomStatus-value">{data.value}</span>
              </div>
            );
          })}
        </div>
        <div className="room-status-list">
          {dashboardData.roomStatus.availableRooms.map((data) => {
            return (
              <div key={data.title} className="room-status-list-value">
                <span>{data.title}</span>
                <span>{data.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardRoomStatus;
