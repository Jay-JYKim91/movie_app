import React from 'react';

class Details extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="container detail-movie">
        <div className="detail-img">
          <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
        </div>
        <div className="detail-text">
          <h1>{location.state.title}</h1>
          <span className="big-text">{location.state.year} | </span>
          {location.state.genres.map((genre, index) =>
            <span className="genres_genre" key={index}>{genre}</span>
          )}
          <h3>{location.state.summary}</h3>
        </div>
        </div>
    )
    } else {
      return null;
    }
  }
}

export default Details;
