import { frontDeskData } from "../../../data/frontDesk";
import type { DecBtnClickHandle } from "../../../types/data";

const DecrementBtn = ({ handleClick, guestCount }: DecBtnClickHandle) => {
  return (
    <div>
      <button
        className="increase-btn"
        onClick={guestCount ? handleClick : undefined}
      >
        <img src={frontDeskData.IncAndDecBtn.DecrementBtn} alt="" />
      </button>
    </div>
  );
};

export default DecrementBtn;
