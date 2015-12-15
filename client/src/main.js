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


          $scope.exchange ={
           from : null,
           to : null,
           from_amount : null,
           to_amount : null
          };



          $scope.getRate = function() {
            ExchangeRate.sendInputs($scope.exchange)
            .then(function(data) {
              console.log('data',data)
              console.log('data.data', data.data)
              $scope.exchange = data.data
            })
            .catch(function(err){
              console.log(err);
            })
          }

    }
  )
