
var app = angular.module('myApp', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {


        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeController'

            })

            .when('/about', {

                templateUrl: 'views/about.html',
                controller: 'aboutController'
            })

    }])

    .controller('mainController', function ($scope) {
   

    })
