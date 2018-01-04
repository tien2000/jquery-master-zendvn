this.mySupport = function(){
    /* ========================
        PUBLIC
    =========================== */
    this.pageXY = function(e){
        return pageXY(e);
    }

    this.mouseButton = function(e){
        return mouseButton(e);
    }

    this.disableRigthClick(e) = function(){
        return disableRigthClick(e);
    }


    /* ========================
        PRIVATE
    =========================== */
    function pageXY(e){
        // Nếu là IE thì document.documentElement.scrollLeft | Ngược lại e.pageX
        if(typeof e.pageX == "undefined"){
            var pageX = e.clientX + document.documentElement.scrollLeft;
            var pageY = e.clientY + document.documentElement.scrollTop;
        }else{
            var pageX = e.pageX;
            var pageY = e.pageY;
        }

        return {pageX: pageX, pageY: pageY};
    }

    function mouseButton(e){
        var vType = "left";
        if (typeof(e.which) == "number") {
            switch (e.which) {
                case 1: vType = "Left Click";                        
                    break;

                case 2: vType = "Middle Click";
                    break;

                case 3: vType = "Right Click";
                    break;
            
                default:
                    break;
            }
        }else{
            switch (e.button) {
                case 1: vType = "Left Click";                        
                    break;

                case 4: vType = "Midle Click";
                    break;

                case 2: vType = "Right Click";
                    break;
            
                default:
                    break;
            }
        }

        return vType;
    }

    function disableRigthClick(e){
        var mySup = new mySupport();
        var vType = mySup.mouseButton(e);
        if (vType == "Right Click") {
            alert("Right Click Disable");
            return false;
        }
        alert("hi");
    }
}