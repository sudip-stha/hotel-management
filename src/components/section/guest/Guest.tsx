import { guestData } from "../../../data/guest.ts";
import PrimaryButton from "../../ui/buttons/PrimaryButton.tsx";
import Input from "../../ui/input/Input.tsx";
import GuestTableData from "../../table/GuestTableData.js";
import TableHead from "../../table/TableHead.js";
import Heading from "../../ui/Heading.tsx";
import { useEffect, useState } from "react";
import PaginationList from "./PaginationList.tsx";
import FilterButton from "../../ui/buttons/FilterButton.tsx";
import GuestIndividual from "./GuestIndividual.tsx";
import type { GuestTableDataType } from "../../../types/data.ts";

const Guest = () => {
  let actualTableData = guestData.tableData;

  //For Searching
  const [inputRoomNumber, setInputRoomNumber] = useState("");

  function getInput(data: string): void {
    setInputRoomNumber(data);
  }
  actualTableData = actualTableData.filter((value) => {
    return value.roomNumber
      .toLowerCase()
      .includes(inputRoomNumber.toLowerCase().trim());
  });

  //Check check in or check out filter
  const [activeFilter, setActiveFilter] = useState("");

  if (activeFilter === guestData.buttonValue.btn1) {
    actualTableData = actualTableData.filter((row) => row.checkIn === true);
  } else if (activeFilter === guestData.buttonValue.btn2) {
    actualTableData = actualTableData.filter((row) => row.checkIn === false);
  }

  //filter the data
  const [filterData, setFilterData] = useState("");

  function handleFilterChange(e) {
    setFilterData(e.target.value);
  }
  if (filterData) {
    actualTableData = actualTableData.filter((row) =>
      row.status.includes(filterData),
    );
  }

  //For pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(actualTableData.length / itemsPerPage);
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  function hanldePagination(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [inputRoomNumber]);

  //final render data (10 data per page)
  const currentList = actualTableData.slice(startIndex, endIndex);

  //individual guest popup
  const [selectedGuest, setSelectedGuest] = useState<GuestTableDataType | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleIndividualData(guest: GuestTableDataType) {
    setSelectedGuest(guest);
    setIsModalOpen(true);
  }

  return (
    <div className="container">
      {isModalOpen && (
        <div className="overlay-card">
          <GuestIndividual
            guest={selectedGuest!}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      )}

      <Heading value={guestData.title} />
      <div className="btns-container">
        <div className="left-side-btns">
          <PrimaryButton
            value={guestData.buttonValue.btn1}
            isActive={activeFilter === guestData.buttonValue.btn1}
            onClick={() => setActiveFilter(guestData.buttonValue.btn1)}
          />
          <PrimaryButton
            value={guestData.buttonValue.btn2}
            isActive={activeFilter === guestData.buttonValue.btn2}
            onClick={() => setActiveFilter(guestData.buttonValue.btn2)}
          />
        </div>
        <div className="left-side-btns right-side-btn">
          <FilterButton
            value={guestData.btn3}
            handleFilterChange={handleFilterChange}
          />
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
        <GuestTableData
          data={currentList}
          handleIndividualData={handleIndividualData}
        />
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

export default Guest;
