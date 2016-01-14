<?php
	include("config.php");
	$result=mysql_query("select * from `order` where status='paid'") or die(mysql_error());
	$ara=array();
	$counter=0;

	while($x=mysql_fetch_assoc($result)){
	
		$sara["name"]=get_menu_item($x["item_id"])["name"];
		$sara["quantity"]=$x["quantity"];
		$sara["price"]=$x["price"];
		$sara["status"]=$x["status"];
		$sara["datetime"]=$x["datetime"];
		array_push($ara,$sara);
	}

	echo json_encode($ara);

?>