import PrimaryButton from "../../ui/buttons/PrimaryButton";
import { frontDeskData } from "../../../data/frontDesk";

const FrontDeskCheckAvailability = () => {
  return (
    <div className="front-desk-top-container">
      <div className="btn-container">
        <PrimaryButton value={frontDeskData.buttonValue.btn1} />
        <PrimaryButton value={frontDeskData.buttonValue.btn2} />
        <PrimaryButton value={frontDeskData.buttonValue.btn3!} />
        <PrimaryButton value={frontDeskData.buttonValue.btn4} />
        <PrimaryButton value={frontDeskData.buttonValue.btn5} />
      </div>
      <div className="check-date-container">
        <label htmlFor="">{frontDeskData.checkDate.checkIn}</label>
        <input type="date" name="" id="" />

        <label htmlFor="">{frontDeskData.checkDate.checkOut}</label>
        <input type="date" name="" id="" />
      </div>

      <div className="">
        {frontDeskData.AgeYears.map((data) => {
          return (
            <div>
              <span>{data.title}</span>
              <span>{data.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrontDeskCheckAvailability;
