"use strict";

angular
  .module("Amazon.username", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/", {
        templateUrl: "views/username/username2.html",
        controller: "usernameController",
      });
    },
  ])

  .controller("usernameController", [
    "$scope",
    "$http",
    "$location",
    function ($scope, $http, $location) {
      $scope.text = "";
      $scope.submit = function () {
        // Save the email to Local Storage
        console.log($scope.text);
        localStorage.setItem("email", $scope.text);
      };
      $scope.redirectToPassword = function() {
        $location.path('/password');
      };
    },
  ]);
