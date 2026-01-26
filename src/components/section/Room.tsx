import { roomData } from "../../data/room";
import Heading from "../ui/Heading";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import AddButton from "../ui/buttons/AddButton";
import RoomTableHead from "../table/RoomTableHead";
import Button from "../ui/buttons/Button";
import SecondaryButton from "../ui/buttons/SecondaryButton";
import type { NumberListType } from "../../types/data";
import RoomTableData from "../table/RoomTableData";

const PaginationList = ({ item }: NumberListType) => {
  return (
    <ul className="page-col">
      {item.map((data) => {
        return <li key={data}>{data}</li>;
      })}
    </ul>
  );
};

const Room = () => {
  return (
    <div className="container">
      <Heading value={roomData.title} />
      <div className="btns-container">
        <div className="left-side-btns">
          <PrimaryButton value={roomData.buttonValue.btn1} />
          <PrimaryButton value={roomData.buttonValue.btn2} />
          <PrimaryButton value={roomData.buttonValue.btn3} />
        </div>
        <div className="left-side-btns right-side-btn">
          <AddButton value={roomData.btn4} />
        </div>
      </div>
      <div className="table-container">
        <RoomTableHead item={roomData.tableTitle} />
        <RoomTableData data={roomData.tableData} />
      </div>

      <div className="guest-bottom-btns">
        <Button value={roomData.btn6} />
        <PaginationList item={roomData.Pagination} />
        <SecondaryButton value={roomData.btn5} />
      </div>
    </div>
  );
};

export default Room;
