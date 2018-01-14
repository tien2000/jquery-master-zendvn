<?php
    $conn = mysql_connect("localhost", "root", "");
    if (!$conn) {
        die("Could not connect");
    }

    $db = mysql_select_db("books", $conn);

    mysql_query("SET NAMES 'utf8'");
?>