import { dashboardData } from "../../../data/dashboard";
import { guestData } from "../../../data/guest";

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
    <div className="dashboard-overview-container">
      <h3>{dashboardData.overview.title}</h3>
      <div className="overview-data-container">
        <div className="overview-data-wrapper">
          <span>{dashboardData.overview.today}</span>
          <span>{dashboardData.overview.checkInTitle}</span>
          <span>{checkInCount}</span>
        </div>
        <div className="overview-data-wrapper">
          <span>{dashboardData.overview.today}</span>
          <span>{dashboardData.overview.checkOutTitle}</span>
          <span>{checkOutCount}</span>
        </div>
        <div className="overview-data-wrapper">
          <span>{dashboardData.overview.total}</span>
          <span>{dashboardData.overview.inHotelTitle}</span>
          <span>{dashboardData.overview.inHotelValue}</span>
        </div>
        <div className="overview-data-wrapper">
          <span>{dashboardData.overview.total}</span>
          <span>{dashboardData.overview.availableRoomTitle}</span>
          <span>{dashboardData.overview.availableRoomValue}</span>
        </div>
        <div className="overview-data-wrapper">
          <span>{dashboardData.overview.total}</span>
          <span>{dashboardData.overview.occupiedRoomTitle}</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
