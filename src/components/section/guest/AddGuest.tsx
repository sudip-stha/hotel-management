import { guestData } from "../../../data/guest";
import Heading from "../../ui/Heading";

const AddGuest = () => {
  function handleSubmit() {}
  return (
    <div>
      <form
        action={handleSubmit}
        className="individual-guest-card"
        onClick={(e) => e.stopPropagation()}
      >
        <input type="file" name="profilePicture" accept="image/png" required />

        <div className="individual-guest-info">
          <Heading value={guestData.guestFormTitle.reservationId} />
          <input
            type="text"
            name={guestData.guestFormTitle.reservationId}
            placeholder={`Enter ${guestData.guestFormTitle.reservationId}`}
            pattern="[0-9]{4}"
            title="Required 4 digit number"
            required
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Required 4 digit number",
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
          />
        </div>

        <div className="individual-guest-info">
          <Heading value={guestData.guestFormTitle.name} />
          <input
            type="text"
            name={guestData.guestFormTitle.name}
            placeholder={`Enter ${guestData.guestFormTitle.name}`}
            pattern="[A-Za-z ]+"
            title="Only letter are allowed"
            min={1}
            max={255}
            required
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Only letters are allowed",
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
          />
        </div>

        <div className="individual-guest-info">
          <Heading value={guestData.guestFormTitle.roomNumber} />
          <input
            type="text"
            name={guestData.guestFormTitle.roomNumber}
            placeholder={`Enter ${guestData.guestFormTitle.roomNumber}`}
            pattern="[A-Z]{1}[0-9]{3}"
            title="Only letters and numbers are allowed ( example: A345 )"
            required
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Only letters and numbers are allowed ( example: A345 )",
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
          />
        </div>

        <div className="individual-guest-info">
          <Heading value={guestData.guestFormTitle.totalAmt} />
          <input
            type="text"
            name={guestData.guestFormTitle.totalAmt}
            placeholder={`Enter ${guestData.guestFormTitle.totalAmt}`}
            pattern="[0-9]+"
            title="Only numbers are allowed"
            required
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Only numbers are allowed",
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
          />
        </div>

        <div className="individual-guest-info">
          <Heading value={guestData.guestFormTitle.amtPaid} />
          <input
            type="text"
            name={guestData.guestFormTitle.amtPaid}
            placeholder={`Enter ${guestData.guestFormTitle.amtPaid}`}
            pattern="[0-9]+"
            title="Only number are allowed"
            required
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Only numbers are allowed",
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
          />
        </div>

        <div className="individual-guest-info">
          <Heading value={guestData.guestFormTitle.status} />
          <select name={guestData.guestFormTitle.status} required>
            <option value="">status</option>
            <option value="Clean">Clean</option>
            <option value="Dirty">Dirty</option>
            <option value="Pick up">Pick up</option>
            <option value="Inspected">Inspected</option>
          </select>
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddGuest;
