
angular.module('rbMenu').directive('rbMenuGroup', function(){
  return{
      require: '^rbMenu',
      transclude: true,
      scope:{
        label: '@',
        icon: '@',
        route: '@'
      },
      templateUrl: 'ext-modules/rbMenu/rbMenuGroupTemplate.html',
      link: function(scope, el, attrs, ctrl){
          scope.isOpen = false;
        
          scope.closeMenu = function(){
            scope.isOpen = false;
          };
        
          scope.clicked = function(){
            scope.isOpen = !scope.isOpen;
            
            if(el.parents('.subitem-section').length == 0){
                scope.setSubmenuPosition();
            }
            
            ctrl.setOpenMenuScope(scope);
            
          };
        
          scope.isVertical = function(){
            return ctrl.isVertical() || el.parents('.subitem-section').length > 0;
          }
          
          scope.setSubmenuPosition = function(){
            var pos = el.offset();
            $('.subitem-section').css({'left':pos.left + 20, 'top':36});
          };
        
        
        
      }
  }
});