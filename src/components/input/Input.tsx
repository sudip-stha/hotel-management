import type { InputAll } from "../../types/data";

const Input = ({ value }: InputAll) => {
  return (
    <div className="input-wrap">
      <img src={value.searchIcon} alt="This is a search icon." />
      <input type="text" placeholder={value.placeholder} />
    </div>
  );
};

export default Input;
