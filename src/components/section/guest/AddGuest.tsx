import { useState, type ChangeEvent, type FormEvent } from "react";
import { guestData } from "../../../data/guest";
import Heading from "../../ui/heading/Headin_6";
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

  //validate the check in date
  function checkValidity(e: ChangeEvent<HTMLInputElement>) {
    const inputDate = e.target.value;

    const splitDate = inputDate.split("/");

    const day = parseInt(splitDate[0], 10);
    const month = parseInt(splitDate[1], 10) - 1;
    const year = 2000 + parseInt(splitDate[2], 10);

    const integerInputDate = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (integerInputDate < today) {
      e.target.setCustomValidity("You cannot enter a past date.");
    } else {
      e.target.setCustomValidity("");
    }
  }

  //handle image upload for profile picture and other user input
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let imgName;
    if (e.target.id === "guestPP") {
      imgName = e.target.files![0];

      const imageUrl = URL.createObjectURL(imgName);

      setForm({
        ...form,
        guestPP: imageUrl,
      });
      return; //stop fakepath from being saved
    }
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  //handle the guest status input
  function handleChangeStatus(e: ChangeEvent<HTMLSelectElement>) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  //handle the form submission
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setGuestId((prev) => prev + 1);
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
        <input
          type="file"
          id="guestPP"
          name="image"
          accept="image/png"
          onChange={handleChange}
          required
        />

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
            title="Match pattern: 2/2/26"
            onChange={handleChange}
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Match pattern: 2/2/26 and You cannot enter a past date.",
              )
            }
            onInput={checkValidity}
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
