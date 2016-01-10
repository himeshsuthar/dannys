angular.module('dannysApp')
	.controller('loginCtrl',function($scope,$localStorage,$window,Session){
			
			// Session.check();
			$scope.logout=function(){
				Session.logout();
			};

			$scope.doLogin=function(){
				
				Session.login($scope.userName,$scope.password).then(function(response){
					if(response.success){
							$localStorage.name=response.name;
							$localStorage.type=response.type;
						if(response.type=="admin")
							 $window.location.href = "http://192.168.0.157/Dannys/client/#/admin";
						else
							 $window.location.href = "http://192.168.0.157/Dannys/client/#/placeOrder";
					}
					else{
						alert(response.error);
					}
				},function(error){

					alert("There seems to be some error.. Please try after some time.");
				});
				
			}
	})


	.controller('welcomeAdminCtrl',function($scope,Session,$route){
		Session.check();
		$scope.logout=function(){
			Session.logout();
		};
		$scope.name=Session.getName();	
	})
	




	.controller('menuAdminCtrl',function($scope,$localStorage,$window,menunItemAdminFactory,Session){
		$scope.menu_item_list;
			Session.check();
		$scope.logout=function(){
			Session.logout();
		};
		activate();

		//Get Section
		function activate(){
			menunItemAdminFactory.get_menu_item_list().then(function(response){
					$scope.menu_item_list=response;
				},function(error){
					alert(error.data);
				});
		}





		//Update item
		$scope.update_menu_item=function(x){
			var id=$scope.menu_item_list[x].id;
			var name=$scope.menu_item_list[x].name;
			var price=$scope.menu_item_list[x].price;
			menunItemAdminFactory.update_menu_item(id,name,price)
				.then(function(response){
					activate();
				},function(error){
					alert("Error "+error.data);
				});
		}



		//Create item
		$scope.create_menu_item=function(x){
			menunItemAdminFactory.create_menu_item(x.name,x.price)
				.then(function(response){
					activate();
					},function(error){
					alert("Error "+error.data);
				});
			
		}


		//Delete Item.

		$scope.delete_menu_item=function(x){
			var id=$scope.menu_item_list[x].id;
			menunItemAdminFactory.delete_menu_item(id)
				.then(function(response){
					activate();
				},function(error){
					alert("Error "+error.data);
				});
		}	
	})

	.controller('operatorAdminCtrl',function($scope,$localStorage,operatorAdminFactory,Session){
		Session.check();
		$scope.logout=function(){
			Session.logout();
		};

		$scope.operator_list;
		activate();
		//Get Section
		function activate(){
			operatorAdminFactory.get_operator_list().then(function(response){
				$scope.operator_list=response;
			},function(error){
				alert(error.data);
			});
		}




		//Update Operator
		$scope.update_employee=function(x){
			var id=$scope.operator_list[x].id;
			var userName = $scope.operator_list[x].name;
			var password = $scope.operator_list[x].password;
			operatorAdminFactory.update_operator(id,userName,password)
				.then(function(response){
					activate();
				},function(error){
					alert("Error "+error.data);
				});
		}



		//Create Operator
		$scope.create_operator=function(x){
			operatorAdminFactory.create_operator(x.userName,x.password)
				.then(function(response){
					activate();
				},function(error){
					alert("Error "+error.data);
				});
			
		}


		//Delete User.

		$scope.delete_employee=function(x){
			var id=$scope.operator_list[x].id;
			operatorAdminFactory.delete_operator(id)
				.then(function(response){
					activate();
				},function(error){
					alert("Error "+error.data);
				});
		}

	})



	

	.controller('summaryAdminCtrl',function($scope,Session,SummaryFactory){
		$scope.SummaryTodayShow=true;
		$scope.FromToShow=false;
		$scope.ItemWiseTotalShow=false;


		function getTotalOfDay(x){
				var total=0;
				for(var i=0;i<x.length;i++){
					total += parseInt(x[i].price);
				}
				return total;
		}

		Session.check();
		$scope.logout=function(){
			Session.logout();
		};
		getAllOrders();
		function getAllOrders(){
			var today = new Date();
		    var dd = today.getDate();
		    var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
		    if(dd<10){
		        dd='0'+dd
		    } 
		    if(mm<10){
		        mm='0'+mm
		    } 
		    var today = yyyy+'-'+mm+'-'+dd;
		    // alert(today);
		    $scope.today=today;
			SummaryFactory.getAllOrdersByDay(today)
				.then(function(response){
					$scope.orders=response;
					$scope.totalOfDay=getTotalOfDay($scope.orders);
				},function(error){

			});	
		};


		$scope.getAllOrdersFromTo=function(){
			var from=$scope.FromDate;
			var to=$scope.ToDate;

			SummaryFactory.getAllOrdersFromTo(from,to)
				.then(function(response){
					$scope.ordersFromTo=response;
					$scope.totalOfFromTo=getTotalOfDay($scope.ordersFromTo);
				},function(error){

				});	
		}


		function getAllOrdersItemwise(){

			SummaryFactory.getAllOrdersItemwise()
				.then(function(response){
					$scope.ItemWiseOrders=response;
					$scope.totalOfItemWiseOrders=getTotalOfDay($scope.ItemWiseOrders);
					$scope.list = $scope.ItemWiseOrders;
			
						


				},function(error){

				});	
		}



		$scope.toggle=function(x){
			if(x=='FromTo'){
				$scope.FromToShow=$scope.FromToShow?false:true;
			}
			else if(x=='SummaryToday'){
				$scope.SummaryTodayShow=$scope.SummaryTodayShow?false:true;
			}
			else if(x=='ItemWiseTotal'){
				getAllOrdersItemwise();
				$scope.ItemWiseTotalShow=$scope.ItemWiseTotalShow?false:true;
			}
			else{

			}

		}




		  $scope.config = {
		    itemsPerPage: 5,
		    fillLastPage: true
		  }


	});
