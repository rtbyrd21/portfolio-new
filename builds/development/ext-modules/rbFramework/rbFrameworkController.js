
angular.module('rbFramework')
.controller('rbFrameworkController', function($scope, $rootScope, $window, $timeout, $location){
  
    $scope.isMenuVisible = true;
    $scope.isMenuButtonVisible = true;
    $scope.isMenuVertical = true;
    $scope.allowHorizontalToggle = true;

    $scope.$on('menu-item-selected-event', function(evt, data){
        $scope.routeString = data.route;
        $scope.routeTitle = data.title;
        $location.path(data.route);
        checkWidth();
        broadcastMenuState();
    });

  
    $scope.$on('rb-menu-orientation-changed-event', function(evt, data){
        $scope.isMenuVertical = data.isMenuVertical;
    });
  
    $($window).on('resize.rbFramework', function(){
      $scope.$apply(function(){
        checkWidth();
        broadcastMenuState();
      });
    });
  
    $scope.$on('$destroy', function(){
      $($window).off('resize.rbFramework'); //remove the handler
    })
    
    var checkWidth = function(){
      var width = Math.max($($window).width(), $window.innerWidth);
      $scope.isMenuVisible = (width >= 768);
      $scope.isMenuButtonVisible = !$scope.isMenuVisible;
    };
  
    $scope.menuButtonClicked = function(){
      $scope.isMenuVisible = !$scope.isMenuVisible;
      broadcastMenuState();
      //$scope.$apply();
    }
    
    var broadcastMenuState = function(){
      $rootScope.$broadcast('menu-show', 
        {
          show: $scope.isMenuVisible,
          isVertical: $scope.isMenuVertical,
          allowHorizontalToggle: !$scope.isMenuButtonVisible
        });
    }

    $timeout(function(){
      checkWidth();
    },0);
});