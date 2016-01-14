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

		
		obj.submit_order=function(x){
			var defered=$q.defer();

			$http.post('http://192.168.0.157/dannys/server/submit_order.php?order='+JSON.stringify(x))
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


angular.module('dannysApp')
	.factory('showOrderFactory',['$q','$http',function($q,$http){

		var obj={};

		obj.getPendingOrder=function(){
			var defered=$q.defer();

			$http.get('http://192.168.0.157/dannys/server/get_orders.php')
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


		obj.changeStatus=function (orderId,itemId) {

			var defered=$q.defer();
			$http.get('http://192.168.0.157/dannys/server/update_order.php?id='+orderId+'&item_id='+itemId)
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

		}

		return obj;
	}]);


angular.module('dannysApp')
	.factory('BillingFactory',['$q','$http',function($q,$http){

		var obj={};

		obj.getSingleOrder=function(id){
			var deferred=$q.defer();

			$http.get('http://192.168.0.157/dannys/server/get_single_order.php?id='+id).then(
				function(response){
					deferred.resolve(response.data);
				},function(error){
					deferred.reject(error.data);
				});
			
			return deferred.promise;
		}

		obj.billPaid=function(id){
			var deferred=$q.defer();

			$http.get('http://192.168.0.157/dannys/server/billPaid.php?id='+id).then(
				function(response){
					deferred.resolve(response.data);
				},function(error){
					deferred.reject(error.data);
				});
			
			return deferred.promise;

		}



		return obj;
	}]);




