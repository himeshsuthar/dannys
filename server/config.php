<?php
	header('Access-Control-Allow-Origin: *');
	mysql_connect("localhost","root","") or die(mysql_error());
	mysql_select_db("dannys") or die(mysql_error());
	
?>