import "./Movielist.scss";
import Card3 from "../UI/Card3/Card3";
import React from "react";
import ContinueCard from "../UI/Card3/ContinueCard";
import TopratedCard from "../UI/Card3/TopratedCard";

const Movielist = ({ type, data, sectionName }) => {
  return (
    <div>
      <div className="section">
        <p>{sectionName}</p>
        <a href="#">See all &gt;</a>
      </div>
      <div className="sectionMovies">
        {data.results.map((movie) => {
          if (type === "TRENDING") {
            return <Card3 movie={movie} key={movie.id} />;
          }
          if (type === "CONTINUE") {
            return <ContinueCard movie={movie} key={movie.id} />;
          }

          if (type === "TOP_RATED") {
            return <TopratedCard movie={movie} key={movie.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default Movielist;
