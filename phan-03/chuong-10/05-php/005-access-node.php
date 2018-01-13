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
            
        */
        
        // simpleXML OBJECT
        $xml = simplexml_load_file("files/01-books.xml");

        $book = $xml->book[0];

        echo "<br>" . $book->title;
        echo "<br>" . $book->weight;
        echo "<br>" . $book->price->real;
        echo "<br>" . $book->shipping->VN;

        echo "<pre>";
        print_r($xml->book);
        echo "<pre>";
    ?>
</body>
</html>