<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<?php
	include("connection.php");
	/* ===========================
	 * Đưa dữ liệu trong bảng Cities vào 1 mảng
	 * ============================= */

	$citySQL = "SELECT * FROM cities
				WHERE `status` = 1
				ORDER BY `order` ASC, `name` ASC";

	$cityResult = mysql_query($citySQL, $link);
	// echo $cityResult;
	
	while ($row = mysql_fetch_assoc($cityResult)) {		
		$cityArr[] = array('id' => $row['id'], 'name' => $row['name']);		
	}

	$cityObj = json_encode($cityArr);

	// echo $cityObj;

	// =========================================== //

	/* ===========================
	 * Đưa dữ liệu trong bảng District vào 1 mảng
	 * ============================= */

	$districtSQL = "SELECT * FROM districts
				WHERE `status` = 1
				ORDER BY `order` ASC, `name` ASC";

	$districtResult = mysql_query($districtSQL, $link);
	// echo $districtResult;
	
	while ($row = mysql_fetch_assoc($districtResult)) {		
		// array = array('cityid' => array('id', 'name'));		
		$districtArr[$row['cityid']][] = array('id' => $row['id'], 'name' => $row['name']);		
	}

	// echo "<pre>";
	// print_r($districtArr);
	// echo "</pre>";

	$districtObj = json_encode($districtArr);	
	// echo $districtObj;

	// =========================================== //

	/* ===========================
	 * Đưa dữ liệu trong bảng Ward vào 1 mảng
	 * ============================= */

	$wardSQL = "SELECT * FROM ward
				WHERE `status` = 1
				ORDER BY `order` ASC, `name` ASC";

	$wardResult = mysql_query($wardSQL, $link);
	// echo $wardResult;
	
	while ($row = mysql_fetch_assoc($wardResult)) {		
		// array = array('cityid' => array('id', 'name'));		
		$wardArr[$row['districtid']][] = array('id' => $row['id'], 'name' => $row['name']);		
	}

	// echo "<pre>";
	// print_r($wardArr);
	// echo "</pre>";

	$wardObj = json_encode($wardArr);	
	// echo $wardObj;
?>