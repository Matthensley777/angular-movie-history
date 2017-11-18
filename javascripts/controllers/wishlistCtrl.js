'use strict';

app.controller("WishlistCtrl", function($location, $rootScope, $scope, MovieService){
  
  const getMovies = () => {
    MovieService.getWishlistMovies($rootScope.uid).then((results) =>{
      $scope.movies = results;
    }).catch((err) =>{
      console.log("error in getRatedMovies", err);
    });
  };
  
  getMovies();

  $scope.deleteMovie = (movieId) => {
    MovieService.deleteMovie(movieId).then((result) =>{
      getMovies();
    }).catch((err) =>{
      console.log("error in deleteMovie", err);
    });
  };
  $scope.switchedWatched = (movie) => {
  	movie.isWatched = true;
  	let updatedMovie = MovieService.createMovieObject(movie);
  	MovieService.updateMovie(updatedMovie, movie, movie.Id).then((result)=> {
  		getMovies();
  	}).catch((err)=> {
  		console.log("err in switchedWatched", err);
  	});
  };
  $scope.movieDetail = (movieid) => {
  	$location.path(`/movie/${movieid}`);
  };
});