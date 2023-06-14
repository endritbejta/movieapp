import React from "react";
import classes from "./Logos.module.css";

import netflix from "../UI/Logos/netflix-svgrepo-com.svg";
import appleTv from "../UI/Logos/appletv-svgrepo-com.svg";
import disney from "../UI/Logos/disneyplus-svgrepo-com.svg";
import hbomax from "../UI/Logos/hbo-max-svgrepo-com.svg";
import hulu from "../UI/Logos/hulu-svgrepo-com.svg";
// import plus from "../UI/Logos/plus-svgrepo-com.svg";

const Logos = () => {
  return (
    <div className={classes.Logos}>
      <div className={classes.Company}>
        <div>
          <span style={{ backgroundColor: "red" }}>
            <img src={netflix} alt="netflix icon" />
          </span>
        </div>
        <div>
          <span style={{ backgroundColor: "green" }}>
            <img src={hulu} alt="hulu icon" />
          </span>
        </div>
        <div>
          <span style={{ backgroundColor: "#333" }}>
            <img style={{ height: "70%" }} src={appleTv} alt="appleTv icon" />
          </span>
        </div>
        <div>
          <span style={{ backgroundColor: "navy" }}>
            <img
              style={{ width: "100%", height: "90%" }}
              src={disney}
              alt="disney icon"
            />
          </span>
        </div>
        <div>
          <span style={{ backgroundColor: "blue" }}>
            <img
              style={{ width: "90%", height: "85%" }}
              src={hbomax}
              alt="hbomax icon"
            />
          </span>
        </div>
      </div>
      <hr style={{ width: "40px", margin: "20px 0" }} />
      <div className={classes.add}>
        {/* <img style={{ height: "80%" }} src={plus} alt="add" /> */}+
      </div>
    </div>
  );
};

export default Logos;
