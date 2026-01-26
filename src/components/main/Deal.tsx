import Heading from "./Heading";
import { dealData } from "../../data/deal";
import Button from "../buttons/Button";
import PrimaryButton from "../buttons/PrimaryButton";
import AddButton from "../buttons/AddButton";

const Deal = () => {
  return (
    <div className="container">
      <Heading value={dealData.title} />
      <div className="guest-btns-container">
        <div className="guest-btns">
          <PrimaryButton value={dealData.buttonValue.btn1} />
          <PrimaryButton value={dealData.buttonValue.btn2} />
        </div>
        <div className="guest-btns guest-right-btn">
          <AddButton value={dealData.btn4} />
          <Button value={dealData.btn3} />
        </div>
      </div>
    </div>
  );
};

export default Deal;
