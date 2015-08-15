/**
 * AngularJS Rokk3r Labs Test
 * @author 
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('testAngularWebApp', [
  'ngRoute',
  'testAngularWebApp.home',
  'testAngularWebApp.buyComplete'
]);

/**
 * Factory Buy Table
 */
app.factory('buyTable', function($http) {

	var buyTable = {};

	return {
		get: function() {
			return buyTable;
		},
		set: function(value) {
			buyTable = value;
		},
		getTotal: function() {
	 		var totalPrice = 0;
		  angular.forEach(buyTable, function(value) {
		  	totalPrice += parseInt(value.price);
		  });
		  //buyTable.setBuyTable($scope.buyTable);
		  return totalPrice;
		}
	};
});

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/buy_complete', {
      templateUrl: 'views/buy_complete.html',
      controller: 'BuyCompleteController'
    });
}]);

/**
 * Main Controller
 */
 app.controller('testController', ['$http', function($http) {

 	this.logo = '/images/Logo.png';
 	this.footer = '/images/Logo-rokk3r.png';

 }]);