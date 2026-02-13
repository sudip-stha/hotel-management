import type { UpdateRoomType } from "../../../types/data";
import { roomData } from "../../../data/room";
import Heading_6 from "../../ui/heading/Headin_6";

const AddRoom = ({ updateRoom }: UpdateRoomType) => {
  return (
    <div>
      <form
        onSubmit={updateRoom}
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
                "Required 3 digit number",
              )
            }
            required
          />
        </div>

        <div className="individual-info">
          <Heading_6 value={roomData.tableTitle[1]} />
          <select id="bedType" required>
            <option value="">Bed Type</option>
            <option value="Single">Single Bed</option>
            <option value="Double">Double</option>
            <option value="VIP">VIP</option>
          </select>
        </div>

        <div className="individual-info">
          <Heading_6 value={roomData.tableTitle[2]} />
          <select id="status" required>
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
            id="roomNumber"
            placeholder={`Enter ${roomData.tableTitle[3]} `}
            required
          />
        </div>

        <div className="individual-info">
          <Heading_6 value={roomData.tableTitle[4]} />
          <select id="status" required>
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
