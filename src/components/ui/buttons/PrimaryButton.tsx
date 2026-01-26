import type { StringType } from "../../types/data";

const PrimaryButton = ({ value }: StringType) => {
  return <button className="btn primary-btn">{value}</button>;
};

export default PrimaryButton;
