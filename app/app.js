var app = angular.module("MyApp", ['ngRoute']);

app.controller("MyCtrl", function($scope){
    $scope.Title = "Tourist Place App";
});

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
	$locationProvider.html5Mode(true);

    $routeProvider
	.when("/", {
		redirectTo: '/dashboard'
	})
	.when("/dashboard", {
		templateUrl : "./app/dashboard/dashboard.html",
		controller : "dashboardCtrl"
	})
	.when("/details", {
		templateUrl : "./app/details/details.html",
		controller : "detailsCtrl"
	})
	.when("/details/:id", {
		templateUrl : "./app/details/details.html",
		controller : "detailsCtrl"
	})
	.otherwise({
		template : "<div class='NotFound'><img src='./image/pageNotFound.jpg' alt='not found' /> <h2>Page Not Found!!!</h2></div>"
	});
});
