"use strict";

app.controller("MovieDetailCtrl", function($scope, MovieService, $routeParams){
	$scope.movie = {};
	console.log('movie.id', $routeParams.id);

const getMovie = () => {
MovieService.getSingleMovie($routeParams.id).then((results) => {
	$scope.movie = results.data;
}).catch((err) => {
	console.log("getSingleMovie", err);
});
};
getMovie();
	$scope.switchedWatched = (movie) => {
  	movie.isWatched = true;
  	let updatedMovie = MovieService.createMovieObject(movie);
  	MovieService.updateMovie(updatedMovie, movie, $routeParams.Id).then((result)=> {
  		getMovie();
  	}).catch((err)=> {
  		console.log("err in switchedWatched", err);
  	});
  };

  $scope.starChange = (event, movie) => {

  	if(event.rating) {
  		movie.rating = event.rating;
  		let updatedMovie = MovieService.createMovieObject(movie);
  		MovieService.updateMovie(updatedMovie, $routeParams.id).then(() => {
  			getMovie();
  		}).catch((err) => {
  			console.log("err in starChange", err);
  		});
  	}
  };

});