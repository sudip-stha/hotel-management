import type { SecondaryBtnTypeWrap } from "../../../types/data";

const Button = ({ value, btnAction }: SecondaryBtnTypeWrap) => {
  return (
    <button
      className={`btn ${btnAction.disabled && "disableActive"}`}
      onClick={() => btnAction.onClick(btnAction.action)}
    >
      {" "}
      <img src={value.icon} alt="" /> {value.title}
    </button>
  );
};

export default Button;
