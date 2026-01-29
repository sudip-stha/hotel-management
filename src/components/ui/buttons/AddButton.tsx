import type { SecondaryBtnTypeWrap } from "../../../types/data";

const AddButton = ({ value }: SecondaryBtnTypeWrap) => {
  return <button className="btn add-btn">{value.title}</button>;
};

export default AddButton;
