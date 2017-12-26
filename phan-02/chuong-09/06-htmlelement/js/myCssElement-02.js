this.myCssElement = function(objHTML){
    this.element = objHTML;

    /* ===============================
        PUBLIC
    ================================== */

    this.outerWidth = function(){
        return getOuterWidth(objHTML);
    }

    this.outerHeight = function(){
        return getOuterHeight(objHTML);
    }

    this.innerHeight = function(){
        return getInnerHeight(objHTML);
    }

    this.innerWidth = function(){
        return getInnerWidth(objHTML);
    }

    this.position = function(vType){
        if(vType != "min"){
            return getPositionMax(objHTML);
        }else{
            return getPositionMin(objHTML);
        }
    }

    /* ===============================
        PRIVATE
    ================================== */

    function getOuterWidth(elemt){
        var vOuterWidth = elemt.offsetWidth;
        return vOuterWidth;
    }

    function getOuterHeight(elemt){
        var vOuterHeight = elemt.offsetHeight;
        return vOuterHeight;
    }

    function getInnerHeight(elemt){
        var cssElement = getStyleElement(elemt);
        var vInnerHeight = elemt.offsetHeight - parseInt(cssElement.borderTopWidth)
                            - parseInt(cssElement.borderBottomWidth);
        return vInnerHeight;
    }

    function getInnerWidth(elemt){
        var cssElement = getStyleElement(elemt);
        var vInnerWidth = elemt.offsetWidth - parseInt(cssElement.borderLeftWidth)
                            - parseInt(cssElement.borderRightWidth);
        return vInnerWidth;
    }

    function getPositionMin(elemt){
		var left, right, top, bottom;
		var cssElemt = getStyleElement(elemt);
		
		left 	= elemt.offsetLeft +  parseInt(cssElemt.borderLeftWidth);
		top 	= elemt.offsetTop +  parseInt(cssElemt.borderTopWidth);
		right	= elemt.offsetLeft + elemt.offsetWidth - parseInt(cssElemt.borderRightWidth);
		bottom	= elemt.offsetTop + elemt.offsetHeight - parseInt(cssElemt.borderBottomWidth);
		
		return {left: left, top: top, right: right, bottom: bottom  };
	}

    function getPositionMax(elemt){
		var left, right, top, bottom;
		
		left 	= elemt.offsetLeft;
		top 	= elemt.offsetTop;
		right	= elemt.offsetLeft + elemt.offsetWidth;
		bottom	= elemt.offsetTop + elemt.offsetHeight;
		
		return {left: left, top: top, right: right, bottom: bottom  };
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