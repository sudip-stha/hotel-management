import PrimaryButton from "../../ui/buttons/PrimaryButton";
import { frontDeskData } from "../../../data/frontDesk";
import IncrementBtn from "../../ui/buttons/IncrementBtn";
import DecrementBtn from "../../ui/buttons/DecrementBtn";
import AddButton from "../../ui/buttons/AddButton";

const FrontDeskCheckAvailability = () => {
  return (
    <div className="front-desk-top-container">
      <div className="front-desk-top-left">
        <div className="btn-container">
          <PrimaryButton value={frontDeskData.buttonValue.btn1} />
          <PrimaryButton value={frontDeskData.buttonValue.btn2} />
          <PrimaryButton value={frontDeskData.buttonValue.btn3!} />
          <PrimaryButton value={frontDeskData.buttonValue.btn4} />
          <PrimaryButton value={frontDeskData.buttonValue.btn5} />
        </div>
        <div className="check-date-container">
          <div className="check-data">
            <label htmlFor="">{frontDeskData.checkDate.checkIn}</label>
            <input type="date" name="" id="" />
          </div>
          <div className="check-data">
            <label htmlFor="">{frontDeskData.checkDate.checkOut}</label>
            <input type="date" name="" id="" />
          </div>
        </div>

        <div className="enter-guest-sub-container">
          {frontDeskData.AgeYears.map((data) => {
            return (
              <div className="age-wise-division">
                <div className="age-wise-description">
                  <span>{data.title}</span>
                  <span>{data.description}</span>
                </div>
                <div className="inc-and-dec-btn">
                  <DecrementBtn />
                  <span>1</span>
                  <IncrementBtn />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <AddButton value={frontDeskData.btn6} />
    </div>
  );
};

export default FrontDeskCheckAvailability;
