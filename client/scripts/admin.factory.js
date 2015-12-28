
angular.module('dannysApp')
		.factory('loginFactory',['$q','$http',function($q,$http){

		var obj={};

		

		obj.login=function(userName,password){
			var defered=$q.defer();

			$http.get('http://localhost/dannys/server/login.php?userName='+userName+'&password='+password)
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


	.factory('operatorAdminFactory',['$q','$http',function($q,$http){

		var obj={};
	

		obj.get_operator_list=function(){
			var defered=$q.defer();

			$http.get('http://localhost/dannys/server/get_operators.php')
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

			$http.get('http://localhost/dannys/server/update_operator.php?id='+id+'&username='+uname+'&password='+password)
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
			$http.get('http://localhost/dannys/server/create_operator.php?username='+uname+'&password='+password)
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

			$http.get('http://localhost/dannys/server/delete_operator.php?id='+id)
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

			$http.get('http://localhost/dannys/server/get_menu_items.php')
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

			$http.get('http://localhost/dannys/server/update_menu_item.php?id='+id+'&name='+name+'&price='+price)
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
			$http.get('http://localhost/dannys/server/create_menu_item.php?name='+name+'&price='+price)
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

			$http.get('http://localhost/dannys/server/delete_menu_item.php?id='+id)
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