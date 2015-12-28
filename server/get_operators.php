<?php
	include("config.php");

	$result=mysql_query("select * from users where type='operator'");
	$ara=array();
	while($x=mysql_fetch_assoc($result)){
		$item=array();

		$item["id"]=$x['id'];
		$item["name"]=$x['username'];
		$item["password"]=$x['password'];
		array_push($ara, $item);
	}
	echo json_encode($ara);
?>