import React from "react";
import "./categories.scss";
import { NavLink, Outlet } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <nav>
        <ul>
          <li>
            <NavLink to={`movies`} end>
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to={"series"} end>
              Series
            </NavLink>
          </li>
          <li>
            <NavLink to={"tv-shows"} end>
              TV-Shows
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Categories;
