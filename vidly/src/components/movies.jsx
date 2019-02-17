import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
// components
import FaLike from './common/fa-like';
import Pagination from './common/pagination';
// utils
import { paginateItems } from '../utils/paginateItems';

class Movies extends Component {
  state = {
    movies: getMovies(),
    // for pagination
    itemsPerPage: 4,
    activePage: 1
  };

  ///////////////// RENDER
  //////////////////////////////////////
  render() {
    const { length: movieListLength } = this.state.movies;
    const { movies, itemsPerPage, activePage } = this.state;

    const actualActivePage = this.handlePaginationEdgeCase(
      movieListLength,
      itemsPerPage,
      activePage
    );

    const paginatedMovies = paginateItems(
      movies,
      itemsPerPage,
      actualActivePage
    );

    ///////////////// RETURN
    //////////////////////////////////////
    if (movieListLength === 0) {
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
        <p className="mt-3">Showing {movieListLength} movies in a database!</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {paginatedMovies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <FaLike
                    isLiked={movie.isLiked}
                    onClick={() => this.handleToggleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleRemoveMovie(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          itemsLength={movieListLength}
          itemsPerPage={itemsPerPage}
          activePage={actualActivePage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }

  ///////////////// METHODS
  //////////////////////////////////////
  handleRemoveMovie = movieId => {
    const movies = this.state.movies.filter(movie => movie._id !== movieId);
    this.setState({ movies });
  };

  handleToggleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].isLiked = !movie.isLiked;
    return this.setState({ movies });
  };

  handlePageChange = activePage => {
    this.setState({ activePage });
  };

  /**
   * This function is supposed to be called whenever render() hook is truggered - and use its return value
   * as actual value of activePage
   * @param {number} movieListLength 
   * @param {number} itemsPerPage 
   * @param {number} activePage 
   * @returns {number}
   */
  handlePaginationEdgeCase(movieListLength, itemsPerPage, activePage) {
    const maxAllowedPage = Math.ceil(movieListLength / itemsPerPage);
    if (activePage > maxAllowedPage) return activePage - 1;
    return activePage;
  }
}

export default Movies;
