angular.module('myApp', ['ngResource', 'ngSanitize'])
.filter('renderHTMLCorrectly', function($sce) {
	return function(stringToParse) {
		return $sce.trustAsHtml(stringToParse);
	}
});
