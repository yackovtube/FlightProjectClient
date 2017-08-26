angular
    .module('app')
    .controller('AirportCtrl', ['$scope', 'AirportService', 'colorHash', function ($scope, AirportService, colorHash) {
        $scope.title = 'Hola!';
        $scope.runways = [];
        $scope.terminal = [];
        $scope.inBound = [];
        $scope.isEmergency = false;



        $scope.closeRunway = function (runway) {
            AirportService.closeRunway(runway._id);
        }

        $scope.openRunway = function (runway) {
            AirportService.openRunway(runway._id);
        }

        $scope.slowSpeed = function () {
            AirportService.slowSpeed();
        }

        $scope.fastSpeed = function () {
            AirportService.fastSpeed();
        }

        $scope.addEmergencyLanding = function () {
            AirportService.addEmergencyLanding();
        }

        $scope.genrateColor = function (str) {
            let string = str.substr(str.length - 6)
            return colorHash.hex(string);
        }

        $scope.calculateExitTime = function (terminalSpot) {
            var d = new Date(terminalSpot.plane.missionStartTime);
            let delay = +terminalSpot.delay;

            return Math.round((d.getTime() + delay - Date.now()) / 1000);
        }

        $scope.calculateWaitTime = function (plane) {
            var d = new Date(plane.missionStartTime)
            return Math.abs(Math.round((d.getTime() - Date.now()) / 1000));
        }

        AirportService.subscribe(function (airportData) {
            $scope.runways = airportData.runways;
            $scope.terminal = airportData.terminal;
            $scope.inBound = airportData.inBound;
            $scope.isEmergency = airportData.isEmergency;
            console.log($scope.isEmergency)
        });






    }]);


