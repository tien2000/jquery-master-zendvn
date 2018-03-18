<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Business LTD</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet/less" type="text/css" media="screen" href="_/components/less/style.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="_/components/less/font-awesome.min.css" />
    
    <script type="text/javascript" src="js/jquery-1.10.0.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/less-1.7.0.min.js"></script>

    <script type="text/javascript">
        $(document).ready(function(e){
            $('[data-toggle=popover]').popover({
                "html"              : true,
                "animation"         : true,
                "placement"         : "top",
                "trigger"           : "hover"
            }).on('shown.bs.popover', function () {
                var pos = parseInt($(".popover").css("top")) - 22 + "px";

                $(".popover").css("top", pos);
            });

            $("#popover-2").popover({
                "html"              : true,
                "animation"         : true,
                "placement"         : "top",
                "trigger"           : "hover",
                "content"           : function(e){
                    return $(".popover-content").html();
                },
                "title"             :function(e){
                    return $(".popover-title").html();
                }
            });
        });
        
    </script>
</head>
<body>
    <section id="headerSection">
        <?php
            include_once '_/components/php/navigation.php';
        ?>
    </section>
    <section id="slideSection">
        <?php
            include_once '_/components/php/slide.php';
        ?>
    </section>
    <section id="fieldSection">
        <?php
            include_once '_/components/php/field.php';
        ?>
    </section>

    <div style="min-height: 200px"></div>
</body>
</html>