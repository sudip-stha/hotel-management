import type {  InputAll } from "../../../types/data";

const Input = ({ getInput, value }: InputAll) => {
  return (
    <div className="input-wrap">
      <img src={value.searchIcon} alt="This is a search icon." />
      <input
        type="text"
        placeholder={value.placeholder}
        onChange={(e) => getInput(e.target.value)}
      />
    </div>
  );
};

export default Input;
