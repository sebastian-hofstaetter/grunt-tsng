/// <reference path="MyApp.Area.ng.ts" />

module MyApp.Area {
    class AService {
        constructor (public $http:ng.IHttpService, private $timeout:ng.ITimeoutService, $window: ng.IWindowService) {
            
        }
    }
    
    angular.module("MyApp.Area")
        .service("MyApp.Area.AService", [
            "$http",
            "$timeout",
            "$window",
            AService
        ]);
}