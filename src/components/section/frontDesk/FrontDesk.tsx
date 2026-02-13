import { frontDeskData } from "../../../data/frontDesk";
import FrontDeskTableData from "../../table/FrontDeskTableData";
import RoomTableHead from "../../table/RoomTableHead";
import Heading_6 from "../../ui/heading/Headin_6";
import FrontDeskCheckAvailability from "./FrontDeskCheckAvailability";

const FrontDesk = () => {
  return (
    <div className="container">
      <Heading_6 value={frontDeskData.title} />
      
      <FrontDeskCheckAvailability />
      <div className="table-container">
        <RoomTableHead item={frontDeskData.tableTitle} />
        <FrontDeskTableData data={frontDeskData.tableData} />
      </div>
    </div>
  );
};

export default FrontDesk;
