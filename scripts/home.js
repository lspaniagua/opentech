(function() {

/**
 * Home module
 */
	var app = angular.module('testAngularWebApp.home', []);

/**
 * Home controller
 */
	app.controller('HomeController', ['$scope', 'carousel', 'buyTable', function($scope, carousel, buyTable) {

		$scope.title = 'My wish list';
		$scope.slides = {};
		$scope.buyTable = {};

		/**
		 * Get the carousel from json
		 */
	 	carousel.init(function(data) {
	 		$scope.slides = data.slides;
	 	});

		/**
		 * Get the buyTable from json
		 */
		buyTable.init(function(data) {
	 		$scope.buyTable = data.buyTable;
	 		buyTable.set($scope.buyTable);
	 	});

		/**
		 * Function to delete element
		 */
	 	$scope.delete = function(element) {
			buyTable.deleteElement(element);
	 	};

	}]);

})();
