import { guestData } from "../../../data/guest";
import Heading from "../../ui/Heading";

const AddGuest = () => {
  return (
    <div className="individual-guest-card">
      {/* upload image part */}
      <div className="individual-guest-info">
        <Heading value={guestData.guestFormTitle.reservationId} />
        <input
          type="text"
          placeholder={`Enter ${guestData.guestFormTitle.reservationId}`}
        />
      </div>

      <div className="individual-guest-info">
        <Heading value={guestData.guestFormTitle.name} />
        <input
          type="text"
          placeholder={`Enter ${guestData.guestFormTitle.name}`}
        />
      </div>

      <div className="individual-guest-info">
        <Heading value={guestData.guestFormTitle.roomNumber} />
        <input
          type="text"
          placeholder={`Enter ${guestData.guestFormTitle.roomNumber}`}
        />
      </div>

      <div className="individual-guest-info">
        <Heading value={guestData.guestFormTitle.totalAmt} />
        <input
          type="text"
          placeholder={`Enter ${guestData.guestFormTitle.totalAmt}`}
        />
      </div>

      <div className="individual-guest-info">
        <Heading value={guestData.guestFormTitle.amtPaid} />
        <input
          type="text"
          placeholder={`Enter ${guestData.guestFormTitle.amtPaid}`}
        />
      </div>

      <div className="individual-guest-info">
        <Heading value={guestData.guestFormTitle.status} />
        <input
          type="text"
          placeholder={`Enter ${guestData.guestFormTitle.status}`}
        />
      </div>

      {/* <button className="btn" onClick={onClose}>
        cancel
      </button> */}
    </div>
  );
};

export default AddGuest;
