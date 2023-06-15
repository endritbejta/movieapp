import React from "react";
import "./Logos.scss";
import { Link } from "react-router-dom";

import netflix from "../UI/Logos/netflix-svgrepo-com.svg";
import appleTv from "../UI/Logos/appletv-svgrepo-com.svg";
import disney from "../UI/Logos/disneyplus-svgrepo-com.svg";
import hbomax from "../UI/Logos/hbo-max-svgrepo-com.svg";
import hulu from "../UI/Logos/hulu-svgrepo-com.svg";
// import plus from "../UI/Logos/plus-svgrepo-com.svg";

const Logos = () => {
  return (
    <div className="Logos">
      <div className="Company">
        <div className="Company__Logo">
          <a style={{ backgroundColor: "red" }} href="/">
            <img src={netflix} alt="netflix icon" />
          </a>
        </div>
        <div>
          <a href="hulu" style={{ backgroundColor: "green" }}>
            <img src={hulu} alt="hulu icon" />
          </a>
        </div>
        <div>
          <a href="appletvplus" style={{ backgroundColor: "#333" }}>
            <img style={{ height: "70%" }} src={appleTv} alt="appleTv icon" />
          </a>
        </div>
        <div>
          <a href="disney" style={{ backgroundColor: "navy" }}>
            <img
              style={{ width: "100%", height: "90%" }}
              src={disney}
              alt="disney icon"
            />
          </a>
        </div>
        <div>
          <a href="hbomax" style={{ backgroundColor: "blue" }}>
            <img
              style={{ width: "90%", height: "85%" }}
              src={hbomax}
              alt="hbomax icon"
            />
          </a>
        </div>
      </div>
      <hr style={{ width: "40px", margin: "20px 0" }} />
      <div className="add">
        {/* <img style={{ height: "80%" }} src={plus} alt="add" /> */}+
      </div>
    </div>
  );
};

export default Logos;
