import React from "react";
import { useActionData } from "react-router-dom";
const NetflixTv = () => {
  const data = useActionData();

  return <div>NetflixTv tv shows content here</div>;
};

export default NetflixTv;
