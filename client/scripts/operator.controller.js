angular.module('dannysApp')


	.controller('showOrderCtrl',function($scope,$localStorage,showOrderFactory,menuItemFactory,Session,$window){



		Session.check();
		$scope.logout=function(){
			Session.logout();
		};


		$scope.orders={};
		activate();





		function activate(){
		showOrderFactory.getPendingOrder()
		.then(
				function(response){
					$scope.orders=response;
					// console.log(JSON.stringify($scope.orders));
				},
				function(error){
					alert(error.data);
				}
			);
		}

		$scope.checkMakeBill=function(x){
			// console.log("Logging x"+x);
			for(var i=0;i<x.length;i++){
			
				if(x[i]['status']=="pending"){
					console.log(x[i]["status"]);
					return false;
				}else{
					continue;
				}
			}
			return true;
		}

		$scope.makeBill=function(id){
			if($localStorage.idToBill==null || $localStorage.idToBill=='undefined'){

				$localStorage.idToBill=id;
				console.log("idToBil="+id);
			}
			else{
				alert("Previous Bill Not Paid..");
			}

			$window.location.href="http://192.168.0.157/Dannys/client/#/operator/makeBill";

		}

		$scope.sortOrder=function(y)
		{
			$scope.sort=y;
		}


		$scope.menuItems={};

		menuItemFactory.getMenuItems()
		.then(
				function(response){
					$scope.menuItems=response;
				},

				function(error){
					alert(error.data);
				}
			);		


		$scope.getName=function(y)
		{
			var length1=$scope.menuItems.length;
			for(i=0;i<length1;i++)
			{
				if(y==$scope.menuItems[i].id)
				{
					return $scope.menuItems[i].name;
				}
			}
		}


		$scope.changeStatus=function(orderId,itemId)
		{
			showOrderFactory.changeStatus(orderId,itemId)
			.then(
					function(response){
						activate();
					},

					function(error){
						alert(error.data);
					}
				);

		}





	});



angular.module('dannysApp')
	.controller('placeOrderCtrl',function($scope,$window,menuItemFactory,Session){

		

		Session.check();
		$scope.logout=function(){
			Session.logout();
		};


		$scope.menuItems={};

		menuItemFactory.getMenuItems()
		.then(
				function(response){
					$scope.menuItems=response;
				},

				function(error){
					alert(error.data);
				}
			);		

		var counter=0;
		$scope.totalItems=[{id:counter, item:'', quantity:1, price:'0', total:'' }];

		$scope.genNewRow=function()
		{
			counter++;
			$scope.totalItems.push({id:counter,item:'',quantity:1, price:'', total:'0'});
		}

		$scope.delRow=function(x)
		{
			$scope.totalItems.splice(x, 1);
		}


		$scope.getPrice=function(y)
		{
			var e = document.getElementById("myselect["+y+"]");
			var ans = e.options[e.selectedIndex].text;

			var length1=$scope.menuItems.length;

			for (var i=0;i<length1;i++)
			{
				if($scope.menuItems[i].name==ans)
				{
					$scope.totalItems[y].total=$scope.menuItems[i].price;
				}
			}
			
			$scope.totalItems[y].price=$scope.totalItems[y].total*$scope.totalItems[y].quantity;
			
		}


		$scope.updateTotal=function(y)
		{
			$scope.totalItems[y].price=$scope.totalItems[y].total*$scope.totalItems[y].quantity;
		}

		$scope.submit_order=function(y)
		{
			
			console.log($scope.totalItems);

			menuItemFactory.submit_order($scope.totalItems);
			console.log("Redirecting Now.");
			$window.location.href = 'http://192.168.0.157/Dannys/client/#/operator/showOrder';

		}





	});


angular.module('dannysApp')
	.controller('makeBillCtrl',function($scope,$localStorage,$window,BillingFactory){


		Session.check();
		$scope.logout=function(){
			Session.logout();
		};

		$scope.id=$localStorage.idToBill;
		activate();
		function activate(){
			BillingFactory.getSingleOrder($scope.id).then(function(response){
				$scope.orders=response;
				// console.log($scope.orders);
			},function(error){
				alert("Sorry! You got some error."+error.data);
			});

		}
		$scope.billPaid=function(){
			BillingFactory.billPaid($scope.id)
				.then(function(response){
					alert("Bill Paid.");
					$localStorage.idToBill="undefined";
					$window.location.href="http://192.168.0.157/Dannys/client/#/operator/showOrder";

				},function(error){
					alert("ERROR! Bill can not be paid");
				});
		}

	});

