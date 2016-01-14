angular.module('dannysApp')
	
	.factory('Session',['$localStorage','$window','$q','$http',function($localStorage,$window,$q,$http){

		var obj={};
		function checker(){
			// alert($localStorage.name);
			
			if (typeof $localStorage.name == "undefined" || $localStorage == null){
				console.log("Redirecting with "+$localStorage.name);
				$window.location.href = "http://192.168.0.157/Dannys/client/#/";
			}
			else{
				// alert("Welcome "+$localStorage.name);
			}			
		}

		obj.check=function(){
			checker();

		}

		obj.login=function(userName,password){
			var defered=$q.defer();

			$http.get('http://192.168.0.157/dannys/server/login.php?userName='+userName+'&password='+password)
				.then(function(response){	
					defered.resolve(response.data);
				
				},
				function(error){
					defered.reject(error.data);
				});
				return defered.promise;
		}

		obj.logout=function(){
			$window.localStorage.clear();
			$window.location.reload();
		}		

		obj.getName=function(){
			return $localStorage.name;
		}
		obj.getType=function(){
			return $localStorage.type;
		}

		return obj;
	}]);