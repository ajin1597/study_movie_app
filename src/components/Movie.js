import React from "react";
import PropTypes, { string } from "prop-types";

function Movie(props) {
  //console.log(typeof props.price);
  return (
    <>
      <hr></hr>
      <div>영화이름 : {props.movieName}</div>
      <div>주연배우 : {props.actor}</div>
      <div>장르 : {props.genre}</div>
      <div>
        상영시간 :{" "}
        {props.time
          ? props.time
              .filter(function (ele) {
                return typeof ele === "string" ? true : false;
              })
              .join(", ")
          : "상영정보없음"}
      </div>
      <div>티켓가격: {props.price ? props.price + 500 : "가격미지정"}</div>
    </>
  );
}

Movie.propTypes = {
  movieName: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  time: PropTypes.array,
  price: PropTypes.number,
};

export default Movie;
