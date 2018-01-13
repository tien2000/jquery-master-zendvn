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
            simplexml_load_string($strXML): Biến 1 chuỗi thành đối tượng.
        */

        $strXML = '<book id="11">
                        <title>Lập trình jQuery</title>
                        <author>ZendVN Group</author>
                        <pages>500</pages>
                        <weight units="gam">400</weight>
                        <price>
                            <real>35.50</real>
                            <sale-off>35.00</sale-off>
                        </price>
                        <shipping>
                            <US>1.3</US>
                            <EU>2.3</EU>
                            <VN>5.6</VN>
                        </shipping>
                    </book>';

        // Kiểm tra dữ liệu biến.       
        echo "<br>" . gettype($strXML);

        $xml = simplexml_load_string($strXML);

        echo "<br>" . gettype($xml);

        echo "<pre>";
        print_r($xml);
        echo "<pre>";
    ?>
</body>
</html>