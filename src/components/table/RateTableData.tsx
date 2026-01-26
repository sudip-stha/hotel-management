import type { RateTableDataTypeList } from "../../types/data";

const RateTableData = ({ data }: RateTableDataTypeList) => {
  return (
    <>
      {data.map((value) => {
        let statusClass = "Clean";
        if (value.availability === "Full" || value.availability === "5 rooms") {
          statusClass = "Dirty";
        }
        return (
          <div className="table-data" key={value.roomType}>
            <span className="id-col">{value.roomType}</span>
            <span>{value.deals}</span>
            <span>{value.cancellationPolicy}</span>
            <span>$ {value.dealPrice}</span>
            <span>$ {value.rate}</span>
            <div className="status-container">
              <span className={`status ${statusClass}`}>
                {value.availability}
              </span>
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

export default RateTableData;
