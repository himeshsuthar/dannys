<?php
include("config.php");
	
$uname=$_GET['userName'];
$password=$_GET['password'];

$ara=array();

if(isset($uname)&&isset($password)){
	$rows=mysql_query("select * from users where username='$uname' AND password='$password'") or die(mysql_error());
	if(mysql_num_rows($rows)==1){

		while($x = mysql_fetch_assoc($rows)){
			//array_push($ara, array("name" => $x['username']));
			$ara["name"]=$x['username'];
			$ara["type"]=$x['type'];
			$ara["success"]=true;
			$ara["error"]="none";
			break;	
		}
	}
	else{
		$ara["success"]=false;
		$ara["error"]="No such user found";

	}
}
else{
		$ara["success"]=false;
		$ara["error"]="User name or password undefined";
}

		echo json_encode($ara);
?>