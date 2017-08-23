angular
    .module('app')
    .service('AirportService', ['$rootScope', 'socket', function ($rootScope, socket) {

        //obsarvables callbacks 
        var observers = [];

        this.subscribe = function (observer) {
            observers.push(observer);
        }

        //listen to server on airport updates
        socket.on('airportUpdate', function (data) {

            //Note: using $rootScope.$apply to sync server call back with angular loop
            $rootScope.$apply(function () {

                console.log('AirportService::EVENT - Airport update', new Date)
                for (let i in observers) {
                    observers[i]({
                        runways: data.runways,
                        terminal: data.terminal
                    });
                }

            });
        })

        this.openRunway = function(id){
            console.log('AirportService::openRunway')
            socket.emit('openRunway', id)
        };

        this.closeRunway = function(id){
            console.log('AirportService::closeRunway')
            socket.emit('closeRunway', id)
        };

        this.slowSpeed = function(){
            console.log('AirportService::slowSpeed')
            socket.emit('slowSpeed')
        };
        
        this.fastSpeed = function(){
            console.log('AirportService::fastSpeed')
            socket.emit('fastSpeed')
        };
    }]);

