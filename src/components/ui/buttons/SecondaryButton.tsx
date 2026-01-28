import type { SecondaryBtnTypeWrap } from "../../../types/data";

const SecondaryButton = ({ value, btnAction }: SecondaryBtnTypeWrap) => {
  return (
    <button
      className={`btn ${btnAction.disabled && "disableActive"}`}
      onClick={() => btnAction.onClick(btnAction.action)}
    >
      {" "}
      {value.title} <img src={value.icon} alt="" />
    </button>
  );
};

export default SecondaryButton;
