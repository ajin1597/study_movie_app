import React from "react";
import Movie from "./Movie";

const movies = [
  {
    id: 1,
    영화명: "탑건",
    주연배우: "톰크루즈",
    장르: "비행",
    상영시간: ["10.00", "12.00", "15.00", { time: "1234" }],
    티켓가격: 15000,
  },
  {
    id: 2,
    영화명: "수리남",
    주연배우: "황정민",
    장르: "마약",
    //티켓가격: 15000,
  },
  {
    id: 3,
    영화명: "스파이더맨",
    주연배우: "톰홀렌드",
    장르: "액션",
    상영시간: ["10.30", "12.30", "15.30"],
    티켓가격: 14000,
  },
];

function Movies() {
  return (
    <>
      <h1>강석원 - 영화앱</h1>
      {movies.map(function (movie) {
        return (
          <div key={movie.id}>
            <Movie
              movieName={movie.영화명}
              actor={movie.주연배우}
              genre={movie.장르}
              time={movie.상영시간}
              price={movie.티켓가격}
            />

            <hr />
          </div>
        );
      })}
      <Movie
        movieName={"어린신부"}
        actor={"문근영"}
        genre={"드라마"}
        time={[]}
        price={5000}
      />
      <hr />
      <Movie
        movieName={"늙은신부"}
        actor={"문근영"}
        genre={"드라마"}
        time={[]}
        price={5000}
      />
    </>
  );
}

export default Movies;
