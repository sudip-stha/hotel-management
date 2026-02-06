import { dashboardData } from "../../../data/dashboard";
import { guestData } from "../../../data/guest";
import Heading_2 from "../../ui/heading/Heading_2";

const Overview = () => {
  //calculate total check in and check out guests
  let checkInCount = 0;
  let checkOutCount = 0;
  guestData.tableData.map((data) => {
    return data.checkIn == true && checkInCount++;
  });

  guestData.tableData.map((data) => {
    return data.checkIn == false && checkOutCount++;
  });
  const checkInString = checkInCount.toString();
  const checkOutString = checkOutCount.toString();
  const inHotelValueString = dashboardData.overview.inHotelValue.toString();
  const availableRoomValueString =
    dashboardData.overview.availableRoomValue.toString();
  const occupiedRoomInString = guestData.tableData.length.toString();

  return (
    <div className="dashboard-sub-container">
      <h3>{dashboardData.overview.title}</h3>
      <div className="overview-data-container">
        <div className="overview-data-wrapper">
          <span>{dashboardData.overview.today}</span>
          <div className="data-wrapper">
            <span>{dashboardData.overview.checkInTitle}</span>
            <Heading_2 value={checkInString} />
          </div>
        </div>
        <div className="overview-data-wrapper">
          <span>{dashboardData.overview.today}</span>
          <div className="data-wrapper">
            <span>{dashboardData.overview.checkOutTitle}</span>
            <Heading_2 value={checkOutString} />
          </div>
        </div>
        <div className="overview-data-wrapper">
          <span>{dashboardData.overview.total}</span>
          <div className="data-wrapper">
            <span>{dashboardData.overview.inHotelTitle}</span>
            <Heading_2 value={inHotelValueString} />
          </div>
        </div>
        <div className="overview-data-wrapper">
          <span>{dashboardData.overview.total}</span>
          <div className="data-wrapper">
            <span>{dashboardData.overview.availableRoomTitle}</span>
            <Heading_2 value={availableRoomValueString} />
          </div>
        </div>
        <div className="overview-data-wrapper">
          <span>{dashboardData.overview.total}</span>
          <div className="data-wrapper">
            <span>{dashboardData.overview.occupiedRoomTitle}</span>
            <Heading_2 value={occupiedRoomInString} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
