function getElementsByClassName(parentNode, targetClass){
    var retnode = [];
    var elemts = parentNode.getElementsByTagName("*");

    if(elemts.length > 0){
        var myClass = new RegExp("\\b" + targetClass + "\\b");  // \b: Biên trái, biên phải.
        for (var i = 0; i < elemts.length; i++) {
            var myClassname = elemts.item(i).className;
            if(myClass.test(myClassname) == 1){
                retnode.push(elemts.item(i));
            }
        }                
    }
    return retnode;
}