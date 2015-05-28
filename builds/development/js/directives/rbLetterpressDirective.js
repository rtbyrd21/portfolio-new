
angular.module('app').directive('rbLetterpress', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/letterpress.html',
      
    link: function(scope, el, attr, ctrl){
      
      scope.device = 'wedding';
      
      scope.isWedding = function(){
        scope.device = 'wedding';
      };
      
      scope.isLighthouse = function(){
        scope.device = 'lighthouse';
      };
      
      scope.isBirthAnnouncement = function(){
        scope.device = 'birth-announcement';
      };
      
      scope.isBusinessCard = function(){
        scope.device = 'business-card';
      };
      
      scope.isRoy = function(){
        scope.device = 'roy';
      };
      
      scope.isHoliday = function(){
        scope.device = 'peace';
      };
     
    }
  }
});