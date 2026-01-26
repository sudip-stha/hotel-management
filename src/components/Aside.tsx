import NavList from "./NavList";
import asideData from "../data/aside";

const Aside = () => {
  return (
    <aside>
      <div className="logo">
        <img src={asideData.logo} alt="" />
        <h1>{asideData.title}</h1>
      </div>
      <NavList navList={asideData.navList} />
    </aside>
  );
};

export default Aside;
