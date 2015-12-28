<?php
	
	include("config.php");
	$uname=$_GET['username'];
	$password=$_GET['password'];

	mysql_query("INSERT INTO `users`(username,password,type)  
					VALUES('$uname','$password','operator')") or die(mysql_error());

?>