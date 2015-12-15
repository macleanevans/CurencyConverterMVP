'use strict';

angular.module('myApp', [
    'ui.router'
  ])

 .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'CurrencyExchange'
        })

        .state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        });

})
.factory('ExchangeRate', function ($http, $location, $window) {

  var sendInputs = function (abrev) {
    console.log('abrev', abrev)
    return $http({
      method: 'GET',
      url: 'https://currencyconverter.p.mashape.com/?from='+abrev.from+'&from_amount='+abrev.from_amount+'&to='+abrev.to,
      headers : {
        'X-Mashape-Key': 'mfBniDlHbRmshN6c2pcYbz7RmW5up1B7oyHjsnCpNLr82fQeTh'
      }
    })
    console.log($http.url)
    .then(function(res) {
      console.log('response',res)
      return res
      })
  }
  return {
    sendInputs: sendInputs
  }
})  ;
