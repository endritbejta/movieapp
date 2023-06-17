import React from "react";
import Categories from "../../components/categories";
import Options from "../../components/Options";

import "./pages.scss";

const Hulu = () => {
  return (
    <div>
      <Options />
      <Categories />
      <h1>AppleTvPlus</h1>
    </div>
  );
};

export default Hulu;
