import React from "react";
import "./TopratedCard.scss";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const TopratedCard = ({ movie }) => {
  return (
    <div className="Toprated">
      <img src={IMG_PATH + movie.poster_path} alt="poster path" />
      <div className="content">
        <div className="rating">
          <i className="fa-solid fa-star"></i>
          <p>{movie.vote_average}</p>
        </div>
        <div className="info">
          <p className="title">{movie.title}</p>
          <p className="year">{movie.release_date.split("-")[0]}</p>
          <div className="watchnow">
            <span className="watch">Watch now</span>
            <span className="add">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopratedCard;
