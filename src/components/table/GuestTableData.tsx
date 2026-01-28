import type { GuestTableDataTypeList } from "../../types/data";

function handleData(id: number) {
  console.log(id);
}

const GuestTableData = ({ data }: GuestTableDataTypeList) => {
  return (
    <>
      {data.map((value) => {
        let statusClass = "Clean";
        if (value.status === "Clean") {
          statusClass = "Clean";
        } else if (value.status === "Dirty") {
          statusClass = "Dirty";
        } else if (value.status === "Inspected") {
          statusClass = "Inspected";
        } else if (value.status === "Pick up") {
          statusClass = "PickUp";
        }
        return (
          <div className="table-data" key={value.id}>
            <span className="id-col">#{value.reservationId}</span>
            <span>{value.name}</span>
            <span>{value.roomNumber}</span>
            <span>$ {value.totalAmt}</span>
            <span>$ {value.amtPaid}</span>
            <div className="status-container">
              <span className={`status ${statusClass}`}>{value.status}</span>
            </div>
            <span
              className="three-dot-col"
              onClick={() => handleData(value.id)}
            >
              <img src={value.dotIcon} alt="This is a dot icon." />
            </span>
          </div>
        );
      })}
    </>
  );
};

export default GuestTableData;
