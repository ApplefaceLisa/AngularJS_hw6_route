app.controller("listUserController", ["$scope", "$location", "userMngService", function($scope, $location, userMngService) {
    $scope.users = userMngService.getUserlist();

    /*
    console.log("host: "+ $location.host());
    console.log("port: " + $location.port());
    console.log("url: " + $location.absUrl());
    */

    $scope.searchKey = "";
    $scope.propertyName = "";
    $scope.reverse = false;
    $scope.sortBy = function(name) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = name;
    }

    $scope.createUser = function($event) {
        $event.preventDefault();
        $location.path("/new");
    }

    $scope.editUser = function($event, userId) {
        $event.preventDefault();
        var url = "/edit/" + userId;
        $location.path(url);
    }

    $scope.deleteUser = function($event, userId) {
        $event.preventDefault();
        userMngService.deleteUser(userId);
        $location.path("/");
    }
}]);