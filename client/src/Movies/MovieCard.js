import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then((response) => {
          setMovies(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <div className="movie-card">
            <h2>{movie.title}</h2>
            <div className="movie-director">
              Director: <em>{movie.director}</em>
            </div>
            <div className="movie-metascore">
              Metascore: <strong>{movie.metascore}</strong>
            </div>
            <h3>Actors</h3>

            {movie.stars.map((star) => (
              <div key={star} className="movie-star">
                {movie.star}
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieCard;
