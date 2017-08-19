angular
    .module('app')
    .controller('AirportCtrl', ['$scope', 'AirportService', function ($scope, AirportService) {
        $scope.title = 'Hola!';
        $scope.runways = [];
        $scope.terminal = [];


        $scope.closeRunway = function(runway){
            AirportService.closeRunway(runway);
        }

        AirportService.subscribe(function(airportData){
            $scope.runways = airportData.runways;
            $scope.terminal = airportData.terminal;
        });


    }]);


