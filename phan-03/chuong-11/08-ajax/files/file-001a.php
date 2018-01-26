<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Ajax Load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <h1>file-001a.php</h1>
    <?php
        // GET | POST
        echo "Nhận dữ liệu từ phương thức GET" . "<br>";
        echo "==========================" . "<br>";
        echo "<pre>";
        echo print_r($_GET);
        echo "</pre>";
        echo "==========================" . "<br>";

        echo "Nhận dữ liệu từ phương thức POST" . "<br>";
        echo "==========================" . "<br>";
        echo "<pre>";
        echo print_r($_POST);
        echo "</pre>";
        echo "==========================" . "<br>";
    ?>
</body>
</html>