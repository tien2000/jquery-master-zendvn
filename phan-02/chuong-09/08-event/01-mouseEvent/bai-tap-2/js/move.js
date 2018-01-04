this.moveElement = function(positionObj){
    // positionObj = {xA: xBoxA, yA: yBoxA, xB: xPointB, yB: yPointB}
    /* ========================
        PUBLIC
    =========================== */
    // this.getDirection = function(){
    //     return getDirection(positionObj);
    // }

    var _moveSize = 5;
    var _t;
    var _speed = 50;

    this.getDirection = function(){
        return getDirection(positionObj);
    }

    this.run = function(objHTML){
        var vDirection = getDirection(positionObj);        

        objHTML.style.left      = positionObj.xA + "px";
        objHTML.style.top       = positionObj.yA + "px";
        objHTML.style.position  = "absolute";
        objHTML.style.zIndex    = "10101";

        if (vDirection != "") {
            if (vDirection == "right") {
                moveRight(positionObj, objHTML);
            }

            if (vDirection == "left") {
                moveLeft(positionObj, objHTML);
            }

            if (vDirection == "top") {
                moveTop(positionObj, objHTML);
            }

            if (vDirection == "bottom") {
                moveBottom(positionObj, objHTML);
            }

            if (vDirection == "lefttop") {
                // console.log(xyPercent(positionObj));
                moveLeftTop(positionObj, objHTML);
            }

            if (vDirection == "righttop") {                
                moveRightTop(positionObj, objHTML);
            }

            if (vDirection == "leftbottom") {                
                moveLeftBottom(positionObj, objHTML);
            }

            if (vDirection == "rightbottom") {                
                moveRightBottom(positionObj, objHTML);
            }
        }
    }

    this.stopMove = function(){
        return stopMove();
    }    

    this.setMoveSize = function(val){
        _moveSize = val;
    }

    this.setSpeed = function(val){
        _speed = val;
    }

    /* ========================
        PRIVATE
    =========================== */
    function moveRight(posObj, objHTML){        
        // Khoảng cách di chuyển boxA mỗi lần.
        var moveSize = _moveSize;
        // Thời gian di chuyển boxA mỗi lần.
        var speed    = _speed; // 0.005s

        // Vị trí tọa độ X mà boxA phải dừng lại.
        var xStop = posObj.xB;
        var flag    = true;

        var tmp = xStop - parseFloat(objHTML.style.left);
        if (tmp <= moveSize) {
            flag = false;
            moveSize = tmp;
        }        
        objHTML.style.left = parseFloat(objHTML.style.left) + moveSize + "px";
        if (flag == true) {
            _t = setTimeout(function(){moveRight(posObj, objHTML);}, speed);   
        } else{
            var boxB = document.getElementById("boxB");
            insertToElement(objHTML, boxB);
        }

        console.log("xStop: " + xStop +  "|" + objHTML.style.left);
    }

    function moveLeft(posObj, objHTML){        
        // Khoảng cách di chuyển boxA mỗi lần.
        var moveSize = _moveSize;
        // Thời gian di chuyển boxA mỗi lần.
        var speed    = _speed; // 0.005s

        // Vị trí tọa độ X mà boxA phải dừng lại.
        var xStop = posObj.xB;
        var flag  = true;

        var tmp =  parseFloat(objHTML.style.left) - xStop;
        if (tmp <= moveSize) {
            flag = false;
            moveSize = tmp;
        }        
        objHTML.style.left = parseFloat(objHTML.style.left) - moveSize + "px";
        if (flag == true) {
            _t = setTimeout(function(){moveLeft(posObj, objHTML);}, speed);   
        } else{
            var boxB = document.getElementById("boxB");
            insertToElement(objHTML, boxB);
        }

        console.log("xStop: " + xStop +  "|" + objHTML.style.left);
    }

    function moveTop(posObj, objHTML){        
        // Khoảng cách di chuyển boxA mỗi lần.
        var moveSize = _moveSize;
        // Thời gian di chuyển boxA mỗi lần.
        var speed    = _speed; // 0.005s

        // Vị trí tọa độ X mà boxA phải dừng lại.
        var yStop = posObj.yB;
        var flag  = true;

        var tmp =  parseFloat(objHTML.style.top) - yStop;
        if (tmp <= moveSize) {
            flag = false;
            moveSize = tmp;
        }        
        objHTML.style.top = parseFloat(objHTML.style.top) - moveSize + "px";
        if (flag == true) {
            _t = setTimeout(function(){moveTop(posObj, objHTML);}, speed);   
        } else{
            var boxB = document.getElementById("boxB");
            insertToElement(objHTML, boxB);
        }

        console.log("xStop: " + yStop +  "|" + objHTML.style.top);
    }

    function moveBottom(posObj, objHTML){        
        // Khoảng cách di chuyển boxA mỗi lần.
        var moveSize = _moveSize;
        // Thời gian di chuyển boxA mỗi lần.
        var speed    = _speed; // 0.005s

        // Vị trí tọa độ X mà boxA phải dừng lại.
        var yStop = posObj.yB;
        var flag  = true;

        var tmp = yStop- parseFloat(objHTML.style.top);
        if (tmp <= moveSize) {
            flag = false;
            moveSize = tmp;
        }        
        objHTML.style.top = parseFloat(objHTML.style.top) + moveSize + "px";
        if (flag == true) {
            _t = setTimeout(function(){moveBottom(posObj, objHTML);}, speed);   
        } else{
            var boxB = document.getElementById("boxB");
            insertToElement(objHTML, boxB);
        }

        console.log("xStop: " + yStop +  "|" + objHTML.style.top);
    }    

    function moveLeftTop(posObj, objHTML){        
        // Khoảng cách di chuyển boxA mỗi lần.
        var moveSize = _moveSize;
        // Thời gian di chuyển boxA mỗi lần.
        var speed    = _speed; // 0.005s
        
        var flag  = true;

        var xStop = posObj.xB;
        var yStop = posObj.yB;        

        var percent = xyPercent(posObj);
        console.log("percent: " + percent);
        
        if (percent.xPercent > percent.yPercent) {
            var tmp = parseFloat(objHTML.style.left) - xStop;
        } else{
            var tmp = parseFloat(objHTML.style.top) - yStop;
        }       
        
        if (tmp < moveSize) {            
            moveSize = tmp;
            flag     = false;
        }        

        objHTML.style.top = parseFloat(objHTML.style.top) 
                             - (moveSize * percent.yPercent) + "px";
        objHTML.style.left = parseFloat(objHTML.style.left) 
                             - (moveSize * percent.xPercent) + "px";

        if (flag == true) {
            _t = setTimeout(function(){moveLeftTop(posObj, objHTML);}, speed);   
        } else{
            var boxB = document.getElementById("boxB");
            insertToElement(objHTML, boxB);
        }

        console.log("xStop: " + xStop +  "|" + objHTML.style.left);
        console.log("yStop: " + yStop +  "|" + objHTML.style.top);
    }

    function moveRightTop(posObj, objHTML){        
        // Khoảng cách di chuyển boxA mỗi lần.
        var moveSize = _moveSize;
        // Thời gian di chuyển boxA mỗi lần.
        var speed    = _speed; // 0.005s
        
        var flag  = true;

        var xStop = posObj.xB;
        var yStop = posObj.yB;        

        var percent = xyPercent(posObj);
        console.log("percent: " + percent);
        
        if (percent.xPercent > percent.yPercent) {
            var tmp = xStop - parseFloat(objHTML.style.left);
        } else{
            var tmp =parseFloat(objHTML.style.top) - yStop;
        }       
        
        if (tmp < moveSize) {            
            moveSize = tmp;
            flag     = false;
        }        

        objHTML.style.top = parseFloat(objHTML.style.top) 
                             - (moveSize * percent.yPercent) + "px";
        objHTML.style.left = parseFloat(objHTML.style.left) 
                             + (moveSize * percent.xPercent) + "px";

        if (flag == true) {
            _t = setTimeout(function(){moveRightTop(posObj, objHTML);}, speed);   
        } else{
            var boxB = document.getElementById("boxB");
            insertToElement(objHTML, boxB);
        }

        console.log("xStop: " + xStop +  "|" + objHTML.style.left);
        console.log("yStop: " + yStop +  "|" + objHTML.style.top);
    }

    function moveLeftBottom(posObj, objHTML){        
        // Khoảng cách di chuyển boxA mỗi lần.
        var moveSize = _moveSize;
        // Thời gian di chuyển boxA mỗi lần.
        var speed    = _speed; // 0.005s
        
        var flag  = true;

        var xStop = posObj.xB;
        var yStop = posObj.yB;        

        var percent = xyPercent(posObj);
        console.log("percent: " + percent);
        
        if (percent.xPercent > percent.yPercent) {
            var tmp = parseFloat(objHTML.style.left) - xStop;
        } else{
            var tmp = yStop - parseFloat(objHTML.style.top);
        }       
        
        if (tmp < moveSize) {            
            moveSize = tmp;
            flag     = false;
        }        

        objHTML.style.top = parseFloat(objHTML.style.top) 
                             + (moveSize * percent.yPercent) + "px";
        objHTML.style.left = parseFloat(objHTML.style.left) 
                             - (moveSize * percent.xPercent) + "px";

        if (flag == true) {
            _t = setTimeout(function(){moveLeftBottom(posObj, objHTML);}, speed);   
        } else{
            var boxB = document.getElementById("boxB");
            insertToElement(objHTML, boxB);
        }

        console.log("xStop: " + xStop +  "|" + objHTML.style.left);
        console.log("yStop: " + yStop +  "|" + objHTML.style.top);
    }

    function moveRightBottom(posObj, objHTML){        
        // Khoảng cách di chuyển boxA mỗi lần.
        var moveSize = _moveSize;
        // Thời gian di chuyển boxA mỗi lần.
        var speed    = _speed; // 0.005s
        
        var flag  = true;

        var xStop = posObj.xB;
        var yStop = posObj.yB;        

        var percent = xyPercent(posObj);
        console.log("percent: " + percent);
        
        if (percent.xPercent > percent.yPercent) {
            var tmp = xStop -parseFloat(objHTML.style.left);
        } else{
            var tmp = yStop - parseFloat(objHTML.style.top);
        }       
        
        if (tmp < moveSize) {            
            moveSize = tmp;
            flag     = false;
        }        

        objHTML.style.top = parseFloat(objHTML.style.top) 
                             + (moveSize * percent.yPercent) + "px";
        objHTML.style.left = parseFloat(objHTML.style.left) 
                             + (moveSize * percent.xPercent) + "px";

        if (flag == true) {
            _t = setTimeout(function(){moveRightBottom(posObj, objHTML);}, speed);   
        } else{
            var boxB = document.getElementById("boxB");
            insertToElement(objHTML, boxB);
        }

        console.log("xStop: " + xStop +  "|" + objHTML.style.left);
        console.log("yStop: " + yStop +  "|" + objHTML.style.top);
    }

    function xyPercent(posObj){
        // console.log("xyPercent: ");
        // console.log(posObj);
        
        var vWidth = Math.abs(posObj.xA - posObj.xB);
        var vHeight = Math.abs(posObj.yA - posObj.yB);

        var xPercent, yPercent;
        if (vWidth == vHeight) {
            xPercent = 1;
            yPercent = 1;
        } else if(vWidth > vHeight){
            xPercent = (vWidth / vHeight).toFixed(5);       // Lấy 5 số lẻ.
            yPercent = 1;
        } else{
            yPercent = (vHeight / vWidth).toFixed(5);
            xPercent = 1;
        }

        return {xPercent: Math.abs(xPercent), yPercent: Math.abs(yPercent)};
    }

    function stopMove(){
        clearTimeout(_t);
    }

    function insertToElement(objHTML, newParent){
        objHTML.style.removeProperty("width");
        objHTML.style.removeProperty("left");
        objHTML.style.removeProperty("top");
        objHTML.style.removeProperty("position");
        objHTML.style.removeProperty("z-index");
        newParent.appendChild(objHTML);
        setTimeout(function(){
            objHTML.style.removeProperty("background-color");
        }, 900);
    }
    
    function getDirection(posObj){
        console.log("getDirection");
        console.log(posObj);
        var val = '';

        if (posObj.xA > posObj.xB) {
            val = val + "left";
        }

        if (posObj.xA < posObj.xB) {
            val = val + "right";
        }  

        if (posObj.xA == posObj.xB) {
            val = val + "";
        }
        
        if (posObj.yA > posObj.yB) {
            val = val + "top";
        }     

        if (posObj.yA < posObj.yB) {
            val = val + "bottom";
        }   

        if (posObj.yA == posObj.yB) {
            val = val + "";
        }   

        return val;
    }
}