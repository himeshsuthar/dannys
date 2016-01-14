<?php
	include("config.php");

	if(!isset($_GET["id"])){
		echo "No ID Found.";
		die();
	}

	$id=$_GET["id"];
	$result=mysql_query("select * from `order` where id=$id") or die(mysql_error());
	$ara=array();
	$counter=0;
	while($x=mysql_fetch_assoc($result)){
		$sara["name"]=get_menu_item($x["item_id"])["name"];
		$sara["quantity"]=$x["quantity"];
		$sara["price"]=$x["price"];
		$sara["status"]=$x["status"];

		
		array_push($ara,$sara);

	}

	echo json_encode($ara);

?>