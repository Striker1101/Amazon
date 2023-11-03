"use strict";

angular
  .module("Amazon.username", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/", {
        templateUrl: "views/username/username.html",
        controller: "usernameController",
      });
    },
  ])

  .controller("usernameController", [
    "$scope",
    "$http",
    function ($scope, $http) {
      // $http
      //   .get("data/todos.json")
      //   .then(function (response) {
      //     $scope.datas = response.data;
      //   })
      //   .catch(function (error) {
      //     console.error("Error fetching data: " + error);
      //   });
    },
  ]);
