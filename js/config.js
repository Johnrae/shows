let config = function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise('/add');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layouts.tpl.html'
    })
    .state('root.add', {
      url: '/add',
      controller: 'AddController',
      templateUrl: 'templates/add.tpl.html'
    })
  ;
  
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;