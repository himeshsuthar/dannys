angular.module('dannysApp')
	.controller('loginCtrl',function($scope,loginFactory,$localStorage,$window){
		
			$scope.doLogin=function(){
				
				loginFactory.login($scope.userName,$scope.password).then(function(response){
					if(response.success){
							$localStorage.name=response.name;
							$localStorage.type=response.type;
						if(response.type=="admin")
							 $window.location.href = "http://localhost/Dannys/client/#/admin";
						else
							 $window.location.href = "http://localhost/Dannys/client/#/placeOrder";
					}
					else{
						alert(response.error);
					}
				},function(error){

					alert("There seems to be some error.. Please try after some time.");
				});
				
			}
	})


	.controller('welcomeAdminCtrl',function($scope,$localStorage,$window){
		$scope.name=$localStorage.name;	
	})
	

	.controller('menuAdminCtrl',function($scope,$localStorage,$window,menunItemAdminFactory){
		$scope.menu_item_list;

		//Get Section
		menunItemAdminFactory.get_menu_item_list().then(function(response){
			$scope.menu_item_list=response;
		},function(error){
			alert(error.data);
		});





		//Update item
		$scope.update_menu_item=function(x){
			var name=document.getElementById('name['+x+']').value;
			var price=document.getElementById('price['+x+']').value;
			var id=$scope.menu_item_list[x].id;
			menunItemAdminFactory.update_menu_item(id,name,price)
				.then(function(response){
					menunItemAdminFactory.get_menu_item_list();
				},function(error){
					alert("Error "+error.data);
				});
		}



		//Create item
		$scope.create_menu_item=function(x){
			menunItemAdminFactory.create_menu_item(x.name,x.price)
				.then(function(response){
					menunItemAdminFactory.get_menu_item_list();
				},function(error){
					alert("Error "+error.data);
				});
			
		}


		//Delete Item.

		$scope.delete_menu_item=function(x){
			var id=$scope.menu_item_list[x].id;
			menunItemAdminFactory.delete_menu_item(id)
				.then(function(response){
					menunItemAdminFactory.get_menu_item_list();
				},function(error){
					alert("Error "+error.data);
				});
		}	
	})

	.controller('summaryAdminCtrl',function($scope,$localStorage,$window){
		alert("menu ctrl loaded");	
	})

	.controller('operatorAdminCtrl',function($scope,$localStorage,operatorAdminFactory){
		$scope.operator_list;

		//Get Section
		operatorAdminFactory.get_operator_list().then(function(response){
			$scope.operator_list=response;
		},function(error){
			alert(error.data);
		});





		//Update Operator
		$scope.update_employee=function(x){
			var userName=document.getElementById('userName['+x+']').value;
			var password=document.getElementById('password['+x+']').value;
			// alert(userName+' '+password);
			var id=$scope.operator_list[x].id;
			operatorAdminFactory.update_operator(id,userName,password)
				.then(function(response){
					operatorAdminFactory.get_operator_list();
				},function(error){
					alert("Error "+error.data);
				});
		}



		//Create Operator
		$scope.create_operator=function(x){
			operatorAdminFactory.create_operator(x.userName,x.password)
				.then(function(response){
					operatorAdminFactory.get_operator_list();
				},function(error){
					alert("Error "+error.data);
				});
			
		}


		//Delete User.

		$scope.delete_employee=function(x){
			var id=$scope.operator_list[x].id;
			operatorAdminFactory.delete_operator(id)
				.then(function(response){
					operatorAdminFactory.get_operator_list();
				},function(error){
					alert("Error "+error.data);
				});
		}

	});
