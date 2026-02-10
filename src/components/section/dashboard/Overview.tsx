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

  return (
    <div className="dashboard-sub-container">
      <h3>{dashboardData.overview.title}</h3>
      <div className="overview-data-container">
        <div className="overview-data-wrapper">
          <span>{dashboardData.overview.today}</span>
          <div className="data-wrapper">
            <span>{dashboardData.overview.checkInTitle}</span>
            <Heading_2 value={checkInCount.toString()} />
          </div>
        </div>
        <div className="overview-data-wrapper">
          <span>{dashboardData.overview.today}</span>
          <div className="data-wrapper">
            <span>{dashboardData.overview.checkOutTitle}</span>
            <Heading_2 value={checkOutCount.toString()} />
          </div>
        </div>
        <div className="overview-data-wrapper">
          <span>{dashboardData.overview.total}</span>
          <div className="data-wrapper">
            <span>{dashboardData.overview.inHotelTitle}</span>
            <Heading_2 value={dashboardData.overview.inHotelValue.toString()} />
          </div>
        </div>
        <div className="overview-data-wrapper">
          <span>{dashboardData.overview.total}</span>
          <div className="data-wrapper">
            <span>{dashboardData.overview.availableRoomTitle}</span>
            <Heading_2
              value={dashboardData.overview.availableRoomValue.toString()}
            />
          </div>
        </div>
        <div className="overview-data-wrapper">
          <span>{dashboardData.overview.total}</span>
          <div className="data-wrapper">
            <span>{dashboardData.overview.occupiedRoomTitle}</span>
            <Heading_2 value={guestData.tableData.length.toString()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
