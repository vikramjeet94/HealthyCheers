angular.module('HealthyCheers')
.config(['$stateProvider', '$urlRouterProvider', 'Config', '$ionicConfigProvider',
  function($stateProvider, $urlRouteProvider, Config, $ionicConfigProvider){

      $stateProvider.state('main', {
          url: '',
          templateUrl: Config.templateUrls.commons.footerTabMenu,
          controller: 'FooterTabMenuController',
          abstract: true
      })
      .state('main.home', {
          url: '/home',
          views: {
              "homeContent": {
                  templateUrl: Config.templateUrls.tabs.home,
                  controller: 'HomeController'
              }
          }
      })
      .state('main.cart', {
          url: '/cart',
          views: {
              "cartContent": {
                  templateUrl: Config.templateUrls.tabs.cart,
                  controller: 'CartController'
              }
          }
      })
      .state('main.account', {
          url: '/account',
          views: {
              "accountContent": {
                  templateUrl: Config.templateUrls.tabs.account,
                  controller: 'AccountController'
              }
          }
      });

      $urlRouteProvider.otherwise('/home');

      // To set the position of tabs to bottom which default to top for android
      $ionicConfigProvider.tabs.position('bottom');

      // To remove the strip from selected tab on android
      $ionicConfigProvider.tabs.style('standard');

}]);
