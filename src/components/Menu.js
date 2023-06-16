import React from "react";

import "./Menu.scss";
import { NavLink } from "react-router-dom";

import home from "../UI/Logos/home-svgrepo-com.svg";
import clock from "../UI/Logos/alarm-svgrepo-com.svg";
import community from "../UI/Logos/users-group-svgrepo-com.svg";
import discovery from "../UI/Logos/compass-svgrepo-com.svg";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__main">
        <p className="menu__main--title">Menu</p>
        <NavLink
          to={window.location.pathname + "/home"}
          className="menu__mainoption"
          end
        >
          <img src={home} style={{ width: "20px", fill: "red" }} />
          <p>Home</p>
        </NavLink>
        <NavLink
          to={window.location.pathname + "/home"}
          className="menu__mainoption"
          end
        >
          <img src={discovery} style={{ width: "20px", fill: "red" }} />
          <p>Discovery</p>
        </NavLink>
        <NavLink
          to={window.location.pathname + "/home"}
          className="menu__mainoption"
          end
        >
          <img src={community} style={{ width: "20px", fill: "red" }} />
          <p>Community</p>
        </NavLink>
        <NavLink
          to={window.location.pathname + "/home"}
          className="menu__mainoption"
          end
        >
          <img src={clock} style={{ width: "20px", fill: "red" }} />
          <p>Coming Soon</p>
          <span>2</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
