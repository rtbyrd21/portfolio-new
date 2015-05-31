angular.module('app', ['ngRoute', 'rbFramework'])


.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
})

.directive('imageonload', function($timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
//              element.bind('click', function() {
//                element.addClass('finished-loading');
//              }
                element.bind('load', function() {
                    //call the function that was passed
                    scope.$apply(attrs.imageonload);
                    
//                    $timeout(function(){
//                      element.removeClass('finished-loading');
//                    },1000);
                });
            }
        };
    })

.directive('preserveHeight', function($timeout, $window) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
              
              
              var setHeight = function(){
              $timeout(function(){
                $('.image-not-loaded').css('height', $('.image-loaded').height());
    },1000);
              }
              
              setHeight();
              
               $($window).on('resize.preserveHeight', function(){
                    $('.image-loader').css('height', 'auto');
                    setHeight();
                });
                
            }
        };
    });
