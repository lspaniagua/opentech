(function() {

	var app = angular.module('testAngularWebApp.buyComplete', []);

	app.controller('BuyCompleteController', ['$scope', 'buyTable', function($scope, buyTable) {

		$scope.title = 'Books you have just purchase';
		$scope.buyTable = buyTable.get();
		$scope.totalPrice = buyTable.getTotal();

	}]);

})();