﻿
var app = angular.module('myApp', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {


        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeController'

            })

            .when('/menu', {

                templateUrl: 'views/menu.html',
                controller: 'menuController'
            })

            .when('/about', {

                templateUrl: 'views/about.html',
                controller: 'aboutController'
            })

    }])


.controller('mainController', function ($scope) {


    })



    .controller('subscribeForm', ['$scope', 'shopService', function ($scope, shopService) {
    var SubscribeMsg = document.getElementById('SubscribeMsg');
    $scope.Subscribe = function () {
       // alert($scope.email)
            if ($scope.email) {

                var submitEmail = shopService.SubmitEmailSubscribe($scope.email);
                submitEmail.then(function (p1) {
                        
                },

                    function (errorP1) { alert('Failure Loading!' + errorP1) });
                $scope.email = '';
                SubscribeMsg.innerHTML = 'Thanks for Subscription!!';
            }
        };
    }]);
