var meteocat = angular.module('meteocat',[]);

meteocat.controller('mainController', function($scope, $http) {
    //Initialize expected form variables in order to avoid undefined values
    $scope.town_metadata = {};
    $scope.town = {};

    $scope.init = function() {
        $http.get('/municipis/metadades').then(
            function success(response) {
                $scope.town_metadata = response.data;
            }, 
            function error(response) {
                console.error(response);
            }
        )
    }

    $scope.getTownForecast = function(id) {
        $http.get('/municipis/' + id).then(
            function success(response) {
                console.log(response.data);
            }, 
            function error(response) {
                console.error(response.data);
            }
        )
    }


});
