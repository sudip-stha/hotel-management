import type { FilterButtonType } from "../../../types/data";

const FilterButton = ({ value, handleFilterChange }: FilterButtonType) => {
  return (
    <div>
      <select
        name="filter-status"
        id="filter-status"
        className="btn"
        onChange={handleFilterChange}
      >
        <option value="">{value.title}</option>
        <option value="Clean"> Clean</option>
        <option value="Dirty"> Dirty</option>
        <option value="Pick up">Pick up</option>
        <option value="Inspected"> Inspected</option>
      </select>
    </div>
  );
};

export default FilterButton;
