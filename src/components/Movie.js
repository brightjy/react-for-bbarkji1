import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, medium_cover_image, title, summary, genres, rating}) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
        ({rating})
      </h2>
      {/* <img src={medium_cover_image} alt={title} /> */}
      <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
            ))}
      </ul>
      {/* <p>{summary}</p> */}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired, 
  rating: PropTypes.number.isRequired, 
  medium_cover_image: PropTypes.string.isRequired, 
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, 
  summary: PropTypes.string.isRequired
}

export default Movie;