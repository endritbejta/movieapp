import React from "react";
import "./categories.scss";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <nav>
        <ul>
          <li>
            <NavLink
              to={window.location.pathname + `/movies`}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to={window.location.pathname + "/series"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Series
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to={window.location.pathname + "/tv-shows"}
              end
            >
              TV-Shows
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Categories;
