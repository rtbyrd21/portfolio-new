
angular.module('app').config(function($routeProvider){
  var routes = [
    {
      url: '/healing-center',
      config: {
        template: '<rb-healing-center image="healing-center"></rb-healing-center>'
      }
    },
    {
      url: '/nigeria',
      config: {
        template: '<rb-nigeria></rb-nigeria>'
      }
    },
    {
      url: '/smallthings',
      config: {
        template: '<rb-small-things></rb-small-things>'
      }
    },
    {
      url: '/vineyard-blog',
      config: {
        template: '<rb-vin-blog></rb-vin-blog>'
      }
    },
    {
      url: '/visible-language',
      config: {
        template: '<rb-visible-language></rb-visible-language>'
      }
    },
    {
      url: '/',
      config: {
        template: '<rb-home></rb-home>'
      }
    }
  ];
  
  routes.forEach(function(route){
    $routeProvider.when(route.url, route.config);
  });
  $routeProvider.otherwise({redirectTo: '/'});
});