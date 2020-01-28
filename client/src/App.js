import React, { useState } from "react";
import SavedList from "./Movies/SavedList";
import { Route } from "react-router-dom";
// import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieCard from "./Movies/MovieCard";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/">
        <MovieCard />
      </Route>
      <Route path="/movies/:movieID">
        <Movie addToSavedList={addToSavedList} />
      </Route>
    </div>
  );
};

export default App;
