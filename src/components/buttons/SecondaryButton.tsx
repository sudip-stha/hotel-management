
interface prop{
    value:string;
}
const SecondaryButton = ({value}:prop) => {
  return <button className="btn secondary-btn">{value}</button>
}

export default SecondaryButton
