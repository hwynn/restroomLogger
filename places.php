<?php

	$mysqli = new mysqli("mysql.eecs.ku.edu", "hwynn", "KarpetSharks!", "hwynn");
	/* check connection */
	if ($mysqli->connect_errno) {
		printf("Connect failed: %s\n", $mysqli->connect_error);
		exit();
	}

	$latitude = floatval($_POST[lat]);
	$longitude = floatval($_POST[long]);
	$accuracy = intval($_POST[accy]);
	$epoch_time = intval($_POST[t]);
	
	$insert1 = "INSERT INTO Places (Latitude, Longitude, accuracy, epoch_time) VALUES ('$latitude', '$longitude', '$accuracy', '$epoch_time')";
	//Did it work?
	if($result1 = $mysqli->query($insert1)){
		printf("added new location into the database.\n");
		$result1->free();
	}
	else{
		printf("I don't think it worked. =( \n");
	}

	/* close connection */
	$mysqli->close();
?>