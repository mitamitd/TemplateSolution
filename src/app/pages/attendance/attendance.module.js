/**
 * @author v.lugovsky
 * created on 21.12.2015
 */
(function () {
  'use strict';


  angular.module('BlurAdmin.pages.attendance', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('attendance', {
          url: '/attendance',
          templateUrl: 'app/pages/attendance/tabs.html',
          title: 'Attendance',
          sidebarMeta: {
              icon: 'ion-android-home',
            order: 5,
          },
        });
  }

})();
