app.controller("dashboardCtrl", function ($scope, $route, $location, helperService) {

    $scope.places;
    $scope.loading = true;

	angular.element(document).ready(function () {
        helperService.getAllPlaces()
		.then(function (response) {
			$scope.places = response.data;
			$scope.loading = false;
		}, function (error) {
			$scope.places = error.data;
			$scope.loading = false;
		});
	});

    $scope.createNewPlace = () => {
        $location.path('/details');
	}

	$scope.updatePlace = (id) => {
        $location.path('/details/' + id);
	}

	$scope.deletePlace = (id) => {
		if (confirm("Are you sure to delete this record?")) {
			helperService.deletePlace(id)
			.then(function (response) {
				$route.reload();
			});
		}
	}

});
