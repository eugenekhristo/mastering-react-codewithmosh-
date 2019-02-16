import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  render() {
    const { length: moviesLenght } = this.state.movies;

    if (moviesLenght === 0) {
      return (
        <p className="mt-3">
          There are no movies left in the database{' '}
          <span role="img" aria-label="Screaming smile">
            😱
          </span>
        </p>
      );
    }

    return (
      <div>
        <p className="mt-3">Showing {moviesLenght} movies in a database!</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.onRemoveMovie(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  onRemoveMovie = movieId => {
    const movies = this.state.movies.filter(movie => movie._id !== movieId);
    this.setState({ movies });
  };
}

export default Movies;
