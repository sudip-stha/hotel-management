import type { DealTableDataTypeList } from "../../types/data";

const DealTableData = ({ data }: DealTableDataTypeList) => {
  return (
    <>
      {data.map((value) => {
        let statusClass = "Clean";
        if (value.status === "Ongoing") {
          statusClass = "Clean";
        } else if (value.status === "Full") {
          statusClass = "Dirty";
        } else if (value.status === "New") {
          statusClass = "Inspected";
        } else if (value.status === "Inactive") {
          statusClass = "Dirty";
        }
        return (
          <div className="table-data" key={value.referenceNumber}>
            <span className="id-col">#{value.referenceNumber}</span>
            <span>{value.dealName}</span>
            <span>{value.reservationLeft}</span>
            <span>{value.endDate}</span>
            <span>{value.roomType}</span>
            <div className="status-container">
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

export default DealTableData;
