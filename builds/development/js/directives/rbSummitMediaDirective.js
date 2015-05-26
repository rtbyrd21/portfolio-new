



angular.module('app').directive('rbSummitMedia', function(){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/summit-media.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'logos';
      
       scope.isLogos = function(){
        scope.device = 'logos';
      };
      
      
      scope.isAdvertisement = function(){
        scope.device = 'ad';
      };
      
      

     
    }
  }
});