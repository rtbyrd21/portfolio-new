
angular.module('app').directive('rbIlluminationSite', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/illuminationsite.html',
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