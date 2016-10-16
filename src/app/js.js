angular.module('nordic').controller('CollapseDemoCtrl', function ($scope) {
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = true;
  $scope.isCollapsedHorizontal = false;
});
angular.module('nordic').controller('CollapseDemoCtrl2', function ($scope) {
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsed2 = false;
  $scope.isCollapsed3 = false;
  $scope.isCollapsed4 = false;
  $scope.isCollapsedHorizontal = false;
});
