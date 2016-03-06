var meteocat = angular.module('meteocat',['ui.bootstrap']);

meteocat.controller('mainController', function($scope, $http) {

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

    $scope.getTownForecast = function(panelId, id) {
        $http.get('/municipis/' + id).then(
            function success(response) {
                var town = $scope.town_metadata.find(function (obj) {
                   return obj.codi === id;
                });

                if ($scope.town[panelId] == undefined) {
                    $scope.town[panelId] = {};
                }

                $scope.town[panelId].name = town.nom;
                $scope.town[panelId].region = town.comarca.nom;
                $scope.town[panelId].dies = response.data.dies;
            }, 
            function error(response) {
                console.error(response.data);
            }
        )
    }


});
