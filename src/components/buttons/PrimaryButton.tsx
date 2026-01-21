interface props {
  value: string;
}

const PrimaryButton = ({ value }: props) => {
  return <button className="btn primary-btn">{value}</button>;
};

export default PrimaryButton;
