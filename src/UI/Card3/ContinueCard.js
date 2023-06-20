import React from "react";
import "./ContinueCard.scss";
import playbutton from "../../UI/Logos/triangle-filled-svgrepo-com.svg";

const ContinueCard = ({ movie }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className="card">
      <img
        className="background"
        src={IMG_PATH + movie.backdrop_path}
        alt="poster of movie"
      />
      <div className="card__play">
        <img className="img" src={playbutton} alt="play button" />
      </div>
      <div className="card__info">
        <p
          style={{ fontWeight: "400", fontSize: "16px", marginBottom: "5px" }}
          className="title"
        >
          {movie.title}
        </p>
        <p
          style={{ fontWeight: "100", fontSize: "13px", marginBottom: "3px" }}
          className="year"
        >
          {movie.release_date.split("-")[0]}
        </p>
        <div className="play-tracker">
          <span className="start">32:25</span>
          <div className="holder">
            <span className="back"></span>
            <span
              style={{ width: `${Math.floor(Math.random() * 100 + 1)}px` }}
              className="watched"
            ></span>
          </div>
          <span className="end">1:25:32</span>
        </div>
      </div>
    </div>
  );
};

export default ContinueCard;
