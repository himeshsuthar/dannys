angular.module('dannysApp',['ngRoute','ngStorage','ngCookies','720kb.datepicker','angularUtils.directives.dirPagination']);


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
		.when('/operator/showOrder',{
			templateUrl:"partials/operator/showOrder.html",
			controller:"showOrderCtrl"
		})
		.when('/operator/makeBill',{
			templateUrl:"partials/operator/makeBill.html",
			controller:"makeBillCtrl"
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