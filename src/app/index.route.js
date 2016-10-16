(function() {
      'use strict';

      angular
          .module('nordic')
          .config(routerConfig);

      /** @ngInject */
      function routerConfig($stateProvider, $locationProvider, $urlRouterProvider,$breadcrumbProvider) {
        $breadcrumbProvider.setOptions({
          template: 'bootstrap3'
        });

        $stateProvider

      .state('index', {
        abstract: true,
        url: "/index",
        templateUrl: "app/components/common/content.html"
      })
      .state('index.main', {
        url: "/main",
        templateUrl: "app/main/main.html",
        data: { pageTitle: 'Multimedia Nordic AS' },
        ncyBreadcrumb: {
          label: 'Home'
        }
      });

    $urlRouterProvider.otherwise('/index/main');

  }

})();
