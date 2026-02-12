import { frontDesk } from "../../../data/frontDesk";
import FrontDeskTableData from "../../table/frontDeskTableData";
import RoomTableHead from "../../table/RoomTableHead";
import Heading_6 from "../../ui/heading/Headin_6";

const FrontDesk = () => {
  return (
    <div className="container">
      <Heading_6 value={frontDesk.title} />

      <div className="table-container">
        <RoomTableHead item={frontDesk.tableTitle} />
        <FrontDeskTableData data={frontDesk.tableData} />
      </div>
    </div>
  );
};

export default FrontDesk;
