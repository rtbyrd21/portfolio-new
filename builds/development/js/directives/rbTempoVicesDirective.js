


angular.module('app').directive('rbTempoVices', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/tempo-vices.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'cover';
      
      scope.isCover = function(){
        scope.device = 'cover';
      };
      
      scope.isSpread1 = function(){
        scope.device = 'spread-1';
      };
      
      scope.isSpread2 = function(){
        scope.device = 'spread-2';
      };
      
      scope.isSpread3 = function(){
        scope.device = 'spread-3';
      };
      
      scope.isBackCover = function(){
        scope.device = 'back-cover';
      };
      
     
    }
  }
});