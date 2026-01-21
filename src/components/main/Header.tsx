import { header, input } from "../../data/header";
import Input from "../input/Input";

const Header = () => {
  return (
    <header>
      <Input value={input} />
      <div className="profile-wrap">
        <img src={header.notificationIcon} alt="This is a notification icon." />
        <img src={header.profile} alt="This is a profile picture." />
      </div>
    </header>
  );
};

export default Header;
