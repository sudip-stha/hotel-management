import { dashboardData } from "../../../data/dashboard";
import Heading_2 from "../../ui/heading/Heading_2";
import Heading_3 from "../../ui/heading/Heading_3";

const DashboardRooms = () => {
  return (
    <div className="dashboard-sub-container">
      <Heading_3 value={dashboardData.rooms.title} />

      <div className="dashboard-room-container">
        {dashboardData.rooms.RoomDetails.map((data) => {
          return (
            <div className="room-details-container" key={data.roomType}>
              <div className="room-top-wrapper">
                <span className={`${data.deal && "room-data-deal"}`}>
                  {data.deal}
                </span>
                <img src={data.dotIcon} alt="This is a dot icon." />
              </div>
              <span>{data.roomType}</span>
              <div className="room-data-wrapper numberOfRoom">
                <Heading_2 value={data.bookedRoom.toString()} />
                <span> {`/ ${data.totalRoom}`}</span>
              </div>
              <div className="room-data-wrapper roomPrice">
                <Heading_2 value={`$ ${data.perDayPrice.toString()}`} />
                <span>/ day</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardRooms;
