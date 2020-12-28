import React from 'react';
import axios from 'axios';
import Movie from '../components/movie';
import '../app.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container movies">
        {isLoading
          ? <div className="loader">
              <h1 className="loader_text">Loading...</h1>
            </div>
          : movies.map(movie => {
            return (
              <div className="one-movie">
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.description_full}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              </div>
            );
          })}
      </section>
    )
  };
}

export default Home;
