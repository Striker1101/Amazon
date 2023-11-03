"use strict";

// Initializing AngularJS app
// Declare app level module which depends on views, and core components
angular
  .module("Amazon", ["ngRoute", "Amazon.password", "Amazon.username"])
  //before application runs
  .config([
    "$locationProvider",
    "$routeProvider",
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider.otherwise({ redirectTo: "/" });
    },
  ]);
