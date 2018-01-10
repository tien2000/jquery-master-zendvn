function loadFile(url, method, type){
    // Khởi tạo đối tượng XMLHttpRequest
    if (window.XMLHttpRequest) {
        var xHttp = new XMLHttpRequest;
    } else{
        var xHttp = new ActiveXObject("Microsoft.XMLHTTP");     // Chạy trên iE
    }

    // Xác định phương thức và tập tin muốn lấy thông tin.
    // Phương thức GET - POST
    xHttp.open(method, url, false);

    // Gửi yêu cầu đến máy chủ.
    xHttp.send();

    // Lấy nội dung trả về từ máy chủ.
    if (type == "text") {
        var val = xHttp.responseText;
    } else{
        var val = xHttp.responseXML;
    }

    return val;
}