const {
    addMovie,
    rateMovie,
    getAverageRating,
    getTopRatedMovies,
    getMoviesByGenre,
    getMoviesByDirector,
    searchMoviesBasedOnKeyword,
    getMovie,
    removeMovie,
    movies
  } = require('./movies');
  
  addMovie('1', 'Inception', 'Christopher Nolan', 2010, 'Sci-Fi');
  addMovie('2', 'The Dark Knight', 'Christopher Nolan', 2008, 'Action');
  addMovie('3', 'Titanic', 'James Cameron', 1997, 'Romance');
  
  rateMovie('1', 5);
  rateMovie('1', 4);
  rateMovie('2', 5);
  
  console.log(`Average Rating of Inception: ${getAverageRating('1')}`);
  
  console.log('Top Rated Movies: ', getTopRatedMovies());
  
  console.log('Sci-Fi Movies: ', getMoviesByGenre('Sci-Fi'));
  
  console.log('Movies by Christopher Nolan: ', getMoviesByDirector('Christopher Nolan'));
  
  console.log('Movies containing "dark": ', searchMoviesBasedOnKeyword('dark'));
  
  console.log('Movie details for Inception: ', getMovie('1'));
  
  removeMovie('3');
  console.log('Movies after removal of Titanic: ', movies);