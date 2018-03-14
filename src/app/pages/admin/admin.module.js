/**
 * @author v.lugovsky
 * created on 21.12.2015
 */
(function () {
  'use strict';


  angular.module('BlurAdmin.pages.admin', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('admin', {
          url: '/admin',
          templateUrl: 'app/pages/admin/inputs.html',
          title: 'Admin',
          sidebarMeta: {
              icon: 'ion-android-home',
            order: 10,
          },
        });
  }

})();
