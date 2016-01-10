<?php
	
	include("config.php");


		$result=mysql_query("select name, sum(quantity) as Quantity, sum(`order`.price) as price from `order`,`menu_items` where `order`.item_id=`menu_items`.id group by item_id") or die(mysql_error());
		$ara=array();
		while($i=mysql_fetch_assoc($result)){
			array_push($ara,$i);
		}
		echo json_encode($ara);
?>