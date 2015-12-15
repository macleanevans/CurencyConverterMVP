angular.module('myApp.services', [])

.factory('ExchangeRate', function ($http, $location, $window) {

  var sendInputs = function (abrev) {
    return $http({
      method: 'GET',
      url: 'https://currencyconverter.p.mashape.com/?from='+abrev.from+'&from_amount='+abrev.amount+'&to='+abrev.to,
      headers : {
        'X-Mashape-Key: mfBniDlHbRmshN6c2pcYbz7RmW5up1B7oyHjsnCpNLr82fQeTh'
      }
    })
    .then(function(resp) {
      return resp
    })
  }
  return {
    sendInputs: sendInputs
  }
})
