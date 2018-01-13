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
            simplexml_load_file($file): Load file xml.
        */
        
        $xml = simplexml_load_file("files/01-books.xml");

        echo "<br>" . gettype($xml);

        echo "<pre>";
        print_r($xml);
        echo "<pre>";
    ?>
</body>
</html>