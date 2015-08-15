(function() {

	/**
	 * Header module
	 */
	var app = angular.module('testAngularWebApp.header', []);

	/**
	 * Header controller
	 */
	app.controller('HeaderController', ['$scope', function($scope) {

		$scope.headerImage = '/images/Logo.png';

	}]);

})();
