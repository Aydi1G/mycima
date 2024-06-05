import React, { useState } from "react";
import "./App.css";

const MovieCard = ({ movie1, dd }) => {
  const [tog, setTog] = useState(false);
  return (
    <>
      <div
        className="movie"
        onClick={(Event) => {
          dd(movie1);
        }}
      >
        <div>
          <p>{movie1.Year}</p>
        </div>
        <div>
          <img
            src={
              movie1.Poster !== "N/A"
                ? movie1.Poster
                : "https://via.placeholder.com/400"
            }
          />
        </div>
        <div>
          <span>{movie1.Type}</span>
          <h2>{movie1.Title}</h2>
        </div>
      </div>
      {tog && <h1>yes its working</h1>}
    </>
  );
};

export default MovieCard;
