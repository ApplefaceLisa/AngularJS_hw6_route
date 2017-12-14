angular.module("userMngrApp").controller("listUserController", function($scope) {
    $scope.users = [
        {id:1, fName:'Hege',  lName:"Pege", title:"Software Engineer", sex:"male", age:22},
        {id:2, fName:'Kim',   lName:"Pim", title:"Principle", sex:"female", age:45},
        {id:3, fName:'Sal',   lName:"Smith", title:"Project Manager", sex:"male", age:35 },
        {id:4, fName:'Jack',  lName:"Jones", title:"Senior Engineer", sex:"male", age:32 },
        {id:5, fName:'John',  lName:"Doe", title:"ME", sex:"male", age:30 },
        {id:6, fName:'Peter', lName:"Pan", title:"blacksmith", sex:"male", age:19 },
        {id:7, fName:'Hege',  lName:"Pege", title:"Software Engineer", sex:"male", age:22},
        {id:8, fName:'Kim',   lName:"Pim", title:"Principle", sex:"female", age:45},
        {id:9, fName:'Sal',   lName:"Smith", title:"Project Manager", sex:"male", age:35 },
        {id:10, fName:'Jack',  lName:"Jones", title:"Senior Engineer", sex:"male", age:32 },
        {id:11, fName:'John',  lName:"Doe", title:"ME", sex:"male", age:30 },
        {id:12, fName:'Peter', lName:"Pan", title:"blacksmith", sex:"male", age:19 },
        {id:13, fName:'Hege',  lName:"Pege", title:"Software Engineer", sex:"male", age:22},
        {id:14, fName:'Kim',   lName:"Pim", title:"Principle", sex:"female", age:45},
        {id:15, fName:'Sal',   lName:"Smith", title:"Project Manager", sex:"male", age:35 },
        {id:16, fName:'Jack',  lName:"Jones", title:"Senior Engineer", sex:"male", age:32 },
        {id:17, fName:'John',  lName:"Doe", title:"ME", sex:"male", age:30 },
        {id:18, fName:'Peter', lName:"Pan", title:"blacksmith", sex:"male", age:19 }
    ];

    $scope.searchKey = "";
    $scope.propertyName = "";
    $scope.reverse = false;
    $scope.sortBy = function(name) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = name;
    }

})