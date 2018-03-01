<?php
	$conn = mysqli_connect("localhost", "root", "");

	if (!$conn) {
		echo "Could not connect to mySQL";
		exit;
	}

	if (!mysqli_select_db($conn, "books")) {
		echo "Could not connect to database";
		exit;
	}

	mysqli_query($conn, "set names 'utf8'");
?>