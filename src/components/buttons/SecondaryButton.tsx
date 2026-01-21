import type { SecondaryBtnTypeWrap } from "../../types/data";

const SecondaryButton = ({ value }: SecondaryBtnTypeWrap) => {
  return (
    <button className="btn secondary-btn">
      {" "}
      <img src={value.icon} alt="" /> {value.title}
    </button>
  );
};

export default SecondaryButton;
