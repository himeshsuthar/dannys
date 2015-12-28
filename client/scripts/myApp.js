angular.module('dannysApp',['ngRoute','ngStorage']);


angular.module('dannysApp').config(['$routeProvider',function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl:"partials/login.html",
			controller:"loginCtrl"
		})

		.when('/placeOrder',{
			templateUrl:"partials/operator/placeOrder.html",
			controller:"placeOrderCtrl"
		})
		.when('/admin',{
			templateUrl:"partials/admin/welcomeAdmin.html",
			controller:"welcomeAdminCtrl"
		})
		.when('/admin/operator',{
			templateUrl:"partials/admin/operator.html",
			controller:"operatorAdminCtrl"
		})
		.when('/admin/menu',{
			templateUrl:"partials/admin/menu.html",
			controller:"menuAdminCtrl"
		})
		.when('/admin/summary',{
			templateUrl:"partials/admin/summary.html",
			controller:"summaryAdminCtrl"
		});
}]);