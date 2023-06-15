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
          <Link style={{ backgroundColor: "red" }} to="/">
            <img src={netflix} alt="netflix icon" />
          </Link>
        </div>
        <div>
          <Link to="hulu" style={{ backgroundColor: "green" }}>
            <img src={hulu} alt="hulu icon" />
          </Link>
        </div>
        <div>
          <Link to="appletvplus" style={{ backgroundColor: "#333" }}>
            <img style={{ height: "70%" }} src={appleTv} alt="appleTv icon" />
          </Link>
        </div>
        <div>
          <Link to="disney" style={{ backgroundColor: "navy" }}>
            <img
              style={{ width: "100%", height: "90%" }}
              src={disney}
              alt="disney icon"
            />
          </Link>
        </div>
        <div>
          <Link to="hbomax" style={{ backgroundColor: "blue" }}>
            <img
              style={{ width: "90%", height: "85%" }}
              src={hbomax}
              alt="hbomax icon"
            />
          </Link>
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
