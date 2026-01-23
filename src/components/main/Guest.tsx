import { guestData } from "../../data/guest";
import type { NumberListType, StringType } from "../../types/data";
import PrimaryButton from "../buttons/PrimaryButton";
import Button from "../buttons/Button";
import Input from "../input/Input";
import TableData from "../table/TableData.js";
import TableHead from "../table/TableHead.js";
import SecondaryButton from "../buttons/SecondaryButton.js";

const Heading = ({ value }: StringType) => {
  return <h6>{value}</h6>;
};

const PaginationList = ({ item }: NumberListType) => {
  return (
    <ul className="page-col">
      {item.map((data) => {
        return <li key={data}>{data}</li>;
      })}
    </ul>
  );
};

const Guest = () => {
 
  return (
    <div className="container">
      <Heading value={guestData.title} />
      <div className="guest-btns-container">
        <div className="guest-btns">
          <PrimaryButton value={guestData.buttonValue.btn1} />
          <PrimaryButton value={guestData.buttonValue.btn2} />
        </div>
        <div className="guest-btns guest-right-btn">
          <Button value={guestData.btn3} />
          <Input value={guestData.input} />
        </div>
      </div>

      <div className="table-container">
        <TableHead item={guestData.tableTitle} />
        <TableData data={guestData.tableData} />
      </div>

      <div className="guest-bottom-btns">
        <Button value={guestData.btn5} />
        <PaginationList item={guestData.Pagination} />
        <SecondaryButton value={guestData.btn4} />
      </div>
    </div>
  );
};

export default Guest;
