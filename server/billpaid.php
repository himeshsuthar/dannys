<?php
include("config.php");
$id=$_GET["id"];

mysql_query("UPDATE `order` 
				set status='paid' 
				where id=$id") or die(mysql_error());

echo "Bill Paid.";
?>