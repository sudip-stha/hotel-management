import type { AddBtnTypeWrap } from "../../../types/data";

const AddButton = ({ value, onClickAddBtn }: AddBtnTypeWrap) => {
  return (
    <button
      className="btn add-btn front-desk-check-btn"
      onClick={onClickAddBtn}
    >
      {value.title}
    </button>
  );
};

export default AddButton;
