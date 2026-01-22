import { guestData } from "../../data/guest";
import type { NumberListType, StringType } from "../../types/data";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Input from "../input/Input";
import TableHead from "../table/TableHead.js";

const Heading = ({ value }: StringType) => {
  return <h6>{value}</h6>;
};

const PaginationList = ({ item }: NumberListType) => {
  return (
    <ul className="page-col">
      {item.map((data, index) => {
        return <li key={index}>{data}</li>;
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
          <SecondaryButton value={guestData.btn3} />
          <Input value={guestData.input} />
        </div>
      </div>

      <div className="table-container">
        <div className="table-head">
          <TableHead item={guestData.tableTitle} />
        </div>
      </div>

      <SecondaryButton value={guestData.btn5} />
      <PaginationList item={guestData.Pagination} />
      <SecondaryButton value={guestData.btn4} />
    </div>
  );
};

export default Guest;
