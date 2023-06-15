import React from "react";

import classes from "./Main.module.css";
import Card3 from "../UI/Card3/Card3";

// const ArmyOftheDead = [
//   {
//     title: "Army of the Dead",
//     rating: "7.9",
//     year: "2021",
//     source:
//       "https://assets1.ignimgs.com/2021/05/15/aotd-blogroll-1621087561386_160w.jpeg?width=1280",
//   },
//   {
//     title: "Guardian of Galaxy vol. 3",
//     rating: "10",
//     year: "2023",
//     source:
//       "https://assets1.ignimgs.com/2021/05/15/aotd-blogroll-1621087561386_160w.jpeg?width=1280",
//   },
//   {
//     title: "Fara e flliqt",
//     rating: "6",
//     year: "2020",
//     source:
//       "https://assets1.ignimgs.com/2021/05/15/aotd-blogroll-1621087561386_160w.jpeg?width=1280",
//   },
// ];

const ArmyOftheDead = {
  title: "Army of the Dead",
  rating: "7.9",
  year: "2021",
  source:
    "https://assets1.ignimgs.com/2021/05/15/aotd-blogroll-1621087561386_160w.jpeg?width=1280",
};

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
      <main>
        <Card3 movie={ArmyOftheDead} />
      </main>
    </div>
  );
};

export default Main;
