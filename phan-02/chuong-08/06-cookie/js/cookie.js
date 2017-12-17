// Tạo 1 cookie
function createCookie(name, value, days){
    var expires = "";
    
    if(isFinite(days) == true){
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires= " + date.toUTCString();
    }
    document.cookie = name + "=" + escape(value) + expires;
}

// Xóa 1 cookie
function deleteCookie(name){
    createCookie(name, "", -1);
}

// Xem giá trị của cookie
function getCookie(name){
    var cookies = document.cookie;
    var result = null;
    if(cookies.length > 0){
        var arrCookies = cookies.split("; ");
        var patt = new RegExp(name);
        for(var i = 0; i <= arrCookies.length; i++){
            if(patt.test(arrCookies[i]) == true){
                result = unescape(arrCookies[i].slice(arrCookies[i].indexOf("=") + 1));
                break;
            }
        }
    }
    return result;
}