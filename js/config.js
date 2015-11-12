let config = function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layouts.tpl.html'
    })
    .state('root.list', {
      url: '/',
      controller: 'ListController',
      templateUrl: 'templates/list.tpl.html'
    })
    .state('root.add', {
      url: '/add',
      controller: 'AddController',
      templateUrl: 'templates/add.tpl.html'
    })
    .state('root.single', {
      url: '/shows/:showId',
      controller: 'SingleController',
      templateUrl: 'templates/single.tpl.html'
    })
    .state('root.edit', {
      url: '/edit/:showId',
      controller: 'EditController',
      templateUrl: 'templates/edit.tpl.html'
    })
  ;
  
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;