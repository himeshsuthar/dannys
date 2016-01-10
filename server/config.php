<?php
	header('Access-Control-Allow-Origin: *');
	mysql_connect("localhost","root","") or die(mysql_error());
	mysql_select_db("dannys") or die(mysql_error());


	function get_menu_item($id){
		$results=mysql_query("select * from menu_items where id=$id") or die(mysql_error());
		while($result=mysql_fetch_assoc($results)){
			return $result;
		}
	}
?>