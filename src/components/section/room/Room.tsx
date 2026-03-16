import { roomData } from "../../../data/room";
import Heading_6 from "../../ui/heading/Headin_6";
import PrimaryButton from "../../ui/buttons/PrimaryButton";
import AddButton from "../../ui/buttons/AddButton";
import RoomTableHead from "../../table/RoomTableHead";
import RoomTableData from "../../table/RoomTableData";
import PaginationList from "../guest/PaginationList";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import AddRoom from "./AddRoom";
import type { RoomTableDataType } from "../../../types/data";

const Room = () => {
  let actualTableData = roomData.tableData;
  const totalRoom = actualTableData.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState("");
  const [addBtn, setAddBtn] = useState(false);

  //count the available and booked room
  const countAvailable = actualTableData.filter(
    (row) => row.status === "Available",
  ).length;

  const countBooked = actualTableData.filter(
    (row) => row.status === "Booked",
  ).length;

  //filter the room data
  if (activeFilter === roomData.buttonValue.btn2) {
    actualTableData = actualTableData.filter(
      (row) => row.status === "Available",
    );
  } else if (activeFilter === roomData.buttonValue.btn3) {
    actualTableData = actualTableData.filter((row) => row.status === "Booked");
  }

  //Add room
  function updateRoom(form: RoomTableDataType) {
    roomData.tableData.push(form);
  }

  //for Pagination
  const itemsPerPage = 8;
  const totalPages = Math.ceil(actualTableData.length / itemsPerPage);
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  function hanldePagination(pageNumber: number) {
    setCurrentPage(pageNumber);
    setSearchParams({ page: pageNumber.toString() });
  }

  //slice the list per page 8
  const currentList = actualTableData.slice(startIndex, endIndex);

  return (
    <div className="container">
      {/* for open a room add form */}
      {addBtn && (
        <div className="overlay-card" onClick={() => setAddBtn(false)}>
          <AddRoom
            updateRoom={updateRoom}
            actualTableData={actualTableData}
            onClose={() => setAddBtn(false)}
          />
        </div>
      )}

      <Heading_6 value={roomData.title} />
      <div className="btns-container">
        <div className="left-side-btns">
          <PrimaryButton
            value={`${roomData.buttonValue.btn1}(${totalRoom})`}
            isActive={activeFilter === roomData.buttonValue.btn1}
            onClick={() => setActiveFilter(roomData.buttonValue.btn1)}
          />
          <PrimaryButton
            value={`${roomData.buttonValue.btn2}(${countAvailable})`}
            isActive={activeFilter === roomData.buttonValue.btn2}
            onClick={() => setActiveFilter(roomData.buttonValue.btn2)}
          />
          <PrimaryButton
            value={`${roomData.buttonValue.btn3!}(${countBooked})`}
            isActive={activeFilter === roomData.buttonValue.btn3}
            onClick={() => setActiveFilter(roomData.buttonValue.btn3!)}
          />
        </div>
        <div className="left-side-btns right-side-btn">
          <AddButton
            value={roomData.btn4}
            onClickAddBtn={() => setAddBtn(true)}
          />
        </div>
      </div>
      <div className="table-container">
        <RoomTableHead item={roomData.tableTitle} />
        <RoomTableData data={currentList} />
      </div>

      <div className="guest-bottom-btns">
        <PaginationList
          totalPages={totalPages}
          hanldePagination={hanldePagination}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Room;
