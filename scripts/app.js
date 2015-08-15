/**
 * AngularJS Rokk3r Labs Test
 * @author
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('testAngularWebApp', [
  'ngRoute',
  'testAngularWebApp.header',
  'testAngularWebApp.footer',
  'testAngularWebApp.home',
  'testAngularWebApp.buyComplete'
]);

/**
 * Header directive
 */
app.directive('myHeader', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/header.html',
    controller: 'HeaderController'
  };
});

/**
 * Footer directive
 */
app.directive('myFooter', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/footer.html',
    controller: 'FooterController'
  };
});

/**
 * Factory Carousel
 */
app.factory('carousel', ['$http', function($http) {
  return {
    init: function(callback) {
      /**
       * Get the carousel from json
       */
      $http.get('api/carousel.json').success(function(data) {
        callback(data);
      });
    }
  }
}]);

/**
 * Factory Buy Table
 */
app.factory('buyTable', ['$http', function($http) {

	var buyTable = {};

	return {
    init: function(callback) {
      /**
       * Get the buyTable from json
       */
      $http.get('api/buytable.json').success(function(data) {
        callback(data);
      });
    },
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
		},
    deleteElement: function(element) {
      var index = buyTable.indexOf(element);
			buyTable.splice(index, 1);
    }
	};
}]);

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
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

/**
 * Main Controller
 */
 app.controller('testController', [function() {

 }]);
