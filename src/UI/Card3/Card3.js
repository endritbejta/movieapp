import React from "react";
import "./Card3.scss";

const Card3 = ({ movie }) => {
  const movies = [];

  movie.forEach((movie) => {
    movies.push(
      <div className="Card3" key={movie.id}>
        <img src={movie.source} alt={movie.title} />
        <div className="Card3__movie">
          <div className="Card3__movieinfo">
            <p className="Card3__movieinfo--title">{movie.title}</p>
            <p className="Card3__movieinfo--year">{movie.year}</p>
            <div className="Card3__movieinfo--rating">
              <span className="Card3__movieinfo--rating-logo">IMDb</span>
              <p className="Card3__movieinfo--rating-score">
                {movie.rating} rating
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
  });

  return <div style={{ display: "flex", gap: "20px" }}>{movies}</div>;
};

export default Card3;
