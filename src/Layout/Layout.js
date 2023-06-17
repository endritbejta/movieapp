import React from "react";
import "./Layout.scss";

import MainNav from "../components/MainNav";
import User from "../components/User";
import Options from "../components/Options";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <MainNav />
      <Outlet />
      <User />
    </div>
  );
};

export default Layout;
