import type { StringListType } from "../../types/data";

const RoomTableHead = ({ item }: StringListType) => {
  return (
    <div className="table-head room-table-head">
      {item.map((value) => {
        return <h6 key={value}>{value}</h6>;
      })}
    </div>
  );
};

export default RoomTableHead;
