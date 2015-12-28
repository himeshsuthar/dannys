<?php
	include("config.php");

	$result=mysql_query("select * from menu_items");
	$ara=array();
	while($x=mysql_fetch_assoc($result)){
		$item=array();

		$item["id"]=$x['id'];
		$item["name"]=$x['name'];
		$item["price"]=$x['price'];
		array_push($ara, $item);
	}

	echo json_encode($ara);
?>