import type { PrimaryBtnType } from "../../../types/data";

const PrimaryButton = ({ value, isActive, onClick }: PrimaryBtnType) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`btn primary-btn ${isActive ? "active-btn" : ""}`}
      >
        {value}
      </button>
    </>
  );
};

export default PrimaryButton;
