app.service('helperService', function($http) {

    const url = 'https://localhost:7292/api/Places';

    this.getAllPlaces = function() {
        return $http.get(url);
    };

    this.addNewPlace = function(data) {
        return $http.post(url, data);
    };

    this.getPlaceDetails = function(id) {
        let tempURL = url + '/' + id;
        return $http.get(tempURL);
    };

    this.updatePlace = function(id, data) {
        let tempURL = url + '/' + id;
        return $http.put(tempURL, data);
    };

    this.deletePlace = function(id) {
        let tempURL = url + '/' + id;
        return $http.delete(tempURL);
    };

});
