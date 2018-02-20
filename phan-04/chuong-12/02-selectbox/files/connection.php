<?php
	$link = mysql_connect("localhost", "root", "");

	if (!$link) {
		echo "Could not connect to mySQL";
		exit;
	}

	if (!mysql_select_db("location", $link)) {
		echo "Could not connect to database";
		exit;
	}

	mysql_query("set names 'utf8'", $link);
?>