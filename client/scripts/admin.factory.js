
angular.module('dannysApp')

	.factory('operatorAdminFactory',['$q','$http',function($q,$http){

		var obj={};
	

		obj.get_operator_list=function(){
			var defered=$q.defer();

			$http.get('http://192.168.0.157/dannys/server/get_operators.php')
				.then(function(response){	
					defered.resolve(response.data);
				
				},
				function(error){
					defered.reject(error.data);
				});
				return defered.promise;
		}

		obj.update_operator=function(id,uname,password){
			var defered=$q.defer();

			$http.get('http://192.168.0.157/dannys/server/update_operator.php?id='+id+'&username='+uname+'&password='+password)
				.then(function(response){	
					defered.resolve(response.data);
				
				},
				function(error){
					defered.reject(error.data);
				});
				return defered.promise;	
		}
	obj.create_operator=function(uname,password){
			var defered=$q.defer();
			alert(uname+' '+password);
			$http.get('http://192.168.0.157/dannys/server/create_operator.php?username='+uname+'&password='+password)
				.then(function(response){	
					defered.resolve(response.data);
				
				},
				function(error){
					defered.reject(error.data);
				});
				return defered.promise;	
		}

	obj.delete_operator=function(id){
			var defered=$q.defer();

			$http.get('http://192.168.0.157/dannys/server/delete_operator.php?id='+id)
				.then(function(response){	
					defered.resolve(response.data);
				
				},
				function(error){
					defered.reject(error.data);
				});
				return defered.promise;	
		}
		return obj;
	}])



	.factory('menunItemAdminFactory',['$q','$http',function($q,$http){

		var obj={};
	

		obj.get_menu_item_list=function(){
			var defered=$q.defer();

			$http.get('http://192.168.0.157/dannys/server/get_menu_items.php')
				.then(function(response){	
					defered.resolve(response.data);
				
				},
				function(error){
					defered.reject(error.data);
				});
				return defered.promise;
		}

		obj.update_menu_item=function(id,name,price){
			var defered=$q.defer();

			$http.get('http://192.168.0.157/dannys/server/update_menu_item.php?id='+id+'&name='+name+'&price='+price)
				.then(function(response){	
					defered.resolve(response.data);
				
				},
				function(error){
					defered.reject(error.data);
				});
				return defered.promise;	
		}
	obj.create_menu_item=function(name,price){
			var defered=$q.defer();
			$http.get('http://192.168.0.157/dannys/server/create_menu_item.php?name='+name+'&price='+price)
				.then(function(response){	
					defered.resolve(response.data);
				
				},
				function(error){
					defered.reject(error.data);
				});
				return defered.promise;	
		}

	obj.delete_menu_item=function(id){
			var defered=$q.defer();

			$http.get('http://192.168.0.157/dannys/server/delete_menu_item.php?id='+id)
				.then(function(response){	
					defered.resolve(response.data);
				
				},
				function(error){
					defered.reject(error.data);
				});
				return defered.promise;	
		}
		return obj;
	}])




	.factory('SummaryFactory',['$q','$http',function($q,$http){

		var obj={};
		


		obj.getAllOrdersByDay=function(x){

			var defered=$q.defer();
			$http.get('http://192.168.0.157/dannys/server/get_all_orders_by_day.php?date='+x)
				.then(function(response){	
					defered.resolve(response.data);
				},
				function(error){
					defered.reject(error.data);
				});
				return defered.promise;	
		}
		obj.getAllOrdersFromTo=function(x,y){

			var defered=$q.defer();
			$http.get('http://192.168.0.157/dannys/server/get_all_orders_from_to.php?from='+x+'&to='+y)
				.then(function(response){	
					defered.resolve(response.data);
				},
				function(error){
					defered.reject(error.data);
				});
				return defered.promise;	
		}
		obj.getAllOrdersItemwise=function(x,y){

			var defered=$q.defer();
			$http.get('http://192.168.0.157/dannys/server/get_all_orders_Itemwise.php')
				.then(function(response){	
					defered.resolve(response.data);
				},
				function(error){
					defered.reject(error.data);
				});
				return defered.promise;	
		}

		return obj;
	}]);