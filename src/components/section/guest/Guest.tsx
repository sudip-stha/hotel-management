import { guestData } from "../../../data/guest.ts";
import PrimaryButton from "../../ui/buttons/PrimaryButton.tsx";
import Input from "../../ui/input/Input.tsx";
import GuestTableData from "../../table/GuestTableData.js";
import TableHead from "../../table/TableHead.js";
import Heading from "../../ui/Heading.tsx";
import { useState, type ChangeEvent } from "react";
import PaginationList from "./PaginationList.tsx";
import FilterButton from "../../ui/buttons/FilterButton.tsx";
import GuestIndividual from "./GuestIndividual.tsx";
import type {
  GuestTableDataType,
  UpdateGuestArgumentType,
} from "../../../types/data.ts";
import AddButton from "../../ui/buttons/AddButton.tsx";
import AddGuest from "./AddGuest.tsx";
import { useSearchParams } from "react-router-dom";

const Guest = () => {
  let actualTableData = guestData.tableData;
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeFilter, setActiveFilter] = useState("");
  const [filterData, setFilterData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGuest, setSelectedGuest] = useState<GuestTableDataType | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addBtn, setAddBtn] = useState(false);

  //For Searching
  const [inputRoomNumber, setInputRoomNumber] = useState("");

  function getInput(data: string): void {
    setInputRoomNumber(data);
    setCurrentPage(1);
  }
  actualTableData = actualTableData.filter((value) => {
    return value.roomNumber
      .toLowerCase()
      .includes(inputRoomNumber.toLowerCase().trim());
  });

  //Check check in or check out filter

  if (activeFilter === guestData.buttonValue.btn1) {
    actualTableData = actualTableData.filter((row) => row.checkIn === true);
  } else if (activeFilter === guestData.buttonValue.btn2) {
    actualTableData = actualTableData.filter((row) => row.checkIn === false);
  }

  //filter the data

  function handleFilterChange(e: ChangeEvent<HTMLSelectElement>) {
    setFilterData(e.target.value);
  }
  if (filterData) {
    actualTableData = actualTableData.filter((row) =>
      row.status.includes(filterData),
    );
  }

  //For pagination

  const itemsPerPage = 10;
  const totalPages = Math.ceil(actualTableData.length / itemsPerPage);
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  function hanldePagination(pageNumber: number) {
    setCurrentPage(pageNumber);
    setSearchParams({ page: pageNumber.toString() });
  }

  //Add the guest in table
  function updateGuest(form: UpdateGuestArgumentType) {
    guestData.tableData.unshift(form);
    setSelectedGuest(form);
  }

  //final render data (10 data per page)
  const currentList = actualTableData.slice(startIndex, endIndex);

  //individual guest popup

  function handleIndividualData(guest: GuestTableDataType) {
    setSelectedGuest(guest);
    setIsModalOpen(true);
  }

  return (
    <div className="container">
      {/* for individual guest popup */}
      {isModalOpen && (
        <div className="overlay-card" onClick={() => setIsModalOpen(false)}>
          <GuestIndividual
            guest={selectedGuest!}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      )}

      {/* for open add guest form */}
      {addBtn && (
        <div className="overlay-card" onClick={() => setAddBtn(false)}>
          <AddGuest
            updateGuest={updateGuest}
            totalGuest={actualTableData.length}
            onClose={() => setAddBtn(false)}
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
          <AddButton
            value={guestData.btn6}
            onClickAddBtn={() => setAddBtn(true)}
          />
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
        <div className="current-page-show">
          Page {`${currentPage} of ${totalPages}`}
        </div>
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
