




angular.module('app').directive('rbTempoFuture', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/tempo-future.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'cover';
      
      scope.isCover = function(){
        scope.device = 'cover';
      };
      
       scope.isContents = function(){
        scope.device = 'contents';
      };
      
      scope.isSpread1 = function(){
        scope.device = 'spread-1';
      };
      
      scope.isSpread2 = function(){
        scope.device = 'spread-2';
      };
      
      scope.isCoverDetail = function(){
        scope.device = 'cover-detail';
      };
      
     
      
     
    }
  }
});