import type { NavListing } from "../types/data";
import asideData from "../data/aside";
import { Link } from "react-router-dom";

const NavList = ({ navList }: NavListing) => {
  return (
    <ul className="nav">
      {navList.map((data) => {
        return (
          <Link to={data.URL} key={data.URL} className="nav-list">
            <li>
              <img src={data.icon} alt="This is a icon." />
              <span>{data.label}</span>
            </li>
          </Link>
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
