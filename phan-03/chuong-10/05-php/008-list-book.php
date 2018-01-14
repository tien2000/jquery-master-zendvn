<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
</head>
<body>
    <h1>SimplXML Object</h1>
    <?php
        /*
            $node->getName(): Lấy ra tên thẻ đang truy cập.
        */        
        
        $xml = simplexml_load_file("files/01-books.xml");

        $str = '';
        foreach ($xml as $node) {
            $str .= "Title: " . $node->title . "<br>"
                    . "Author: " . $node->author . "<br>"
                    . "Pages: " . $node->pages . "<br>"
                    . "Weight: " . $node->weight . "<br>"
                    . $node->weight->attributes()->units . "<br>"
                    . "Real Price: " . $node->price->real . "<br>"
                    . "Sale Off: " . $node->price->sale_off . "<br>"
                    . "US: " . $node->shipping->US . "<br>"
                    . "EU: " . $node->shipping->EU . "<br>"
                    . "VN: " . $node->shipping->VN . "<br>"
                    . "========================================<br>";
        }       
        
        echo $str;
    ?>
</body>
</html>