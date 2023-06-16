import React from "react";

import "./Main.scss";
import Card3 from "../UI/Card3/Card3";
import { Link, Outlet } from "react-router-dom";

import * as api from "../API generator/apis";

const Main = () => {
  console.log(api);
  return (
    <div className="Main">
      <nav>
        <ul>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>
            <Link to="/tv-shows">TV-Shows</Link>
          </li>
        </ul>
      </nav>
      <main style={{ width: "100" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
