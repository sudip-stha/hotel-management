import { roomData } from "../../data/room";
import Heading_6 from "../ui/heading/Headin_6";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import AddButton from "../ui/buttons/AddButton";
import RoomTableHead from "../table/RoomTableHead";
import RoomTableData from "../table/RoomTableData";
import PaginationList from "./guest/PaginationList";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const Room = () => {
  const actualTableData = roomData.tableData;
  const [currentPage, setCurrentPage] = useState(1);
  const [, setSearchParams] = useSearchParams();

  const itemsPerPage = 8;
  const totalPages = Math.ceil(actualTableData.length / itemsPerPage);
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  function hanldePagination(pageNumber: number) {
    setCurrentPage(pageNumber);
    setSearchParams({ page: pageNumber.toString() });
  }
  const currentList = actualTableData.slice(startIndex, endIndex);
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
