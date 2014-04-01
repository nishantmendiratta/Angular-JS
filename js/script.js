//Define an angular module for our app
var demoApp = angular.module('demoApp', []);

//Define Routing for app
//Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
//Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController


demoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
	templateUrl: './Partials/View1.html',
	controller: 'SimpleController'
      }).
      when('/ShowOrders', {
	templateUrl: './Partials/View2.html',
	controller: 'SimpleController'
      }).
      otherwise({
	redirectTo: '/'
      });
}]);


demoApp.controller('SimpleController', function($scope) {
	
	$scope.message = 'This is Add new order screen';
	
});


demoApp.controller('SimpleController', function($scope) {

	$scope.message = 'This is Show orders screen';

});
