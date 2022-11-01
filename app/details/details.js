app.controller("detailsCtrl", function ($scope, $routeParams, $location, helperService) {

    $scope.isFileValid = false;
    $scope.place = {
        placeID: 0,
        name: '',
        address: '',
        rating: 1,
        type: '',
        picture: ''
    }

    angular.element(document).ready(function () {
        var placeID = $routeParams.id;
        if (placeID) {
            helperService.getPlaceDetails(placeID)
                .then(function (response) {
                    $scope.place = response.data;
                    $scope.isFileValid = true;
                });
        }
    });

    $scope.addNewPlace = (data) => {
        var placeID = $scope.place.placeID;
        if(placeID){
            helperService.updatePlace(placeID, $scope.place)
                .then(function (response) {
                    $location.path('/dashboard');
                });
        }
        else{
            $scope.place.placeID=0;
            helperService.addNewPlace($scope.place)
                .then(function (response) {
                    if(response.data.placeID){
                        $location.path('/dashboard');
                    }
                });
        }   
    }

    $scope.toBase64 = (file) =>  {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        })
    }

    $scope.onFileChange = (event) => {
        if (event.target.files && event.target.files.length) {
            $scope.toBase64(event.target.files[0]).then((data) => {
                $scope.place.picture = data;
                $scope.isFileValid = true;
                $scope.$apply();
            });
        }
    }

    $scope.resetForm = (data) => {
        $scope.place.picture = '';
        $scope.isFileValid = false;
    }

});
