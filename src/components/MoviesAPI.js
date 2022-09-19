import PropTypes from "prop-types";
import "./MoviesAPI.css";

function MoviesAPI(props) {
  return (
    <div>
      <h3 className="movie__data">
        <div className="movie__poster">
          <img
            className="movie__poster_img"
            src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`}
            style={{ maxWidth: "50vh" }}
          ></img>
          <div className="movie__adult"> {!props.adult ? "19+" : null}</div>
        </div>
        <div className="movie__title"> 영화 제목 : {props.title}</div>
        <div className="movie__overview">{props.overview.slice(0, 100)}...</div>
        <div className="movie__vote_average">
          {
            // {props.vote_average} / 10} {" "} {Array(Number(props.vote_average.toFixed(0)))}
            props.vote_average
          }
        </div>
        <div className="movie__lang"> {props.original_language}</div>
        <div className="movie__date movie__info"> {props.release_date}</div>
        <div className="movie__id movie__info">영화ID : {props.id}</div>
        <div className="movie__key">{props.id}</div>
      </h3>
    </div>
  );
}

MoviesAPI.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  adult: PropTypes.bool,
  original_language: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
};

export default MoviesAPI;
