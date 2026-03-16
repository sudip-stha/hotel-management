import type { UpdateRoomType } from "../../../types/data";
import { roomData } from "../../../data/room";
import Heading_6 from "../../ui/heading/Headin_6";
import { useState, type ChangeEvent, type FormEvent } from "react";

const AddRoom = ({ updateRoom, actualTableData, onClose }: UpdateRoomType) => {
  const [form, setForm] = useState({
    roomNumber: "",
    bedType: "",
    roomFloor: "",
    roomFacility: "",
    status: "",
    dotIcon: "/images/threeDot.svg",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.id === "roomNumber") {
      actualTableData.map((roomNum) => {
        if (e.target.value == roomNum.roomNumber) {
          e.target.setCustomValidity("Room number already exist.");
        }
      });
    }
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  function handleChangeSelect(e: ChangeEvent<HTMLSelectElement>) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateRoom(form);
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
          <Heading_6 value={roomData.tableTitle[0]} />
          <input
            type="text"
            id="roomNumber"
            placeholder={`Enter ${roomData.tableTitle[0]} `}
            pattern="[0-9]{3}"
            title="Required 3 digit number"
            onInvalid={(e) =>
              (e.target as unknown as HTMLInputElement).setCustomValidity(
                "Required 3 digit number and unique room number",
              )
            }
            onInput={(e) =>
              (e.target as unknown as HTMLInputElement).setCustomValidity("")
            }
            onChange={handleChange}
            required
          />
        </div>

        <div className="individual-info">
          <Heading_6 value={roomData.tableTitle[1]} />
          <select id="bedType" onChange={handleChangeSelect} required>
            <option value="">Bed Type</option>
            <option value="Single">Single Bed</option>
            <option value="Double">Double</option>
            <option value="VIP">VIP</option>
          </select>
        </div>

        <div className="individual-info">
          <Heading_6 value={roomData.tableTitle[2]} />
          <select id="roomFloor" onChange={handleChangeSelect} required>
            <option value="">Room Floor</option>
            <option value="Floor-1">Floor - 1</option>
            <option value="Floor-2">Floor - 2</option>
            <option value="Floor-3">Floor - 3</option>
            <option value="Floor-4">Floor - 4</option>
            <option value="Floor-5">Floor - 5</option>
          </select>
        </div>

        <div className="individual-info">
          <Heading_6 value={roomData.tableTitle[3]} />
          <input
            type="text"
            id="roomFacility"
            placeholder={`Enter ${roomData.tableTitle[3]} `}
            onInput={(e) =>
              (e.target as unknown as HTMLInputElement).setCustomValidity("")
            }
            onChange={handleChange}
            required
          />
        </div>

        <div className="individual-info">
          <Heading_6 value={roomData.tableTitle[4]} />
          <select id="status" onChange={handleChangeSelect} required>
            <option value="">Status</option>
            <option value="Available">Available</option>
            <option value="Booked">Booked</option>
            <option value="Reserved">Reserved</option>
            <option value="Waitlist">Waitlist</option>
            <option value="Blocked">Blocked</option>
          </select>
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
