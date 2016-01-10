<?php
	include("config.php");

	$from=$_GET['from'];
	$to=$_GET['to'];

	$result=mysql_query("select * from `order` where status='paid' and datetime >= '$from' and datetime <= '$to'") or die(mysql_error());

	$ara=array();
	$counter=0;

	while($x=mysql_fetch_assoc($result)){
	
		$sara["name"]=get_menu_item($x["item_id"])["name"];
		$sara["price"]=$x["price"];
		$sara["datetime"]=$x["datetime"];
		array_push($ara,$sara);
	}

	echo json_encode($ara);

?>