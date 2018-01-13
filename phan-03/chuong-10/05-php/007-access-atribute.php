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

        $weight = $xml->book[0]->weight;
        $weightUnits = $weight->attributes()->units;

        echo "<br>" . $weightUnits;
        echo "<br>" . $weight;

        echo "<pre>";
        print_r($weightUnits);
        echo "<pre>";
    ?>
</body>
</html>