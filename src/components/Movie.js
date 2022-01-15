import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({medium_cover_image, title, summary, genres, rating}) {
  return (
    <div>
      <h2>
        <Link to="/movie">{title}</Link>
        ({rating})
      </h2>
      <img src={medium_cover_image} alt={title} />
      <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
            ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  title: propTypes.string.isRequired, 
  rating: propTypes.string.isRequired, 
  medium_cover_image: propTypes.string.isRequired, 
  genres: propTypes.string.isRequired, 
  summary: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;