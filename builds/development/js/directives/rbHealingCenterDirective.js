
angular.module('app').directive('rbHealingCenter', function(){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/healingCenter.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'desktop';
      
      scope.isDesktop = function(){
        scope.device = 'desktop';
      };
      
      scope.isDesktopTwo = function(){
        scope.device = 'desktop-two';
      };
      
      scope.isTablet = function(){
        scope.device = 'tablet';
      };
      
      scope.isPhone = function(){
        scope.device = 'phone';
      };
      
      scope.isAdminOne = function(){
        scope.device = 'admin-one';
      };
      
      scope.isAdminTwo = function(){
        scope.device = 'admin-two';
      };
      
      scope.isAdminThree = function(){
        scope.device = 'admin-three';
      };
      
      scope.isAdminFour = function(){
        scope.device = 'admin-four';
      };
     
    }
  }
});