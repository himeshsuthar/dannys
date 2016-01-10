<?php
	include("config.php");

	$date=$_GET['date'];

	$result=mysql_query("select * from `order` where status='paid' and datetime like '$date%'") or die(mysql_error());
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