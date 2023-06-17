import React from "react";
import Categories from "../../components/categories";

import "./pages.scss";
import Options from "../../components/Options";

const Appletv = () => {
  return (
    <div>
      <Options />
      <Categories />
      <h1>AppleTvPlus</h1>
    </div>
  );
};

export default Appletv;
