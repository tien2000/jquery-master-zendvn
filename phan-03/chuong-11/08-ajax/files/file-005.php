
<?php
    // echo "<pre>";
    // print_r($_POST);
    // echo "</pre>";

    $user = $_POST["username"];
    $pwd = $_POST["password"];
    $msg = array();

    if (empty($user)) {
        $msg["username"] = "Username không được rỗng";
    }else if ($user != "tienls") {
        $msg["username"] = "Username không tồn tại";
    }

    if (empty($pwd)) {
        $msg["password"] = "Password không được rỗng";
    }else if ($pwd != "123456") {
        $msg["password"] = "Password không chính xác";
    }

    $status = "error";
    if (count($msg) == 0) {
        $status = "Success";
    }

    $reponse = array("status" => $status, "msg" => $msg);

    $jsonString = json_encode($reponse);

    echo $jsonString;
?>