import React from "react";
import { Link, NavLink } from "react-router-dom";

const SavedList = (props) => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie) => (
      <NavLink key={movie.id} to={`/movies/${movie.id}`}>
        <span key={movie.id} className="saved-movie">
          {movie.title}
        </span>
      </NavLink>
    ))}
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
