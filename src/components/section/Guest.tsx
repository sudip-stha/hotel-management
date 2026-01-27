import { guestData } from "../../data/guest.ts";
import type { NumberListType } from "../../types/data.ts";
import PrimaryButton from "../ui/buttons/PrimaryButton.tsx";
import Button from "../ui/buttons/Button.tsx";
import Input from "../ui/input/Input.tsx";
import GuestTableData from "../table/GuestTableData.js";
import TableHead from "../table/TableHead.js";
import SecondaryButton from "../ui/buttons/SecondaryButton.js";
import Heading from "../ui/Heading.tsx";
import { useState } from "react";

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
  const [inputRoomNumber, setInputRoomNumber] = useState("");

  function getInput(data: string): void {
    setInputRoomNumber(data);
  }
  const searchingValue = guestData.tableData.filter((value) => {
    return value.roomNumber
      .toLowerCase()
      .includes(inputRoomNumber.toLowerCase().trim());
  });

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
          <Input
            value={{
              searchIcon: guestData.input.searchIcon,
              placeholder: guestData.input.placeholder,
            }}
            getInput={getInput}
          />
        </div>
      </div>

      <div className="table-container">
        <TableHead item={guestData.tableTitle} />
        <GuestTableData data={searchingValue} />
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
