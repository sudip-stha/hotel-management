import { roomData } from "../../data/room";
import Heading_6 from "../ui/heading/Headin_6";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import AddButton from "../ui/buttons/AddButton";
import RoomTableHead from "../table/RoomTableHead";
import RoomTableData from "../table/RoomTableData";
import PaginationList from "./guest/PaginationList";

function hanldePagination() {}

const Room = () => {
  return (
    <div className="container">
      <Heading_6 value={roomData.title} />
      <div className="btns-container">
        <div className="left-side-btns">
          <PrimaryButton value={roomData.buttonValue.btn1} />
          <PrimaryButton value={roomData.buttonValue.btn2} />
          <PrimaryButton value={roomData.buttonValue.btn3!} />
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
        {/* <Button
          value={roomData.btn6}
          btnAction={{
            action: "",
            onClick: () => {},
            disabled: false,
          }}
        /> */}
        <PaginationList
          totalPages={7}
          hanldePagination={hanldePagination}
          currentPage={1}
        />
        {/* <SecondaryButton
          value={roomData.btn5}
          btnAction={{
            action: "",
            onClick: () => {},
            disabled: false,
          }}
        /> */}
      </div>
    </div>
  );
};

export default Room;
