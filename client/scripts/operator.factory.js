angular.module('dannysApp')
	
	.factory('menuItemFactory',['$q','$http',function($q,$http) {

		var obj={};

		obj.getMenuItems=function(){
			var defered=$q.defer();

			$http.get('http://192.168.0.157/dannys/server/get_menu_items.php')
			.then(

				function(response)
				{
					defered.resolve(response.data);
				}
				,
				function(error)
				{
					defered.reject(error.data);
				});


				return defered.promise;

		};
	
		return obj;

	}]);