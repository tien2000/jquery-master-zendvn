$(document).ready(function(e){
    var url, dta;
    $("#btnLogin").click(function(e){
        url = "../files/file-005.php?t=" + Math.random();
        dta = {
            username: $("#appForm :text[name='username']").val(),
            password: $("#appForm :password[name='password']").val()
        };
        $.post(url, dta, function(data, status){
            if (status == "success") {
                $("#appForm *").remove(".txtError").removeClass("bg01");
                if (data.status == "error") {
                    $("#info").addClass("bg01").text("Có lỗi xảy ra");                    

                    $.each(data.msg, function(i, val){
                        var elemt = $("#appForm :input[name='"+ i +"']");                        
                        $(elemt).addClass("bg01")
                                .after("<span class='txtError'>'"+ val +"'</span>");

                        // console.log(elemt);
                    });
                }else{
                    $("#info").addClass("bg02").text("Login thành công");  
                    $("#appForm").remove();
                }
            }

            console.log(data);
            // console.log(status);
        }, "json");
    });
});