import type { SecondaryBtnTypeWrap } from "../../types/data";

const Button = ({ value }: SecondaryBtnTypeWrap) => {
  return (
    <button className="btn">
      {" "}
      <img src={value.icon} alt="" /> {value.title}
    </button>
  );
};

export default Button;
