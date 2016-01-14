<?php
	include("config.php");

	$from=$_GET['from'];
	$to=$_GET['to'];

	$result=mysql_query("select name, sum(quantity) as Quantity, sum(`order`.price) as price from `order`,`menu_items` where `order`.item_id = `menu_items`.id AND `order`.status='paid' AND `order`.datetime >= '$from' AND `order`.datetime <= '$to' group by item_id") or die(mysql_error());

	$ara=array();
	$counter=0;

	while($x=mysql_fetch_assoc($result)){
	
		$sara["name"]=$x["name"];
		$sara["price"]=$x["price"];
		//$sara["datetime"]=$x["datetime"];
		array_push($ara,$sara);
	}

	echo json_encode($ara);

?>