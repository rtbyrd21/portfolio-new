angular.module('rbMenu').directive('rbMenu', function($timeout){
  return{
    scope:{
      
    },
    transclude: true,
    templateUrl: 'ext-modules/rbMenu/rbMenuTemplate.html',
    controller: 'rbMenuController',
    link: function(scope, el, attr){
        var item = el.find('.selectable-item:first');
        $timeout(function(){
          item.trigger('click');
        }, 0);
    }
  };
});