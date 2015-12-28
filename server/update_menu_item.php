<?php
	
	include("config.php");
	$name=$_GET['name'];
	$price=$_GET['price'];
	$id=$_GET['id'];

	mysql_query("UPDATE `menu_items` SET  
					`name`='$name',
					price='$price' 
					where id='$id'") or die(mysql_error());

?>