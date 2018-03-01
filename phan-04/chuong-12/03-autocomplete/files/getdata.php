<?php
	include("connection.php");

	echo "<pre>";
	print_r($_POST);
	echo "</pre>";

	$keywords = (string)$_POST["keywords"];
	$limit    = (int)$_POST["limit"];

	$sql = "SELECT `id`, `name`
			FROM `products`
			WHERE `status` = 1
			AND `name` LIKE '%{$keywords}%'
			ORDER BY `order` ASC, `name` ASC
			LIMIT " . $limit;

	$result = mysqli_query($conn, $sql);
	$books  = array();

	while ($row = mysqli_fetch_assoc($result)) {
		$books[] = $row;
	}

	$booksObj = json_encode($books);

	echo $booksObj;

	// echo "<pre>";
	// print_r($books);
	// echo "</pre>";

	// echo $keywords;
	// echo $limit . "<br>";
	// echo $sql;	
?>