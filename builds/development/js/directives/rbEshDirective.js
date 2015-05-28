


angular.module('app').directive('rbEsh', function(){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/esh.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'desktop';
      
       scope.isDesktop = function(){
        scope.device = 'desktop';
      };
      
      
      scope.isPrintAd = function(){
        scope.device = 'print-ad';
      };
      
      

     
    }
  }
});