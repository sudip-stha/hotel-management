import type { StringListType } from "../../types/data";

const TableHead = ({ item }: StringListType) => {
  return (
    <div className="table-head">
      {item.map((value) => {
        return (
          <h6 key={value}>
            {value}
          </h6>
        );
      })}
    </div>
  );
};

export default TableHead;
