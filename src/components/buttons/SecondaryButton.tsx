import type { props } from "../../types/data";

const SecondaryButton = ({ value }: props) => {
  return <button className="btn secondary-btn">{value}</button>;
};

export default SecondaryButton;
