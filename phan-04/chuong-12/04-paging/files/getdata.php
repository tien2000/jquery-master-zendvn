<?php
	include("connection.php");

	// echo "<pre>";
	// print_r($_GET);
	// echo "</pre>";
	
	$type = (string)$_GET["type"];
	//=============================================
	//Lay tong so trang trong database
	//=============================================
	if($type == "count"){
		$items = (int)$_GET["items"];
		$sql = 'SELECT COUNT(id) 
				FROM `products` 
				WHERE `status` = 1';
				
		$result 	= mysqli_query($conn, $sql);
		$totalItem 	= mysqli_fetch_row($result); 
		$pages		= $totalItem[0]/$items;
		$total 		= array("total" => 0);

		$tmp = explode(".", $pages);

		if (count($tmp) > 1) {
			$pages = $tmp[0] + 1;
		} else{
			$pages = $tmp[0];
		}

		$total["total"] = $pages;

		echo json_encode($total);
	}

	//====================================================
	//Lấy các phần tử tương ứng trong trang hiện thời.
	//====================================================
	if($type == "list"){
		// echo "<pre>";
		// print_r($_POST);
		// echo "</pre>";

		// LIMIT offet, items
		// page: 1 => 0, 6
		// page: 2 => 6, 6
		// page: 3 => 12, 6
		
		$items 			= (int)$_POST["items"];
		$page 			= (int)$_POST["page"];
		$offset 		= ($page - 1) * $items;
		
		$sql = "SELECT `id`, `name`
				FROM `products`
				WHERE `status` = 1
				ORDER BY `id` ASC				
				LIMIT " . $offset . "," . $items;

		$result = mysqli_query($conn, $sql);
		$book = array();

		while ($row = mysqli_fetch_assoc($result)) {
			$book[] = $row;
		}

		echo json_encode($book);

		// echo "<pre>";
		// print_r($book);
		// echo "</pre>";
	}

	//====================================================
	//Lấy 1 phần tử đứng sau id cuối cùng.
	//====================================================
	if($type == "one"){
		$lastID = (int)$_GET["id"];

		$sql = "SELECT `id`, `name`
				FROM `products`
				WHERE `status` = 1
				AND `id` > ". $lastID ."	
				LIMIT 1";

		$result = mysqli_query($conn, $sql);
		$book = array();
		$book = mysqli_fetch_assoc($result);

		echo json_encode($book);
	}

	//====================================================
	//Delete 1 phần tử.
	//====================================================
	if($type == "delete"){
		$itemID = (int)$_GET["id"];

		$sql = "DELETE
				FROM `products`
				WHERE `id` = ". $itemID;

		$result = mysqli_query($conn, $sql);
	}
?>


















