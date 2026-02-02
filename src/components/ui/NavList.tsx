import { NavLink } from "react-router-dom";
import type { NavListing } from "../../types/data";

const NavList = ({ navList }: NavListing) => {
  return (
    <ul className="nav">
      {navList.map((data) => {
        return (
          <NavLink
            to={data.URL}
            key={data.URL}
            className={({ isActive }) =>
              isActive ? "nav-list-active" : "nav-list"
            }
          >
            <li>
              <img src={data.icon} alt="" className="icon-img" />
              <span>{data.label}</span>
            </li>
          </NavLink>
        );
      })}
    </ul>
  );
};

export default NavList;
