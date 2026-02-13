import PrimaryButton from "../../ui/buttons/PrimaryButton";
import { frontDeskData } from "../../../data/frontDesk";
import IncrementBtn from "../../ui/buttons/IncrementBtn";
import DecrementBtn from "../../ui/buttons/DecrementBtn";
import AddButton from "../../ui/buttons/AddButton";
import { useState } from "react";

const FrontDeskCheckAvailability = () => {
  const [adultGuest, setAdultGuest] = useState(0);
  const [childrenGuest, setChildrenGuest] = useState(0);
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
          <div className="age-wise-division">
            <div className="age-wise-description">
              <span>{frontDeskData.AgeYears.adultTitle}</span>
              <span>{frontDeskData.AgeYears.adultDescription}</span>
            </div>
            <div className="inc-and-dec-btn">
              <DecrementBtn
                guestCount={adultGuest}
                handleClick={() => setAdultGuest((count) => count - 1)}
              />
              <span>{adultGuest}</span>
              <IncrementBtn
                handleClick={() => {
                  setAdultGuest((count) => count + 1);
                }}
              />
            </div>
          </div>

          <div className="age-wise-division">
            <div className="age-wise-description">
              <span>{frontDeskData.AgeYears.childrenTitle}</span>
              <span>{frontDeskData.AgeYears.childrenDescription}</span>
            </div>
            <div className="inc-and-dec-btn">
              <DecrementBtn
                guestCount={childrenGuest}
                handleClick={() => {
                  setChildrenGuest((count) => count - 1);
                }}
              />
              <span>{childrenGuest}</span>
              <IncrementBtn
                handleClick={() => {
                  setChildrenGuest((count) => count + 1);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <AddButton value={frontDeskData.btn6} />
    </div>
  );
};

export default FrontDeskCheckAvailability;
