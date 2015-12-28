<?php
	
	include("config.php");
	$id=$_GET['id'];

	mysql_query("delete from users where id='$id'") or die(mysql_error());

?>