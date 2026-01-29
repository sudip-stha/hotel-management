import { guestData } from "../../../data/guest.ts";
import Button from "../../ui/buttons/Button.tsx";
import SecondaryButton from "../../ui/buttons/SecondaryButton.tsx";
import type { PaginationListType } from "../../../types/data.ts";

const PaginationList = ({
  totalPages,
  hanldePagination,
  currentPage,
}: PaginationListType) => {
  const page: number[] = [];
  let nextDisable = false;
  let prevDisable = false;

  if (currentPage === totalPages) {
    nextDisable = true;
  }
  if (currentPage === 1) {
    prevDisable = true;
  }

  for (let i = 1; i <= totalPages; i++) {
    page.push(i);
  }
  return (
    <div
      className={`guest-bottom-btns ${totalPages === 1 ? "hide-pagination" : " "}`}
    >
      <Button
        value={guestData.btn5}
        btnAction={{
          action: "prev",
          onClick: () => {
            if (!prevDisable) hanldePagination(currentPage - 1);
          },
          disabled: prevDisable,
        }}
      />

      <ul className="page-col">
        {page.map((pageNumber) => {
          return (
            <li key={pageNumber}>
              <button
                onClick={() => hanldePagination(pageNumber)}
                className={`pagination-btn ${currentPage === pageNumber && "active-page"}`}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
      </ul>
      <SecondaryButton
        value={guestData.btn4}
        btnAction={{
          action: "next",
          onClick: () => {
            if (!nextDisable) hanldePagination(currentPage + 1);
          },
          disabled: nextDisable,
        }}
      />
    </div>
  );
};

export default PaginationList;
