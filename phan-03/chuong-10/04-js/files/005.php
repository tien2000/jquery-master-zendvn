<?php
    $user = "admin";
    $pwd  = "123456";
    $msg  = "";
    $flagLogin = "error";

    if (@$_POST['username'] != $user) {
        $msg = "Username này ko tồn tại";
    } else if (@$_POST['password'] != $pwd){
        $msg = "Password này ko chính xác";
    }
    
    if (empty($msg)) {
        $flagLogin = "ok";
    }

    // echo "<br>" . $msg;

    header("Content-type: text/xsl");
    echo '<?xml version="1.0" encoding="utf-8"?>';
    echo '<root>
            <flag>'. $flagLogin .'</flag>
            <msg>' . $msg . '</msg>
          </root>';