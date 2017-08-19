angular
    .module('app')
    .controller('AirportCtrl', ['$scope', 'AirportService', function ($scope, AirportService) {
        $scope.title = 'Hola!';
        $scope.runways = [];
        $scope.terminal = [];

        AirportService.subscribe(function(airportData){
            $scope.runways = airportData.runways;
            $scope.terminal = airportData.terminal;
        });
    }]);


