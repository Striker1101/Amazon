"use strict";

angular
  .module("Amazon.password", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/password", {
        templateUrl: "views/password/password.html",
        controller: "passwordController",
      });
    },
  ])

  .controller("passwordController", [
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
