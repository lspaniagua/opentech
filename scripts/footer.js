(function() {

	/**
	 * Footer module
	 */
	var app = angular.module('testAngularWebApp.footer', []);

	/**
	 * Footer controller
	 */
	app.controller('FooterController', ['$scope', function($scope) {

		$scope.footerImage = '/images/Logo-rokk3r.png';

	}]);

})();
