import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Options.scss";

import home from "../UI/Logos/home-svgrepo-com.svg";
import clock from "../UI/Logos/alarm-svgrepo-com.svg";
import community from "../UI/Logos/users-group-svgrepo-com.svg";
import discovery from "../UI/Logos/compass-svgrepo-com.svg";

const Options = () => {
  return (
    <div className="menu">
      <div className="menu__main">
        <p className="menu__main--title">Menu</p>
        <NavLink to={"home"} className="menu__mainoption">
          <img src={home} alt="home" style={{ width: "20px", fill: "red" }} />
          <p>Home</p>
        </NavLink>
        <NavLink to={"discovery"} end>
          <img
            src={discovery}
            alt="compass logo"
            style={{ width: "20px", fill: "red" }}
          />
          <p>Discovery</p>
        </NavLink>
        <NavLink to={"community"} className="menu__mainoption" end>
          <img
            src={community}
            alt="users"
            style={{ width: "20px", fill: "red" }}
          />
          <p>Community</p>
        </NavLink>
        <NavLink to={"coming-soon"} className="menu__mainoption" end>
          <img
            src={clock}
            alt="alarm clock"
            style={{ width: "20px", fill: "red" }}
          />
          <p>Coming Soon</p>
          <span>2</span>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Options;
