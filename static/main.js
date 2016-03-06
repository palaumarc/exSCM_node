var app = angular.module('meteocat',['ui.bootstrap']);

app.controller('mainController', function($scope, $http) {
    $scope.town_metadata = {};

    $scope.init = function() {
        $http.get('/municipis/metadades').then(
            function success(response) {
                $scope.town_metadata = response.data;
                $scope.town_metadata.forEach(function(town){
                    town["active"] = false;
                })
            }, 
            function error(response) {
                console.error(response);
            }
        )
    }
})

app.controller('panelController', function($scope, $http) {

    $scope.town = {};

    $scope.getTownForecast = function(id) {
        $http.get('/municipis/' + id).then(
            function success(response) {
                var town = $scope.town_metadata.find(function (obj) {
                   return obj.codi === id;
                });

                $scope.town.name = town.nom;
                $scope.town.region = town.comarca.nom;
                $scope.town.dies = response.data.dies;
                town.active = true;
            }, 
            function error(response) {
                console.error(response.data);
            }
        )
    }
});