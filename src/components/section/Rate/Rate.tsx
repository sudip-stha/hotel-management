import { useState } from "react";
import { rateData } from "../../../data/rate";
import RateTableData from "../../table/RateTableData";
import TableHead from "../../table/TableHead";
import AddButton from "../../ui/buttons/AddButton";
import Button from "../../ui/buttons/Button";
import Heading_6 from "../../ui/heading/Headin_6";
import AddRate from "./AddRate";
import type { RateTableDataType } from "../../../types/data";

const Rate = () => {
  const [addBtn, setAddBtn] = useState(false);
  const [tableData, setTableData] = useState<RateTableDataType[]>(
    rateData.tableData,
  );

  function updateRate(form: RateTableDataType) {
    setTableData((prev) => [...prev, form]); // triggers re-render
  }

  return (
    <div className="container">
      {addBtn && (
        <div className="overlay-card" onClick={() => setAddBtn(false)}>
          <AddRate updateRate={updateRate} onClose={() => setAddBtn(false)} />
        </div>
      )}
      <Heading_6 value={rateData.title} />
      <div className="btns-container">
        <div className="left-side-btns right-side-btn">
          <AddButton
            value={rateData.btn1}
            onClickAddBtn={() => setAddBtn(true)}
          />
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
        <RateTableData data={tableData} /> {/* use state variable here */}
      </div>
    </div>
  );
};

export default Rate;
