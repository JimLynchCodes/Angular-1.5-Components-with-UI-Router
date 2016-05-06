(function () {
   'use strict';

   angular
      .module('icpComp')
      .config(routerConfig);

   /** @ngInject */
   function routerConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
         .state('home', {
            url: '/',
            template: "<home-page></home-page>"
         })
         .state('page1', {
         url: '/page1',
         template: "<page1></page1>"
         })
         .state('page2', {
            url: '/page2',
            template: "<page2></page2>"
         });


      $urlRouterProvider.otherwise('/');
   }

})();
