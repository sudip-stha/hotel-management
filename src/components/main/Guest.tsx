import {
  buttonValue,
  tableData,
  input,
  btn3,
  btn4,
  btn5,
} from "../../data/guest";
import type {
  NumberListType,
  StringListType,
  StringType,
} from "../../types/data";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Input from "../input/Input";

const Heading = ({ value }: StringType) => {
  return <h6>{value}</h6>;
};

const IdListing = ({ item }: NumberListType) => {
  return (
    <div className="value-container">
      {" "}
      {item.map((data, index) => {
        return <span key={index}># {data}</span>;
      })}
    </div>
  );
};

const TextListing = ({ item }: StringListType) => {
  return (
    <div className="value-container">
      {item.map((data, index) => {
        return <span key={index}>{data}</span>;
      })}
    </div>
  );
};

const AmtListing = ({ item }: NumberListType) => {
  return (
    <div className="value-container">
      {item.map((data, index) => {
        return <span key={index}>$ {data}</span>;
      })}
    </div>
  );
};

const PaginationList = ({ item }: NumberListType) => {
  return (
    <ul className="page-col">
      {item.map((data, index) => {
        return <li key={index}>{data}</li>;
      })}
    </ul>
  );
};

const Guest = () => {
  return (
    <div className="container">
      <Heading value={tableData.title} />
      <div className="guest-btns-container">
        <div className="guest-btns">
          <PrimaryButton value={buttonValue.btn1} />
          <PrimaryButton value={buttonValue.btn2} />
        </div>
        <div className="guest-btns guest-right-btn">
          <SecondaryButton value={btn3} />
          <Input value={input} />
        </div>
      </div>

      <div className="table-container">
        <div className="id-col">
          <Heading value={tableData.idTitle} />
          <IdListing item={tableData.idValue} />
        </div>

        <div className="col">
          <Heading value={tableData.nameTitle} />
          <TextListing item={tableData.nameValue} />
        </div>

        <div className="col">
          <Heading value={tableData.roomTitle} />
          <TextListing item={tableData.roomNumber} />
        </div>

        <div className="col">
          <Heading value={tableData.amtTitle} />
          <AmtListing item={tableData.amtValue} />
        </div>

        <div className="col">
          <Heading value={tableData.amtPaidTitle} />
          <AmtListing item={tableData.amtPaidValue} />
        </div>
        <div className="col">
          <Heading value={tableData.statusTitle} />
          <TextListing item={tableData.statusValue} />
        </div>
      </div>

      <SecondaryButton value={btn5} />
      <PaginationList item={tableData.Pagination} />
      <SecondaryButton value={btn4} />
    </div>
  );
};

export default Guest;
