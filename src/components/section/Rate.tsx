import { rateData } from "../../data/rate";
import Heading_6 from "../ui/heading/Headin_6";
import Button from "../ui/buttons/Button";
import AddButton from "../ui/buttons/AddButton";
import TableHead from "../table/TableHead";
import RateTableData from "../table/RateTableData";

const Rate = () => {
  return (
    <div className="container">
      <Heading_6 value={rateData.title} />
      <div className="btns-container">
        <div className="left-side-btns right-side-btn">
          <AddButton value={rateData.btn1} />
          <Button
            value={rateData.btn2}
            btnAction={{
              action: "",
              onClick: () => {},
              disabled: false,
            }}
          />
        </div>
      </div>

      <div className="table-container">
        <TableHead item={rateData.tableTitle} />
        <RateTableData data={rateData.tableData} />
      </div>
    </div>
  );
};

export default Rate;
