import { useState, type ChangeEvent, type FormEvent } from "react";
import { guestData } from "../../../data/guest";
import Heading from "../../ui/Heading";
import type { UpdateGuestType } from "../../../types/data";

const AddGuest = ({ updateGuest, totalGuest, onClose }: UpdateGuestType) => {
  const [guestId, setGuestId] = useState(totalGuest + 1);
  const [form, setForm] = useState({
    id: guestId,
    reservationId: 0,
    name: " ",
    roomNumber: " ",
    totalAmt: 0,
    amtPaid: 0,
    status: " ",
    checkInDate: "",
    guestPP: "",
    dotIcon: "/images/threeDot.svg",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  function handleChangeStatus(e: ChangeEvent<HTMLSelectElement>) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const addGuestId = guestId + 1;
    setGuestId(addGuestId);
    updateGuest(form);
    onClose();
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="individual-guest-card"
        onClick={(e) => e.stopPropagation()}
      >
        <input type="file" id="guestPP" accept="image/png" required />

        <div className="individual-guest-info">
          <Heading value={guestData.guestFormTitle.reservationId} />
          <input
            type="text"
            id="reservationId"
            placeholder={`Enter ${guestData.guestFormTitle.reservationId}`}
            pattern="[0-9]{4}"
            title="Required 4 digit number"
            onChange={handleChange}
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Required 4 digit number",
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            required
          />
        </div>

        <div className="individual-guest-info">
          <Heading value={guestData.guestFormTitle.name} />
          <input
            type="text"
            id="name"
            placeholder={`Enter ${guestData.guestFormTitle.name}`}
            pattern="[A-Za-z ]+"
            title="Only letter are allowed"
            minLength={1}
            maxLength={255}
            onChange={handleChange}
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Only letters are allowed",
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            required
          />
        </div>

        <div className="individual-guest-info">
          <Heading value={guestData.guestFormTitle.roomNumber} />
          <input
            type="text"
            id="roomNumber"
            placeholder={`Enter ${guestData.guestFormTitle.roomNumber}`}
            pattern="[A-Z]{1}[0-9]{3}"
            title="Only letters and numbers are allowed ( example: A345 )"
            onChange={handleChange}
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Only letters and numbers are allowed ( example: A345 )",
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            required
          />
        </div>

        <div className="individual-guest-info">
          <Heading value={guestData.guestFormTitle.totalAmt} />
          <input
            type="text"
            id="totalAmt"
            placeholder={`Enter ${guestData.guestFormTitle.totalAmt}`}
            pattern="[0-9]+"
            title="Only numbers are allowed"
            onChange={handleChange}
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Only numbers are allowed",
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            required
          />
        </div>

        <div className="individual-guest-info">
          <Heading value={guestData.guestFormTitle.amtPaid} />
          <input
            type="text"
            id="amtPaid"
            placeholder={`Enter ${guestData.guestFormTitle.amtPaid}`}
            pattern="[0-9]+"
            title="Only number are allowed"
            onChange={handleChange}
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Only numbers are allowed",
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            required
          />
        </div>

        <div className="individual-guest-info">
          <Heading value={guestData.guestFormTitle.checkInDate} />
          <input
            type="text"
            id="checkInDate"
            placeholder="Example: 20/12/23"
            pattern="([0-9]{1,2})/([0-9]{1,2})/[0-9]{2}"
            title="Match pattern: 20/12/23"
            onChange={handleChange}
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Match pattern: 20/12/23",
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            required
          />
        </div>

        <div className="individual-guest-info">
          <Heading value={guestData.guestFormTitle.status} />
          <select id="status" onChange={handleChangeStatus} required>
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
