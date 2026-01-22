import type { tableDataTypeList } from "../../types/data";

const TableData = ({ data }: tableDataTypeList) => {
  return (
    <>
      {data.map((value) => {
        return (
          <div className="table-data" key={value.id}>
            <span className="id-col"># {value.id}</span>
            <span>{value.name}</span>
            <span>{value.roomNumber}</span>
            <span>$ {value.totalAmt}</span>
            <span>$ {value.amtPaid}</span>
            <span>{value.status}</span>
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
