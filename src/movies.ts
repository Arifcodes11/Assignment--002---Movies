interface Movie {
    id: string;
    title: string;
    director: string;
    releaseYear: number;
    genre: string;
    ratings: number[];
  }
  
  const movies: Movie[] = [];
  
  function addMovie(id: string, title: string, director: string, releaseYear: number, genre: string) {
    const movie: Movie = { id, title, director, releaseYear, genre, ratings: [] };
    movies.push(movie);
  }
  
  function rateMovie(id: string, rating: number) {
    const movie = movies.find((movie) => movie.id === id);
    if (movie) {
        if (rating >= 1 && rating <= 5) {
            movie.ratings.push(rating);
        } else {
            throw new Error('Rating must be between 1 and 5.');
        }
    } else {
        throw new Error('Movie not found.');
    }
  }
  
  function getAverageRating(id: string): number | undefined {
    const movie = movies.find((movie) => movie.id === id);
    if (movie && movie.ratings.length > 0) {
        const total = movie.ratings.reduce((acc, rating) => acc + rating, 0);
        return total / movie.ratings.length;
    }
    return undefined;
  }
  
  function getTopRatedMovies() {
    return movies
        .filter((movie) => movie.ratings.length > 0)
        .sort((a, b) => {
            const avgRatingA = getAverageRating(a.id) ?? 0;
            const avgRatingB = getAverageRating(b.id) ?? 0;
            return avgRatingB - avgRatingA;
        });
  }
  
  function getMoviesByGenre(genre: string) {
    return movies.filter((movie) => movie.genre.toLowerCase() === genre.toLowerCase());
  }
  
  function getMoviesByDirector(director: string) {
    return movies.filter((movie) => movie.director.toLowerCase() === director.toLowerCase());
  }
  
  function searchMoviesBasedOnKeyword(keyword: string) {
    return movies.filter((movie) =>
        movie.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }
  
  function getMovie(id: string) {
    const movie = movies.find((movie) => movie.id === id);
    if (movie) {
        return movie;
    } else {
        throw new Error('Movie not found.');
    }
  }
  
  function removeMovie(id: string) {
    const index = movies.findIndex((movie) => movie.id === id);
    if (index !== -1) {
        movies.splice(index, 1);
    } else {
        throw new Error('Movie not found.');
    }
  }
  
  module.exports = {
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
  };