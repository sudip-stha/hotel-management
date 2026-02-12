import { dashboardData } from "../../../data/dashboard";
import Heading_3 from "../../ui/heading/Heading_3";

const CustomersFeedback = () => {
  return (
    <div className="dashboard-sub-container">
      <div className="top-part-feedback">
        <Heading_3 value={dashboardData.customersFeedback.title} />
        <img
          src={dashboardData.customersFeedback.dotIcon}
          alt="This is a dot icon."
        />
      </div>
      <div className="">
        {dashboardData.customersFeedback.userComment.map((data) => {
          return (
            <div className="">
              <span>{data.name}</span>
              <span>{data.comment}</span>
              <span>{data.roomNumber}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomersFeedback;
