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
	$altitude = floatval($_POST[alt]);
	$alt_accuracy = floatval($_POST[altaccy]);
	$gender = strval($_POST[gdr]);
	$handi_access = boolval($_POST[han]);
	$floor = intval($_POST[flr]);
	
	$insert1 = "INSERT INTO Restrooms (Latitude, Longitude, Accuracy, Epoch_time, Altitude, Alt_accuracy, Gender, Handi_access, Floor) VALUES ('$latitude', '$longitude', '$accuracy', '$epoch_time' , '$altitude', '$alt_accuracy', '$gender', '$handi_access', '$floor')";
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