angular.module('dannysApp')
	.controller('makeBillCtrl',function() {
		alert("Inside make bill");
	});

angular.module('dannysApp')
	.controller('placeOrderCtrl',function($scope,menuItemFactory){

		alert("Inside takeOrder");
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
		$scope.totalItems=[{id:counter, item:'', quantity:'' }];

		$scope.genNewRow=function()
		{
			counter++;
			$scope.totalItems.push({id:counter,item:'',quantity:''});
		}

		$scope.delRow=function(x)
		{
			$scope.totalItems.splice(x, 1);
		}


		$scope.getPrice=function(y)
		{
			var e = document.getElementById("myselect["+y+"]");
			var ans = e.options[e.selectedIndex].text;
			alert(ans);
		}

	});