"use strict";

app.run(function(FIREBASE_CONFIG) {
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
	$routeProvider
	.when("/auth", {
		templateUrl: 'partials/auth.html',
		controller: 'authCtrl'
	})
	.when("/search", {
		templateUrl: 'partials/search.html',
		controller: 'searchCtrl'
	})
	.when("/wishlist", {
		templateUrl: 'partials/wishlist.html',
		controller: 'wishlistCtrl'
	})
	.when("/rated", {
		templateUrl: 'partials/rated.html',
		controller: 'ratedCtrl'
	})
	.otherwise('/auth');
});