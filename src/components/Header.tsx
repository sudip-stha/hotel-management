import { header, input } from "../data/header";
import Input from "./ui/input/Input";

const Header = () => {

  
  function getInput() {}


  return (
    <header>
      <Input value={input} getInput={getInput} />
      <div className="profile-wrap">
        <img src={header.notificationIcon} alt="This is a notification icon." />
        <img src={header.profile} alt="This is a profile picture." />
      </div>
    </header>
  );
};

export default Header;
