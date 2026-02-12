import { frontDeskData } from "../../../data/frontDesk";

const DecrementBtn = () => {
  return (
    <div>
      <button className="increase-btn">
        <img src={frontDeskData.IncAndDecBtn.DecrementBtn} alt="" />
      </button>
    </div>
  );
};

export default DecrementBtn;
