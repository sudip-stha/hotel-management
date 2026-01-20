import type { NavListing } from "../types/data";
import asideData from "../data/aside";

const NavList = ({ navList }: NavListing) => {
  return (
    <ul className="nav">
      {navList.map((data) => {
        return (
          <li key={data.URL}>
            <span>
              <img src={data.icon} alt="This is a icon." />
            </span>
            <span>{data.label}</span>
          </li>
        );
      })}
    </ul>
  );
};

const Aside = () => {
  return (
    <aside>
      <div className="logo">
        <img src={asideData.logo} alt="This is a logo." />
        <h1>{asideData.title}</h1>
      </div>
      <NavList navList={asideData.navList} />
    </aside>
  );
};

export default Aside;
