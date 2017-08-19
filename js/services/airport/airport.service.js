angular
    .module('app')
    .service('AirportService', ['$interval', function ($interval) {

        //obsarvables callbacks 
        var observers = [];

        this.subscribe = function (observer) {
            observers.push(observer);
        }

        $interval(function () {

            //brodcast update
            console.log('Airport update', new Date)
            for (let i in observers) {
                observers[i]({
                    runways: runways,
                    terminal: terminal
                });
            }


        }, 2000);

    }]);




var runways = [
    {
        "_id": "59981fcff2bed4be8cd5e96d",
        "tag": 1,
        "status": 2
    },
    {
        "_id": "59981fcffb44a57c3183da18",
        "tag": 2,
        "status": 0
    },
    {
        "_id": "59981fcfba265a89dcd579cf",
        "tag": 3,
        "status": 3
    },
    {
        "_id": "59981fcf5cca2e520b2ffe13",
        "tag": 4,
        "status": 2
    },
    {
        "_id": "59981fcf1c3456c2a039947e",
        "tag": 5,
        "status": 0
    },
    {
        "_id": "59981fcf0221153960d54107",
        "tag": 6,
        "status": 3
    },
    {
        "_id": "59981fcfd8936e9079afdd8a",
        "tag": 7,
        "status": 2
    },
    {
        "_id": "59981fcf0aa6b47be759d474",
        "tag": 8,
        "status": 2
    }
]

var terminal = [
    {
        "_id": "5998268f6d1cea550bae60d9",
        "missionStartTime": "Tue Jun 06 1978 23:43:09 GMT+0300 (Jerusalem Standard Time)"
    },
    {
        "_id": "5998268f6e50b9ca04b99f91",
        "missionStartTime": "Sun Dec 11 2011 07:41:00 GMT+0200 (Jerusalem Daylight Time)"
    },
    {
        "_id": "5998268fd970d38feec76167",
        "missionStartTime": "Sun Jun 08 1986 23:59:51 GMT+0300 (Jerusalem Standard Time)"
    },
    {
        "_id": "5998268f0250989b1830223d",
        "missionStartTime": "Fri Nov 14 2008 13:41:26 GMT+0200 (Jerusalem Daylight Time)"
    },
    {
        "_id": "5998268f78ce5d6d07d1bbcf",
        "missionStartTime": "Thu Jan 26 1989 06:22:31 GMT+0200 (Jerusalem Daylight Time)"
    },
    {
        "_id": "5998268fd24e2c9e30ca895a",
        "missionStartTime": "Sun May 02 1976 12:01:14 GMT+0300 (Jerusalem Standard Time)"
    },
    {
        "_id": "5998268fd8ed8fd65a2a265c",
        "missionStartTime": "Wed Nov 13 2013 06:48:55 GMT+0200 (Jerusalem Daylight Time)"
    },
    {
        "_id": "5998268fcc8e358caad91fe5",
        "missionStartTime": "Thu Mar 03 1994 23:33:02 GMT+0200 (Jerusalem Daylight Time)"
    }
]

