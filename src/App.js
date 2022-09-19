import axios from "axios";
import React, { useEffect, useState } from "react";
import MoviesAPI from "./components/MoviesAPI";
import "./App.css";

function App(props) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  async function getMovieAPI() {
    if (0 < movies.length) return;
    const result = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=bb2fc28576857cba9e37eb36ae858d15&language=ko"
    );
    console.log(result.data.results);
    setMovies(result.data.results);
  }

  useEffect(function () {
    getMovieAPI();
  }, []);

  setTimeout(function () {
    setLoading(false);
  }, 500);

  return (
    <>
      {loading ? (
        <div>로딩중</div>
      ) : (
        <>
          {movies.map(function (ele, idx) {
            return (
              <MoviesAPI
                key={ele.id}
                id={ele.id}
                title={ele.title}
                backdrop_path={ele.backdrop_path}
                overview={ele.overview}
                vote_average={ele.vote_average}
                adult={ele.adult}
                original_language={ele.original_language}
                release_date={ele.release_date}
              />
            );
          })}
        </>
      )}
    </>
  );
}

export default App;
