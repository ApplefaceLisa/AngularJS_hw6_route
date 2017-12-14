var app = angular.module("userMngrApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "views/list.html",
        controller: "listUserController"
    })
    .when("/new", {
        templateUrl: "views/new.html",
        controller: "newUserController"
    })
    .when("/edit/:id", {
        templateUrl: "views/edit.html",
        controller: "editUserController"
    })
    .otherwise({redirectTo: "/"})
});

app.controller("userMngrCtrl", function($scope) {});