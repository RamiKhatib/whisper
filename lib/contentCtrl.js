app.controller('contentCtrl',['$scope','$rootScope',function ($scope,$rootScope) {
    $rootScope.user =  new User();
    $scope.user = $rootScope.user;
}]);