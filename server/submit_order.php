<?php

	include("config.php");

	$order=$_GET['order'];


	$order=json_decode($order);
	$size=sizeof($order);
	$ara=array();
	// $order=$order[0];
	for($i=0;$i < $size;$i++){
		$x=$order[$i];
			$single_order=array();
			foreach($x as $key => $value){
		  if($key=="item" || $key=="price" || $key=="quantity")
			{  
				$single_order[$key]=$value;

			}

		}
		array_push($ara, $single_order);

		// echo "<br>-----------------<br>";
	}


// print_r($ara);
	create_order($ara);
	function create_order($ara){

		$order_id=get_order_number()+1;
		foreach ($ara as $x) {
			mysql_query("INSERT INTO `order`(`id`,`item_id`, `quantity`, `price`) 
									VALUES($order_id,$x[item],$x[quantity],$x[price])") or die(mysql_error());
		}

	}

	function get_order_number(){
		$z=mysql_query("select max(id) as maxi from `order`");
		while($y=mysql_fetch_assoc($z)){
			return $y['maxi'];
		}
	}

?>


