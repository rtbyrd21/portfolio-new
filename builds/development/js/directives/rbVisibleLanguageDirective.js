


angular.module('app').directive('rbVisibleLanguage', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/visiblelanguage.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'desktop';
      console.log('called');
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