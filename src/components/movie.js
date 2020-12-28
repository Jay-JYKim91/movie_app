import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./movie.css"

function Movie({ id, year, title, summary, poster, genres }) {
  return (

      <div className="movie-card">
        <Link
              to={{
                pathname: `/movie/${id}`,
                state: {
                  year,
                  title,
                  summary,
                  poster,
                  genres
                }
              }}
            >
          <img src={poster} alt={title} title={title} height="250px" width="200px"/>
          <h3 className="movie_title">{title}</h3>
        </Link>
          <div className="movie_genres">
            {genres.map((genre, index) =>
              <span className="genres_genre" key={index}>{genre}</span>
            )}
          </div>
      </div>

  );
}

Movie.propsTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
