(function() {

	/**
	 * Buy Complete module
	 */
	var app = angular.module('testAngularWebApp.buyComplete', []);

	/**
	 * Buy Complete controller
	 */
	app.controller('BuyCompleteController', ['$scope', 'buyTable', function($scope, buyTable) {

		$scope.title = 'Books you have just purchase';
		$scope.buyTable = buyTable.get();

	}]);

})();
