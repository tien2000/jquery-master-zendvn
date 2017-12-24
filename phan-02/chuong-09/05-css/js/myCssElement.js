this.myCssElement = function(elemt){
    this.element = elemt;

    this.cssStyle = function(){
        return getStyleElement(elemt);
    }

    this.outerWidth = function(){
        var cssElement = getStyleElement(elemt);
        var vOuterWidth = parseInt(cssElement.borderLeftWidth) 
                            + parseInt(cssElement.paddingLeft)
                            + parseInt(cssElement.width)
                            + parseInt(cssElement.paddingRight)
                            + parseInt(cssElement.borderRightWidth);

        return vOuterWidth;
    }

    this.innerWidth = function(){
        var cssElement = getStyleElement(elemt);
        var vInnerWidth = parseInt(cssElement.paddingLeft)
                            + parseInt(cssElement.width)
                            + parseInt(cssElement.paddingRight);

        return vInnerWidth;
    }

    this.outerHeight = function(){
        var cssElement = getStyleElement(elemt);
        var vOuterHeight = parseInt(cssElement.borderTopWidth) 
                            + parseInt(cssElement.paddingTop)
                            + parseInt(cssElement.height)
                            + parseInt(cssElement.paddingBottom)
                            + parseInt(cssElement.borderBottomWidth);

        return vOuterHeight;
    }   
    
    this.innerHeight = function(){
        var cssElement = getStyleElement(elemt);
        var vInnerHeight = parseInt(cssElement.paddingTop)
                            + parseInt(cssElement.height)
                            + parseInt(cssElement.paddingBottom);

        return vInnerHeight;
    }   

    function getStyleElement(elemt){
        var styleElement;
        if(elemt.currentStyle){
            styleElement = elemt.currentStyle;
        }else{
            styleElement = window.getComputedStyle(elemt, null);
        }
        return styleElement;
    }
}