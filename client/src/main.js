'use strict';


/*angular.module('myApp')
  .controller('MainCtrl', ['$scope', function($scope) {
  	$scope.welcome = 'Currency Converter';
  	$scope.buttonText = 'This is your Button';
  }]);*/


angular.module('myApp')

.controller('CurrencyExchange', function($scope, $location, ExchangeRate) {

  $scope.data = [{ country: 'Australian Dollar',
                    abbrev: 'AUD',
                 },
                 { country: 'Brazillian Real',
                   abbrev: 'BRL'
                 },
                 { country: 'Canadian Dollar',
                   abbrev: 'CAD'
                 },
                 { country: 'Czech Koruna',
                   abbrev: 'CZK'
                 },
                 { country: 'Danish Krone',
                   abbrev: 'DKK'
                 },
                 { country: 'Euro',
                   abbrev:  'EUR'
                 },
                 { country: 'Hong Kong Dollar',
                   abbrev: 'HKD'
                 },
                 { country: 'Hungarian Forint',
                   abbrev: 'HUF'
                 },
                 { country: 'Israeli New Sheqel',
                   abbrev: 'ILS'
                 },
                 { country: 'Japanese Yen',
                   abbrev: 'JPY'
                 },
                 { country: 'Malaysian Ringgit',
                   abbrev: 'MYR'
                 },
                 { country: 'Mexican Peso',
                   abbrev: 'MXN'
                 },
                 { country: 'Norwegian Krone',
                   abbrev: 'NOK'
                 },
                 { country: 'New Zealand Dollar',
                   abbrev: 'NZD'
                 },
                 { country: 'Phillippine Peso',
                   abbrev: 'PHP'
                 },
                 { country: 'Polish Zloty',
                   abbrev: 'PLN'
                 },
                 { country: 'Pound Sterling',
                   abbrev: 'GBP'
                 },
                 { country: 'Russian Ruble',
                   abbrev: 'RUB'
                 },
                 {country: 'Singapore Dollar',
                   abbrev: 'SGD'
                 },
                 {country: 'Swedish Krona',
                   abbrev: 'SEK'
                 },
                 {country: 'Swiss Franc',
                   abbrev: 'CHF'
                 },
                 {country: 'Taiwan New Dollar',
                   abbrev: 'TWD'
                 },
                 {country: 'Thai Baht',
                   abbrev: 'THB'
                 },
                 {country: 'Turkish Lira',
                   abbrev: 'TRY'
                 },
                 {country: 'U.S. Dollar',
                   abbrev: 'USD'
                 }
                  ];

           $scope.currency = ['USD', 'TRY', 'THB', 'TWD', 'CHF', 'SEK', 'SGD', 'RUB', 'GBP', 'PLN', 'PHP', 'NZD', 'NOK', 'MXN', 'MYR', 'JPY', 'ILS', 'HUF', 'HKD', 'EUR', 'DKK', 'CZK', 'CHF', 'CAD', 'BRL', 'AUD']


          $scope.exchange ={
           from : null,
           to : null,
           from_amount : null,
           to_amount : null
          };

          $scope.destination = null;
          $scope.url = {};

          $scope.loading = false;


          $scope.getRate = function() {

            if($scope.currency.indexOf($scope.exchange.from) === -1) {
             return  alert($scope.exchange.from + " is not a supported currency")
            } else if ($scope.currency.indexOf($scope.exchange.to) === -1) {
              return alert($scope.exchange.to + " is not a supported currency")
            } else {
            $scope.loading = true;
            ExchangeRate.sendInputs($scope.exchange)
            .then(function(data) {
              console.log('data',data)
              console.log('data.data', data.data)
              $scope.exchange = data.data
              $scope.destination = {
                from:'https://www.google.com/?gws_rd=ssl#q=' + $scope.exchange.from+"+currency&tbm=nws",
                to: 'https://www.google.com/?gws_rd=ssl#q=' + $scope.exchange.to+"+currency&tbm=nws"
              }
              $scope.loading = false
            })
            .catch(function(err){
              console.log(err);
            })
          }
        }

          $scope.openNewTab = function() {
            $scope.url.from = $scope.destination.from
            $scope.url.to = $scope.destination.to
          }



          //make another one of these for "to" and change the html

    }
  )
