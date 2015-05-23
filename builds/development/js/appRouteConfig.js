
angular.module('app').config(function($routeProvider){
  var routes = [
    {
      url: '/healingcenter',
      config: {
        template: '<rb-healing-center image="healing-center"></rb-healing-center>'
      }
    },
    {
      url: '/healingcenter?scrollTo=technology',
      config: {
        template: '<rb-healing-center image="healing-center"></rb-healing-center>'
      }
    },
    {
      url: '/locations',
      config: {
        template: '<rb-locations></rb-locations>'
      }
    },
    {
      url: '/guides',
      config: {
        template: '<rb-guides></rb-guides>'
      }
    }
  ];
  
  routes.forEach(function(route){
    $routeProvider.when(route.url, route.config);
  });
  $routeProvider.otherwise({redirectTo: '/healingcenter'});
});