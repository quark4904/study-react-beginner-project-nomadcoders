import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        Title :
        <Link to={`/detail/${id}`}>
          {title} {year ? `(${year})` : null}
        </Link>
      </h2>
      <p>{summary}</p>
      <h3>Genres</h3>
      <ul>{genres ? genres.map((g) => <li key={g}>{g}</li>) : "Not Found"}</ul>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string),
};

export default Movie;
