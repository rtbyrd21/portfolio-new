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

.directive('preserveHeight', function($timeout, $window, $location) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
              
              
              var setHeight = function(){
                  $timeout(function(){
                    $('.image-not-loaded').css('height', $('.image-loaded').height());
                    $('.image-viewer').css('max-height', $('.image-viewer').height());
                  },1000);
              }
              
              
              var setImageViewerHeight = function(){
                $('.image-viewer').css('max-height', $('.image-viewer').height());
              }
              
               var prevNumber;
               $($window).on('resize.preserveHeight', function(){
                    var sameNumber;
                    $('.image-loader').css('height', 'auto');
                    setImageViewerHeight();
                    setHeight();
                    var checkNumber = $('.image-viewer').height();
                    if(checkNumber === prevNumber){
                      $('.image-viewer').css('max-height', '100%');
                    };
                    $timeout(function(){
                      prevNumber = checkNumber;
                    },10);
                });
              
              
                
              
              scope.$on('rb-menu-orientation-changed-event', function(evt, data){
                   $('.image-viewer').css('max-height', '100%');
                    $('.image-loader').css('height', 'auto');
                    setImageViewerHeight();
                    setHeight();
              });
              
              scope.$on('$locationChangeSuccess', function(evt, data){
                $timeout(function(){
                setImageViewerHeight();
                },1000)  
              });
              
              
              
              $timeout(function(){
              setHeight();
              setImageViewerHeight();
              },1000)

            }
        };
    })



.directive("scroll", function ($window, $parse) {
    return{
    scope:{},
    link: function (scope, element, attrs) {
 
        function getScrollOffsets(w) {
 
            // Use the specified window or the current window if no argument 
            w = w || window;
 
            // This works for all browsers except IE versions 8 and before
            if (w.pageXOffset != null) return {
                x: w.pageXOffset,
                y: w.pageYOffset
            };
 
        }
 
        angular.element($window).bind("scroll", function (e) {
            var offset = getScrollOffsets($window);
             if (offset.y >= 10) {
                 e.preventDefault();
                 e.stopPropagation();
               
                 element.removeClass('not-in-view');
                 element.addClass('in-view');
                 scope.boolChangeClass = true;
             } else {
                 e.preventDefault();
                 e.stopPropagation();
                 element.removeClass('in-view');
                 element.addClass('not-in-view');
                  scope.boolChangeClass = false;
             }
//            scope.$apply();
        });
    }
};
})
