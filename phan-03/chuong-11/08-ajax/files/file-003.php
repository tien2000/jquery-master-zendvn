<?php 
    // Bổ sung cho thuộc tính crossDomain trong $.ajax.
    header('Access-Control-Allow-Origin: *');
?>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<?php
    $book = array(
        "title"  => "jQuery Master",
        "author" => "ZendVN Group",
        "pages"  => 500
    );

    $jsonStr = json_encode($book);
    echo $jsonStr;
?>