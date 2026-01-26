import type { SecondaryBtnTypeWrap } from "../../types/data";

const SecondaryButton = ({ value }: SecondaryBtnTypeWrap) => {
  return (
    <button className="btn">
      {" "}
      {value.title} <img src={value.icon} alt="" />
    </button>
  );
};

export default SecondaryButton;
