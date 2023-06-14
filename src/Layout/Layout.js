import React from "react";
import classes from "./Layout.module.css";

import Logos from "../components/Logos";
import Menu from "../components/Menu";
import Main from "../components/Main";
import User from "../components/User";

const Layout = () => {
  return (
    <div className={classes.layout}>
      <Logos />
      <Menu />
      <Main />
      <User />
    </div>
  );
};

export default Layout;
