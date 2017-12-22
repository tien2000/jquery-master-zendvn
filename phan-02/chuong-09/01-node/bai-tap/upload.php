<?php
    $file = $_FILES['upload'];

    if(count($file['name']) > 0){
        for ($i = 0; $i < count($file['name']); $i++) { 
            if ($file['name'][$i] != "") {
                // echo "<br>" . $file['name'][$i];
                $destination = "upload/" . $file['name'][$i];
                move_uploaded_file($file['tmp_name'][$i], $destination);
            }
        }
    }

    // echo '<pre>';
    // print_r($file);
    // echo '</pre>';
?>