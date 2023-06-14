import React from "react";
import classes from "./Logos.module.css";

const Logos = () => {
  return (
    <div className={classes.Logos}>
      <div className={classes.Company}>
        <div style={{ backgroundColor: "red" }}>N</div>
        <div style={{ backgroundColor: "green" }}>N</div>
        <div style={{ backgroundColor: "gray" }}>N</div>
        <div style={{ backgroundColor: "blue" }}>N</div>
        <div style={{ backgroundColor: "purple" }}>N</div>
      </div>
      <div>+</div>
    </div>
  );
};

export default Logos;
