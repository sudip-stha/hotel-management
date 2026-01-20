import headerData from "../../data/header";

const Header = () => {
  return (
    <header>
      <div className="input-wrap">
        <img src={headerData.searchIcon} alt="This is a search icon." />
        <input type="text" placeholder={headerData.placeholder} />
      </div>
      <div className="profile-wrap">
        <img src={headerData.notificationIcon} alt="This is a notification icon." />
        <img src={headerData.profile} alt="This is a profile picture." />
      </div>
    </header>
  );
};

export default Header;
