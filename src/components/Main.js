import React from "react";

import classes from "./Main.module.css";
import Card3 from "../UI/Card3/Card3";
import { Outlet } from "react-router-dom";

const ArmyOftheDead = [
  {
    id: 1,
    title: "Army of the Dead",
    rating: "7.9",
    year: "2021",
    source:
      "https://assets1.ignimgs.com/2021/05/15/aotd-blogroll-1621087561386_160w.jpeg?width=1280",
  },
  // {
  //   id: 2,
  //   title: "Guardian of Galaxy vol. 3",
  //   rating: "10",
  //   year: "2023",
  //   source:
  //     "https://assets.telegraphindia.com/telegraph/2023/May/1683173444_guardians.jpg",
  // },
  // {
  //   id: 3,
  //   title: "Fara e flliqt",
  //   rating: "6",
  //   year: "2020",
  //   source: "https://gazetainfokus.com/wp-content/uploads/2020/03/IMG_0200.jpg",
  // },
  // {
  //   id: 4,
  //   title: "Fara e flliqt",
  //   rating: "6",
  //   year: "2020",
  //   source: "https://gazetainfokus.com/wp-content/uploads/2020/03/IMG_0200.jpg",
  // },
];

const Main = () => {
  return (
    <div className={classes.Main}>
      <nav>
        <ul>
          <li>Movies</li>
          <li>Series</li>
          <li>TV Shows</li>
        </ul>
      </nav>
      <main style={{ width: "100" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
