import React, { Component } from 'react';
// services
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
// components
import FaLike from './common/fa-like';
import Pagination from './common/pagination';
import FilterList from './common/filter-list';
// utils
import { paginateItems } from '../utils/paginateItems';
import { filterMovies } from '../utils/filterMovies';

///////////////// COMPONENT
//////////////////////////////////////
class Movies extends Component {
  state = {
    movies: [],
    // for pagination
    itemsPerPage: 4,
    activePage: 1,
    // for filtering
    genres: []
  };

  ///////////////// LIFECYCLE HOOKS
  //////////////////////////////////////
  constructor() {
    super();
    this.state.activeFilterId = null;
  }

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
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

  handleChooseFilter = genre => {
    this.setState({ activeFilterId: genre ? genre._id : genre, activePage: 1 });
  };

  ///////////////// RENDER
  //////////////////////////////////////
  render() {
    const { length: movieListLength } = this.state.movies;
    const {
      movies,
      itemsPerPage,
      activePage,
      genres,
      activeFilterId
    } = this.state;
    // filtering
    const filteredMovies = filterMovies(movies, activeFilterId);

    // for pagination
    const actualActivePage = this.handlePaginationEdgeCase(
      movieListLength,
      itemsPerPage,
      activePage
    );

    const paginatedMovies = paginateItems(
      filteredMovies,
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
      <div className="row">
        <div className="col-2">
          <FilterList
            items={genres}
            activeFilterId={activeFilterId}
            onChooseFilter={this.handleChooseFilter}
          />
        </div>
        <div className="col">
          <p>Showing {filteredMovies.length} movies in a database!</p>
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
            itemsLength={filteredMovies.length}
            itemsPerPage={itemsPerPage}
            activePage={actualActivePage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
