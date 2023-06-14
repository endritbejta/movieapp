import React from "react";

import classes from "./Main.module.css";

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
      <main>Content</main>
    </div>
  );
};

export default Main;
