/*
    currentStyle: Lấy những thông tin css hiện thời của một đối tượng, bao gồm cả trong tập tin css và thuộc tính style.
                    Chỉ tác dụng tốt trên IE
    getComputedStyle(Element, null): Lấy thông tin css hiện thời trên Chrome.
*/

function getStyleElement(elemt){
    var styleElement;
    if(elemt.currentStyle){
        styleElement = elemt.currentStyle;
    }else{
        styleElement = window.getComputedStyle(elemt, null);
    }
    return styleElement;
}