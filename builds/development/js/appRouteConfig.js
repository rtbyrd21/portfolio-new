
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
      url: '/illumination-site',
      config: {
        template: '<rb-illumination-site></rb-illumination-site>'
      }
    },
    {
      url: '/about',
      config: {
        template: '<rb-about></rb-about>'
      }
    },
    {
      url: '/tempo-vices',
      config: {
        template: '<rb-tempo-vices></rb-tempo-vices>'
      }
    },
    {
      url: '/tempo-future',
      config: {
        template: '<rb-tempo-future></rb-tempo-future>'
      }
    },
    {
      url: '/tempo-generation',
      config: {
        template: '<rb-tempo-generation></rb-tempo-generation>'
      }
    },
    {
      url: '/coffey-communications',
      config: {
        template: '<rb-coffey-communications></rb-coffey-communications>'
      }
    },
    {
      url: '/summit-media',
      config: {
        template: '<rb-summit-media></rb-summit-media>'
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