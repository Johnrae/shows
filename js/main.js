import angular from 'angular';
import 'angular-ui-router';

import config from './config'; 

import AddController from './controllers/add.controller';
import ListController from './controllers/list.controller';

import ShowService from './services/show.service';



angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': '74xQBY2qJY9j5tWdMxsx2OiRQprj9UghtWn2VciK',
        'X-Parse-REST-API-Key': 'dFRbvNInDdXWwF7r9sOyJbUMjAvGwBQl3yOtSpAR'
      }
    }
  })
  .config(config)
  .controller('AddController', AddController)
  .controller('ListController',ListController)
  .service('ShowService',ShowService)
;