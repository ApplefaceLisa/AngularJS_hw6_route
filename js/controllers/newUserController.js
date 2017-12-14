angular.module("userMngrApp").controller("newUserController", function($scope) {
  $scope.fName = "";
  $scope.lName = "";
  $scope.title = "";
  $scope.gender = "";
  $scope.age = "";
  $scope.passw1 = "";
  $scope.passw2 = "";
  $scope.error = false;
  $scope.incomplete = true;

  $scope.$watch('passw1',function() {$scope.test();});
  $scope.$watch('passw2',function() {$scope.test();});
  $scope.$watch('fName', function() {$scope.test();});
  $scope.$watch('lName', function() {$scope.test();});

  $scope.test = function() {
    if ($scope.passw1 && $scope.passw2 && $scope.passw1 !== $scope.passw2) {
      $scope.error = true;
    } else {
      $scope.error = false;
    }
    $scope.incomplete = true;
    if ($scope.fName && $scope.lName &&
        $scope.passw1 && $scope.passw2) {
        $scope.incomplete = false;
    }
  };
})