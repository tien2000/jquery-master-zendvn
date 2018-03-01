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
		$totalItem 		= mysqli_fetch_row($result); 
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

		// echo "<pre>";
		// print_r($tmp);
		// echo "</pre>";

		// echo "<pre>";
		// print_r($pages);
		// echo "</pre>";
	}
?>


















