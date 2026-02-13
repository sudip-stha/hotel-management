import { frontDeskData } from "../../../data/frontDesk";
import type { IncBtnClickHandle } from "../../../types/data";

const IncrementBtn = ({ handleClick }: IncBtnClickHandle) => {
  return (
    <div>
      <button className="increase-btn" onClick={handleClick}>
        <img src={frontDeskData.IncAndDecBtn.incrementBtn} alt="" />
      </button>
    </div>
  );
};

export default IncrementBtn;
