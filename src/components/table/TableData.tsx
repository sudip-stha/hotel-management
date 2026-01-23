import type { tableDataTypeList } from "../../types/data";

const TableData = ({ data }: tableDataTypeList) => {
  return (
    <>
      {data.map((value) => {
        let statusClass = "Clean";
        if (value.status === "Clean") {
          statusClass = "Clean";
        }else if(value.status==="Dirty"){
          statusClass="Dirty";
        }else if(value.status==="Inspected"){
          statusClass="Inspected";
        }else if(value.status==="Pick up"){
          statusClass="PickUp";
        }
        return (
          <div className="table-data" key={value.id}>
            <span className="id-col"># {value.id}</span>
            <span>{value.name}</span>
            <span>{value.roomNumber}</span>
            <span>$ {value.totalAmt}</span>
            <span>$ {value.amtPaid}</span>
            <span className={`status ${statusClass}`}>{value.status}</span>
            <span className="three-dot-col">
              <img src={value.dotIcon} alt="This is a dot icon." />
            </span>
          </div>
        );
      })}
    </>
  );
};

export default TableData;
