import { useEffect, useState } from "react";
import "./App.css";
import icon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://omdbapi.com?apikey=e0f69a4d";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggledetails, setToggleDetails] = useState(false);
  const [chosen, setChosen] = useState({});
  var details;
  const handlerClick = (e) => {
    movies.map((movie) => {
      if (movie === e) {
        setChosen(movie);
        setToggleDetails(true);
      }
    });
  };

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("harry potter");
  }, []);

  return (
    <div className="app">
      <h1>MYCIMA</h1>
      <div className="search">
        <input
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <img
          src={icon}
          alt="image goes here"
          onClick={() => {
            searchMovies(searchTerm);
            setToggleDetails(false);
          }}
        />
      </div>
      {toggledetails && (
        <div className="chosen">
          <div className="chosen-img">
            <img src={chosen.Poster} />
          </div>
          <div className="chosen-container">
            <h1>{chosen.Title}</h1>
            <h2>
              {chosen.Type}, {chosen.Year}
            </h2>
            <h2>{chosen.imdbID}</h2>
          </div>
        </div>
      )}

      {movies?.length ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie1={movie} dd={handlerClick} />
          ))}
        </div>
      ) : (
        <div>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
