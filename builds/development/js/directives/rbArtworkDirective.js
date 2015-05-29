


angular.module('app').directive('rbArtwork', function(){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/artwork.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'charcoal';
      
       scope.isCharcoal = function(){
        scope.device = 'charcoal';
      };
      
      scope.isCharcoalTwo = function(){
        scope.device = 'charcoal-two';
      };
      
      scope.isOil = function(){
        scope.device = 'oil';
      };
      
      
      scope.isPrint = function(){
        scope.device = 'print';
      };
      

     
    }
  }
});