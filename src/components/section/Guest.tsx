import { guestData } from "../../data/guest.ts";
import type { NumberListType } from "../../types/data.ts";
import PrimaryButton from "../ui/buttons/PrimaryButton.tsx";
import Button from "../ui/buttons/Button.tsx";
import Input from "../ui/input/Input.tsx";
import GuestTableData from "../table/GuestTableData.js";
import TableHead from "../table/TableHead.js";
import SecondaryButton from "../ui/buttons/SecondaryButton.js";
import Heading from "../ui/Heading.tsx";
import { AppRoutes } from "../../data/routes.ts";
import { Link } from "react-router-dom";

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
      <div className="btns-container">
        <div className="left-side-btns">
          <PrimaryButton value={guestData.buttonValue.btn1} />
          <PrimaryButton value={guestData.buttonValue.btn2} />
        </div>
        <div className="left-side-btns right-side-btn">
          <Button value={guestData.btn3} />
          <Input value={guestData.input} />
        </div>
      </div>

      <div className="table-container">
        <TableHead item={guestData.tableTitle} />
        <GuestTableData data={guestData.tableData} />
      </div>

      <div className="guest-bottom-btns">
        <Button value={guestData.btn5} />
        <PaginationList item={guestData.Pagination} />
        <SecondaryButton value={guestData.btn4} />
      </div>

      <Link to={AppRoutes.dashboard}></Link>
    </div>
  );
};

export default Guest;
