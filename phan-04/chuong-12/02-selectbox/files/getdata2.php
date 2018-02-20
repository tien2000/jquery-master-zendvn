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

	$data = array();
	$data['cities'] = $cityArr;
	$data['district'] = $districtArr;
	$data['ward'] = $wardArr;

	echo json_encode($data);
	
?>