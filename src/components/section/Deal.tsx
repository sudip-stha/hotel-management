import Heading from "../ui/Heading";
import { dealData } from "../../data/deal";
import Button from "../ui/buttons/Button";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import AddButton from "../ui/buttons/AddButton";
import TableHead from "../table/TableHead";
import DealTableData from "../table/DealTableData";

const Deal = () => {
  return (
    <div className="container">
      <Heading value={dealData.title} />
      <div className="btns-container">
        <div className="left-side-btns">
          <PrimaryButton value={dealData.buttonValue.btn1} />
          <PrimaryButton value={dealData.buttonValue.btn2} />
        </div>
        <div className="left-side-btns right-side-btn">
          <AddButton value={dealData.btn4} />
          <Button
            value={dealData.btn3}
            btnAction={{
              action: "",
              onClick: () => {},
              disabled: false,
            }}
          />
        </div>
      </div>
      <div className="table-container">
        <TableHead item={dealData.tableTitle} />
        <DealTableData data={dealData.tableData} />
      </div>
    </div>
  );
};

export default Deal;
