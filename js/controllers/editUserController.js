app.controller("editUserController", ["$scope", "$routeParams", "userMngService", function($scope, $routeParams, userMngService) {
  var userId = $routeParams.id;
  $scope.id = userId;

  $scope.user = userMngService.getUserById(userId);
  console.log($scope.user);

  $scope.passw1 = "";
  $scope.passw2 = "";
  $scope.error = false;
  $scope.incomplete = true;

  $scope.$watch('passw1',function() {$scope.test();});
  $scope.$watch('passw2',function() {$scope.test();});
  $scope.$watch('user.fName', function() {$scope.test();});
  $scope.$watch('user.lName', function() {$scope.test();});

  $scope.test = function() {
    if ($scope.passw1 && $scope.passw2 && $scope.passw1 !== $scope.passw2) {
      $scope.error = true;
    } else {
      $scope.error = false;
    }
    $scope.incomplete = true;
    if ($scope.user.fName && $scope.user.lName &&
        $scope.passw1 && $scope.passw2) {
        $scope.incomplete = false;
    }
  };

  $scope.editUser = function($event) {
    $event.preventDefault();
    userMngService.updateUser($scope.user);
    location.href = "#/!";
  }
}]);