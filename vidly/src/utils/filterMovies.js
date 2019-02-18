export function filterMovies(movies, filterValue) {
  if (filterValue && filterValue._id)
    return movies.filter(movie => movie.genre._id === filterValue._id);
  return movies;
}
