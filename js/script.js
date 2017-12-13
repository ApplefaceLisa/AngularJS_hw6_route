var app = angular.module("userMngr", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "views/list.html"
    })
    .when("/new", {
        templateUrl: "views/new.html"
    })
    .when("/edit/:id", {
        templateUrl: "views/edit.html",
        controller: "editUserController"
    })
    .otherwise({redirectTo: "/"})
});