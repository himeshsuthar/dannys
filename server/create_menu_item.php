<?php
	
	include("config.php");
	$name=$_GET['name'];
	$price=$_GET['price'];

	mysql_query("INSERT INTO `menu_items`(name,price)  
					VALUES('$name','$price')") or die(mysql_error());

?>