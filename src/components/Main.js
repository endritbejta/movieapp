import React from "react";

import "./Main.scss";
import { Link, Outlet } from "react-router-dom";

import * as api from "../API generator/apis";
import Menu from "./Menu";
import Mainnavigation from "./Options";

const Main = () => {
  console.log("runnning");

  // const url = window.location.pathname.split("/")[1];
  return (
    <main className="main">
      <Mainnavigation />
    </main>
  );
};

export default Main;
