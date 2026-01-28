import { useState } from "react";
import type { GuestTableDataTypeList } from "../../../types/data";

const Page = (data: GuestTableDataTypeList) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return {
    currentPage,
    totalPages,
    paginatedData,
    setCurrentPage,
  };
};

export default Page;
