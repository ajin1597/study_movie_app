import axios from "axios";
import React, { useEffect, useState } from "react";
import MoviesAPI from "./MoviesAPI";

function Movies(props) {
  console.log(props);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  async function getMovieAPI() {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    if (!props.apiPath) return;
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${props.apiPath}?api_key=bb2fc28576857cba9e37eb36ae858d15&language=ko&page=1&region=kr`
    );
    setMovies(result.data.results);
  }

  useEffect(
    function () {
      getMovieAPI();
    },
    [props.apiPath]
  );

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

export default Movies;
