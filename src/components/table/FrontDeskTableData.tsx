import type { RoomTableDataTypeList } from "../../types/data";

const FrontDeskTableData = ({ data }: RoomTableDataTypeList) => {
  return (
    <>
      {data.map((value) => {
        let statusClass = "Clean";
        if (value.status === "Available") {
          statusClass = "Clean";
        } else if (value.status === "Booked") {
          statusClass = "Dirty";
        } else if (value.status === "Reserved") {
          statusClass = "Inspected";
        } else if (value.status === "Waitlist" || value.status === "Blocked") {
          statusClass = "PickUp";
        }
        return (
          <div className="table-data" key={value.roomNumber}>
            <span className="id-col">#{value.roomNumber}</span>
            <span>{value.bedType}</span>
            <span>{value.roomFloor}</span>
            <span>{value.roomFacility}</span>
            <div className="status-container room-tbl-status">
              <span className={`status ${statusClass}`}>{value.status}</span>
            </div>
            <span className="three-dot-col">
              <img src={value.dotIcon} alt="This is a dot icon." />
            </span>
          </div>
        );
      })}
    </>
  );
};

export default FrontDeskTableData;
