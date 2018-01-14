<?php
    require_once("connect.php");

    // Tạo câu truy vấn
    $query = "SELECT * FROM books";

    // Lấy ra kết quả
    $result = mysql_query($query);

    // echo "<br>" . $result;
    $books = array();
    while ($row = mysql_fetch_assoc($result)) {
        $books[] = $row;        
    }

    $strBooks = json_encode($books);
    echo $strBooks;
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>php to js</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script type="text/javascript">
        var myObj = eval('<?php echo $strBooks; ?>');
        console.log(myObj[0].title);
    </script>

</head>
<body>
    
</body>
</html>