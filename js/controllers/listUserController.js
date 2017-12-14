app.controller("listUserController", ["$scope", "userMngService", function($scope, userMngService) {
    $scope.users = userMngService.getUserlist();

    $scope.searchKey = "";
    $scope.propertyName = "";
    $scope.reverse = false;
    $scope.sortBy = function(name) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = name;
    }

    $scope.go = function($event, userId) {
        $event.preventDefault();
        var url = "#!edit/" + userId;
        location.href = url;
    }

    $scope.deleteUser = function($event, userId) {
        $event.preventDefault();
        userMngService.deleteUser(userId);
        location.href = "#/!";
    }
}]);