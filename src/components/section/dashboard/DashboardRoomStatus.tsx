import { dashboardData } from "../../../data/dashboard";

const DashboardRoomStatus = () => {
  return (
    <div className="dashboard-sub-container">
      <h3>{dashboardData.roomStatus.title}</h3>

      <div className="room-status-container">
        <div className="room-status-list">
          {dashboardData.roomStatus.occupiedRooms.map((data) => {
            return (
              <div className="room-status-list-value">
                <span className="roomStatus-title">{data.title}</span>
                <span className="roomStatus-value">{data.value}</span>
              </div>
            );
          })}
        </div>
        <div className="room-status-list">
          {dashboardData.roomStatus.availableRooms.map((data) => {
            return (
              <div className="room-status-list-value">
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
