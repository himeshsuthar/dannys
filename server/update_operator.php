<?php
	
	include("config.php");
	$uname=$_GET['username'];
	$password=$_GET['password'];
	$id=$_GET['id'];

	mysql_query("UPDATE `users` SET  
					`username`='$uname',
					password='$password' 
					where id='$id'") or die(mysql_error());

?>