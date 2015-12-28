<?php
	
	include("config.php");
	$id=$_GET['id'];

	mysql_query("delete from menu_items where id='$id'") or die(mysql_error());

?>