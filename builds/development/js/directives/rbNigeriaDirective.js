

angular.module('app').directive('rbNigeria', function(){
    return{
    scope:{
      image: '@',
      mobile: '='
    },
    templateUrl: 'js/directives/directiveTemplates/nigeria.html',
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
      
      scope.isMap = function(){
        scope.device = 'map';
      };
     console.log(scope.mobile);
    }
  }
});