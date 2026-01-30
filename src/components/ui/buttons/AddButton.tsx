import type { AddBtnTypeWrap } from "../../../types/data";

const AddButton = ({ value, onClickAddBtn }: AddBtnTypeWrap) => {
  return (
    <button className="btn add-btn" onClick={onClickAddBtn}>
      {value.title}
    </button>
  );
};

export default AddButton;
