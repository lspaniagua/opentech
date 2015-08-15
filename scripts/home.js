(function() {

/**
 * Home module
 */
	var app = angular.module('testAngularWebApp.home', []);

/**
 * Home controller
 */
	app.controller('HomeController', ['$scope', '$http', 'buyTable', function($scope, $http, buyTable) {

		$scope.title = 'My wish list';
		$scope.buyTable = {};
		$scope.totalPrice = 0;
		$scope.slides = {};

		/**
		 * Get the carousel from json
		 */
	 	$http.get('api/carousel.json').success(function(data) {
	 		$scope.slides = data.slides;
	 	});

		/**
		 * Get the buyTable from json
		 */
		$http.get('api/buytable.json').success(function(data) {
	 		$scope.buyTable = data.buyTable;
	 		buyTable.set($scope.buyTable);
	 		$scope.totalPrice = buyTable.getTotal();
	 		//$scope.getTotal();
	 	});

		/**
		 * Function to delete a book
		 */
	 	$scope.delete = function(element) {
			var index = $scope.buyTable.indexOf(element);
			$scope.buyTable.splice(index, 1);   
			$scope.totalPrice = buyTable.getTotal();
	 	};

	}]);

})();