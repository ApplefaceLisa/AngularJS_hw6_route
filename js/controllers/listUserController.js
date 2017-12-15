app.controller("listUserController", ["$scope", "$location", "userMngService", "pagerService",
function($scope, $location, userMngService, pagerService) {
    $scope.users = userMngService.getUserlist();   // original users array
    $scope.userlist = $scope.users;   // userlist to be display

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
        userMngService.deleteUser(Number(userId));
        $location.path("/");
    }

    /* pagination */
    $scope.pageSize = 10;
    $scope.pager = {};
    $scope.currentPage = 1;
    $scope.setPage = function(page) {
        if (page < 1 || page > $scope.pager.totalPages) {
            return;
        }

        $scope.currentPage = page;

        // get pager object from service
        $scope.pager = pagerService.getPager($scope.users.length, page, $scope.pageSize);

        // get current page of items
        $scope.userlist = $scope.users.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
    };

    $scope.setPage(1);  // initialization
    $scope.$watch('pageSize', function() {
        $scope.setPage(1);
    });
}]);