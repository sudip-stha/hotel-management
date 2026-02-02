import { guestData } from "../../../data/guest";
import Heading from "../../ui/Heading";
import type { guestIndividualType } from "../../../types/data";

const GuestIndividual = ({ guest, onClose }: guestIndividualType) => {
  return (
    <div className="individual-guest-card" onClick={(e) => e.stopPropagation()}>
      <img src={guest.guestPP} alt="Profile Picture" />

      <div className="individual-guest-info">
        <Heading value={guestData.guestIndividual.guestName} />
        <input type="text" placeholder={guest.name} />
      </div>

      <div className="individual-guest-info">
        <Heading value={guestData.guestIndividual.registrationNumber} />
        <input type="text" placeholder={`${guest.registrationNumber}`} />
      </div>

      <div className="individual-guest-info">
        <Heading value={guestData.guestIndividual.checkInDate} />
        <input type="text" placeholder={guest.checkInDate} />
      </div>

      <div className="individual-guest-info">
        <Heading value={guestData.guestIndividual.roomType} />
        <input type="text" placeholder={guest.roomType} />
      </div>

      <div className="individual-guest-info">
        <Heading value={guestData.guestIndividual.stay} />
        <input type="text" placeholder={guest.stay} />
      </div>

      <div className="individual-guest-info">
        <Heading value={guestData.guestIndividual.discount} />
        <input type="text" placeholder={`${guest.discount}`} />
      </div>

      <button className="btn" onClick={onClose}>
        cancel
      </button>
    </div>
  );
};

export default GuestIndividual;
