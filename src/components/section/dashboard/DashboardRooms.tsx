import { dashboardData } from "../../../data/dashboard";
import Heading_2 from "../../ui/heading/Heading_2";

const DashboardRooms = () => {
  return (
    <div className="dashboard-sub-container">
      <h3>{dashboardData.rooms.title}</h3>

      <div className="dashboard-room-container">
        {dashboardData.rooms.RoomDetails.map((data) => {
          return (
            <div className="room-details-container" key={data.roomType}>
              <div className="room-top wrapper">
                <span>{data.deal}</span>
                <img src={data.dotIcon} alt="This is a dot icon." />
              </div>
              <span>{data.roomType}</span>
              <Heading_2 value={data.bookedRoom.toString()} />
              <span> {`/ ${data.totalRoom}`}</span>
              <Heading_2 value={`$ ${data.perDayPrice.toString()}`} />
              <span>/ day</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardRooms;
