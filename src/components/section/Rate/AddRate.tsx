import Heading_6 from "../../ui/heading/Headin_6";
import { rateData } from "../../../data/rate";
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { UpdateRateType } from "../../../types/data";

const AddRate = ({ updateRate, onClose }: UpdateRateType) => {
  const [form, setForm] = useState({
    roomType: "",
    deals: "",
    cancellationPolicy: "",
    dealPrice: 0,
    rate: 0,
    availability: "5 rooms",
    dotIcon: "/images/threeDot.svg",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateRate(form);
    onClose();
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="individual-card"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="individual-info">
          <Heading_6 value={rateData.tableTitle[0]} />
          <input
            type="text"
            id="roomType"
            placeholder={`Enter ${rateData.tableTitle[0]} `}
            pattern="[A-Za-z]+"
            title="Only letters allowed"
            onInput={(e) =>
              (e.target as unknown as HTMLInputElement).setCustomValidity("")
            }
            onChange={handleChange}
            required
          />
        </div>

        <div className="individual-info">
          <Heading_6 value={rateData.tableTitle[1]} />
          <input
            type="text"
            id="deals"
            placeholder={`Enter ${rateData.tableTitle[1]} `}
            pattern="[A-Za-z]+"
            title="Only letters allowed"
            onInput={(e) =>
              (e.target as unknown as HTMLInputElement).setCustomValidity("")
            }
            onChange={handleChange}
            required
          />
        </div>

        <div className="individual-info">
          <Heading_6 value={rateData.tableTitle[2]} />
          <input
            type="text"
            id="cancellationPolicy"
            placeholder={`Enter ${rateData.tableTitle[2]} `}
            pattern="[A-Za-z]+"
            title="Only letters allowed"
            onInput={(e) =>
              (e.target as unknown as HTMLInputElement).setCustomValidity("")
            }
            onChange={handleChange}
            required
          />
        </div>

        <div className="individual-info">
          <Heading_6 value={rateData.tableTitle[3]} />
          <input
            type="number"
            id="dealPrice"
            placeholder={`Enter ${rateData.tableTitle[3]} `}
            onInput={(e) =>
              (e.target as unknown as HTMLInputElement).setCustomValidity("")
            }
            onChange={handleChange}
            required
          />
        </div>

        <div className="individual-info">
          <Heading_6 value={rateData.tableTitle[4]} />
          <input
            type="number"
            id="rate"
            placeholder={`Enter ${rateData.tableTitle[4]} `}
            onInput={(e) =>
              (e.target as unknown as HTMLInputElement).setCustomValidity("")
            }
            onChange={handleChange}
            required
          />
        </div>

        <div className="btns-container">
          <button type="submit" className="btn" onClick={() => onClose()}>
            Cancel
          </button>

          <button type="submit" className="btn add-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRate;
