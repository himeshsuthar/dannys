<?php
	include("config.php");
// error_reporting(0);
	$orders=mysql_query("SELECT DISTINCT  `id` from `order` where status!='paid'") or die(mysql_error());
	$orderId=array();
	while($order=mysql_fetch_assoc($orders)){
		array_push($orderId,$order['id']);
	}

	function get_order_by_id($id)
	{
		$ara=array();
		$results=mysql_query("select * from `order` where id='$id'  ORDER BY `order`.`item_id`");
		
		while($x=mysql_fetch_assoc($results)){
			$sara["item_id"]=$x["item_id"];
			$sara["quantity"]=$x["quantity"];
			$sara["price"]=$x["price"];
			$sara["status"]=$x["status"];
			array_push($ara,$sara);
		}
		return $ara;

	}
	$pura=array();
	for($i=0;$i<sizeof($orderId);$i++){
		$nara["id"]=$orderId[$i];
		$nara["total_orders"]=get_order_by_id($orderId[$i]);
		array_push($pura,$nara);
	}


	echo json_encode($pura);
?>