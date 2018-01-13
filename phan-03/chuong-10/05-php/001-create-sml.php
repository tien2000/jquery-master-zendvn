<?php
    require_once("connect.php");

    // Tạo câu truy vấn
    $query = "SELECT * FROM books";

    // Lấy ra kết quả
    $result = mysql_query($query);

    // echo "<br>" . $result;

    header("Content-Type: text/xml");

    $xml = '<?xml version="1.0" encoding="utf-8"?>';
    $xml .= '<book-shop>';
    while ($row = mysql_fetch_assoc($result)) {
        $xml .= '<book id="'. $row['id'] .'">
                    <title>'. $row['title'] .'</title>
                    <author>'. $row['author'] .'</author>
                    <pages>'. $row['pages'] .'</pages>
                    <weight units="'. $row['units'] .'">'. $row['weight'] .'</weight>
                    <price>
                        <real>'. $row['price_real'] .'</real>
                        <sale-off>'. $row['price_saleoff'] .'</sale-off>
                    </price>
                    <shipping>
                        <US>'. $row['us'] .'</US>
                        <EU>'. $row['eu'] .'</EU>
                        <VN>'. $row['vn'] .'</VN>
                    </shipping>
                </book>';
    }
    $xml .= '</book-shop>';

    // echo "<pre>";
    // print_r($xml);
    // echo "</pre>";

    echo $xml;
?>