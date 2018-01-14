<?php
    $val = json_decode($_GET["val"]);

    echo $val->data[0]->data->title;
    echo $val->data[0]->data->weight->attributes->units;

    echo "<pre>";
    print_r($val);
    echo "<pre>";    
?>