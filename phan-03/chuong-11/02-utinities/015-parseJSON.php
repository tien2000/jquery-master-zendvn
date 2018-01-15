<?php
    $book = array(
                    "title" => "jQuery",
                    "author"=> "ZendVN"
                );

    $strJSON = json_encode($book);

    echo $strJSON;
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Utinity</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
    <script src="js/jquery-1.12.4.js"></script>

    <script type="text/javascript">
        /*
            jQuery.parseJSON(json);
        */

        jQuery(document).ready(function(e){
            $("#process").click(function(e){
                var obj = $.parseJSON('<?php echo $strJSON;?>');
                console.log(obj);
            })
        });
    </script>

</head>
<body>
    <h1 style="text-align: center;">
        jQuery.parseJSON(json): json: Một chuỗi json;
    </h1>
    <center>
        <input type="button" value="Process" id="process" class="button">
    </center>
</body>
</html>