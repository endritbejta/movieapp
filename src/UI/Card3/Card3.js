import React from "react";
import "./Card3.scss";

const Card3 = ({ movie }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className="Card3" key={movie.id}>
      <img src={IMG_PATH + movie.backdrop_path} alt={movie.title} />
      <div className="Card3__movie">
        <div className="Card3__movieinfo">
          <p className="Card3__movieinfo--title">{movie.title}</p>
          <p className="Card3__movieinfo--year">
            {movie.release_date.split("-")[0]}
          </p>
          <div className="Card3__movieinfo--rating">
            <span className="Card3__movieinfo--rating-logo">IMDb</span>
            <p className="Card3__movieinfo--rating-score">
              {movie.vote_average} rating
            </p>
          </div>
        </div>
        <div className="Card3__movieright">
          <p className="Card3__movieright--watch">Watch now</p>
          <p className="Card3__movieright--add">+</p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
