function checkIE7(){
    var browser = navigator.appVersion;
    var flag = false;
    if(browser.search("MSIE 7.0;") > 0){
        flag = true;
    }
    return flag;
    
}