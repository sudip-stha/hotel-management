import { buttonValue, tableData, input } from "../../data/guest";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Input from "../input/Input";

const IdListing=()=>{
  return(
    <div className="id-col">
      
    </div>
  )
}

const Guest = () => {
  return (
    <div className="container">
      <h6>{tableData.title}</h6>
      <div>
        <PrimaryButton value={buttonValue.btn1} />
        <PrimaryButton value={buttonValue.btn2} />
        <SecondaryButton value={buttonValue.btn3} />
        <Input value={input} />
      </div>

      <div className="table-container">
      </div>
    </div>
  );
};

export default Guest;
