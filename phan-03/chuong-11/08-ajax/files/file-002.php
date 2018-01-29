<?php
    $book = array(
        "title"  => "jQuery Master",
        "author" => "ZendVN Group",
        "pages"  => 500
    );

    $jsonStr = json_encode($book);
    echo $jsonStr;
?>