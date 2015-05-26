

angular.module('app').directive('rbAbout', function(){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/about.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'desktop';
      
      scope.isDesktop = function(){
        scope.device = 'desktop';
      };
      
      scope.isTablet = function(){
        scope.device = 'tablet';
      };
      
      scope.isPhone = function(){
        scope.device = 'phone';
      };
      
     
    }
  }
});