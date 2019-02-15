import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    return (
      <div>
        <p className="mt-3">
          Showing {this.state.movies.length} movies in a database!
        </p>
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

  onRemoveMovie = (movieId) => {
    let {movies} = this.state;
    movies = movies.filter(movie => movie._id !== movieId);
    this.setState({movies});
  }
}

export default Movies;
