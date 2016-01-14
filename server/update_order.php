<?php
	
	include("config.php");
	$item_id=$_GET['item_id'];
	$id=$_GET['id'];

	mysql_query("UPDATE `order` SET  
					`status`='Served'
					where id='$id' AND item_id='$item_id'") or die(mysql_error());

?>