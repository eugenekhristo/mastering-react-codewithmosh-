export function filterMovies(movies, filterValue) {
  if (!filterValue) return movies;
  return movies.filter(movie => movie.genre._id === filterValue);
}