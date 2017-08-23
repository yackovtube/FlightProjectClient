angular
    .module('app')
    .controller('AirportCtrl', ['$scope', 'AirportService','colorHash',  function ($scope, AirportService, colorHash) {
        $scope.title = 'Hola!';
        $scope.runways = [];
        $scope.terminal = [];


        $scope.closeRunway = function(runway){
            AirportService.closeRunway(runway._id);
        }

        $scope.openRunway = function(runway){
            AirportService.openRunway(runway._id);
        }

        $scope.slowSpeed= function(){
            AirportService.slowSpeed();
        }

        $scope.fastSpeed= function(){
            AirportService.fastSpeed();
        }

        $scope.genrateColor = function(str){
            let string = str.substr(str.length-6)
            return colorHash.hex(string);
        }

        AirportService.subscribe(function(airportData){
            $scope.runways = airportData.runways;
            $scope.terminal = airportData.terminal;
        });


    }]);


