(function($){
    $.fn.tSlider = function (options) { 
        // console.log("Hi tlsSlider");
        var defaults = {
            "data"          : [],
            "sFolder"       : "images/small/",
            "bFolder"       : "images/big/",
            "defaultItem"   : 0,
            "widthItem"     : 118,
            "pic"           : ".tSlider-img-content",
            "leftArrow"     : ".tSlider-left-arrow",
            "rightArrow"    : ".tSlider-right-arrow",
            "title"         : ".tSlider-bar-title",
            "detail"        : ".tSlider-bar-detail",
            "thumbs"        : ".tSlider-thumb-bar"
        };

        options = $.extend(defaults, options);
        // console.log(options);

        // ==============================================
        // Khai báo biến
        // ==============================================
        var dataArr         = options.data;
        var itemTotal       = options.data.length;
        var sFolder         = options.sFolder;
        var bFolder         = options.bFolder;
        var ulThumb         = options.thumbs + " ul";
        var itemSelected    = options.defaultItem;
        var leftArrow       = options.leftArrow;
        var rightArrow      = options.rightArrow;
        var itemTitle       = options.title;
        var itemDetail      = options.detail;
        var widthUl         = 0;
        var runFlag         = "right";
        var divMask         = "";
        var timeOut;
        var rightSize       = 0;
        var leftSize        = 0;
        var moveSize        = 0;

        // console.log(itemTotal);

        // ==============================================
        // Gọi hàm chạy mặc định thi chạy Plugin
        // ==============================================
        init().done(function () {
            console.log("Init Done!!!");
            run();
        });

        // ==============================================
        // Chạy hàm Slider
        // ==============================================
        function run() {
            timeOut = setInterval(function (param) {
                if (runFlag == "right") {
                    runRight();
                    // console.log("Chạy về bên phải");
                }else{
                    runLeft();
                    // console.log("Chạy về bên trái");
                }
            }, 2000);
        }

        // ==============================================
        // Hàm chạy slider về bên phải
        // ==============================================
        function runRight(){
            $(options.pic).animate({
                "left"      : "-920px",
                "duration"  : 500
            }, function (e) {
                // console.log("Đã chạy qua trái 920px");

                // 1. Thiết lập lại hình kế tiếp sẽ hiển thị.
                itemSelected = itemSelected + 1;

                // 2. Loại bỏ các class maskHover của các thẻ div.mask.
                $(divMask).removeClass("maskHover");

                // 3. Thiết lập lại vị trí left chứa 2 hình lớn.
                $(options.pic).css({"left" : "0px"});

                if (itemSelected + 1 < itemTotal) {
                    var leftPic     = bFolder + dataArr[itemSelected].pic;
                    var rightPic    = bFolder + dataArr[itemSelected + 1].pic;                    
                    var str         = '<img src="'+ leftPic +'" /><img src="'+ rightPic +'" />';                    

                    $(options.pic).empty().append(str);

                    var thumbElemt  = ulThumb + " li:eq("+ itemSelected +")";
                    var elemtPos    = $(thumbElemt).position().left
                                        - Math.abs($(ulThumb).position().left);
                    
                    var thumbBarWidth   = $(options.thumbs).width();
                    var thumbBarHalf    = thumbBarWidth / 2;
                    rightSize           = $(ulThumb).width() 
                                            - Math.abs($(ulThumb).position().left) 
                                            - thumbBarWidth;                   

                    if (elemtPos + options.widthItem > thumbBarWidth) {
                        if (rightSize > thumbBarHalf) {
                            moveSize = thumbBarHalf;
                        }else{
                            moveSize = rightSize;
                        }       
                        // console.log("moveSize: " + moveSize);                 
                        $(ulThumb).animate({"left" : "-=" + moveSize}, "slow");
                    }

                    // console.log("======== runRight ==========");
                    // console.log(dataArr[itemSelected].pic);
                    // console.log("elemtPos: " + elemtPos);
                    // console.log("thumbBarWidth: " + thumbBarWidth);
                    // console.log("thumbBarHalf: " + thumbBarHalf);
                    // console.log("rightSize: " + rightSize);
                }else if(itemSelected + 1 == itemTotal){
                    if (rightSize > 0 && moveSize != rightSize) {
                        $(ulThumb).animate({"left" : "-=" + rightSize}, "slow");
                    }
                    var leftPic     = bFolder + dataArr[itemSelected - 1].pic;
                    var rightPic    = bFolder + dataArr[itemSelected].pic;
                    var str = '<img src="'+ leftPic +'" /><img src="'+ rightPic +'" />';
                    $(options.pic).css({"left" : "-920px"});                    
                    runFlag = "left";
                }
                var maskDefault = ulThumb + " li:eq("+ itemSelected +") div.mask";                    
                $(maskDefault).addClass("maskHover");
                $(itemTitle).text(dataArr[itemSelected].title);
                $(itemDetail).text(dataArr[itemSelected].detail);
            });
        }

        // ==============================================
        // Hàm chạy slider về bên trái
        // ==============================================
        function runLeft(){
            $(options.pic).animate({
                "left"      : "0",
                "duration"  : 500
            }, function (e) {
                // console.log("Đã chạy qua trái 920px");

                // 1. Thiết lập lại hình kế tiếp sẽ hiển thị.
                itemSelected = itemSelected - 1;

                // 2. Loại bỏ các class maskHover của các thẻ div.mask.
                $(divMask).removeClass("maskHover");

                // 3. Thiết lập lại vị trí left chứa 2 hình lớn.
                $(options.pic).css({"left" : "-920px"});

                if (itemSelected - 1 >= 0) {
                    var leftPic     = bFolder + dataArr[itemSelected - 1].pic;
                    var rightPic    = bFolder + dataArr[itemSelected].pic;                    
                    var str         = '<img src="'+ leftPic +'" /><img src="'+ rightPic +'" />';                    
                    $(options.pic).empty().append(str);

                    var thumbElemt  = ulThumb + " li:eq("+ itemSelected +")";
                    var elemtPos    = $(thumbElemt).position().left;
                    
                    var thumbBarWidth   = $(options.thumbs).width();
                    var thumbBarHalf    = thumbBarWidth / 2;
                    leftSize           = Math.abs($(ulThumb).position().left); 

                    if (elemtPos - options.widthItem < leftSize) {
                        if (leftSize > thumbBarHalf) {
                            moveSize = thumbBarHalf;
                        }else{
                            moveSize = leftSize;
                        }
                        // console.log("moveSize: " + moveSize);                 
                        $(ulThumb).animate({"left" : "+=" + moveSize}, "slow");
                    }

                    // console.log("======== runLeft ==========");
                    // console.log(dataArr[itemSelected - 1].pic);
                    // console.log("elemtPos: " + elemtPos);
                    // console.log("thumbBarWidth: " + thumbBarWidth);
                    // console.log("thumbBarHalf: " + thumbBarHalf);
                    // console.log("leftSize: " + leftSize);

                }else if(itemSelected - 1 < 0){                    
                    var leftPic     = bFolder + dataArr[itemSelected].pic;
                    var rightPic    = bFolder + dataArr[itemSelected + 1].pic;
                    var str         = '<img src="'+ leftPic +'" /><img src="'+ rightPic +'" />';

                    $(options.pic).css({"left" : "0px"});  
                    runFlag = "right";
                }
                var maskDefault = ulThumb + " li:eq("+ itemSelected +") div.mask";
                $(maskDefault).addClass("maskHover");
                $(itemTitle).text(dataArr[itemSelected].title);
                $(itemDetail).text(dataArr[itemSelected].detail);
                
            });
        }

        // ==============================================
        // Hàm mặc định của Plugin
        // ==============================================
        function init(){
            var dfd = $.Deferred();
            if (itemTotal > 0) {
                setWidthUl();

                var str     = '';
                var picDir  = '';

                $(ulThumb).empty();

                $.each(dataArr, function (i, val) {
                    picDir = sFolder + val.pic;
                    // console.log(picDir);

                    str = '<li><img src="'+ picDir +'" title="'+ val.title +'" /><div class="mask"></div></li>';
                    $(ulThumb).append(str);
                });

                divMask = ulThumb + " li " + "div.mask";
                // console.log($(divMask));

                $(divMask).on({
                    "mouseenter"    : function (e) {
                        $(this).addClass("maskHover");
                    },
                    "mouseleave"    : function (e) {
                        $(this).removeClass("maskHover");
                        var maskDefault = ulThumb + " li:eq("+ itemSelected +") div.mask";
                        $(maskDefault).addClass("maskHover");
                    },
                    "click"         : function (e) {
                        $(this).removeClass("maskHover");
                        itemSelected = $(divMask).index($(this));
                        setPicturePosition();

                        // console.log($(divMask).index($(this)));
                    }
                });

                $(leftArrow).on("click", function (e) {
                    runFlag = "left";
                });

                $(rightArrow).on("click", function (e) {
                    runFlag = "right";
                });

                setPicturePosition();

                dfd.resolve();
            }else{
                dfd.reject();
            }

            return dfd.promise();
        }

        // ==============================================
        // Thiết lập vị trí các hình lớn khi vừa chạy Plugin.
        // ==============================================
        function setPicturePosition() {
            if (runFlag == "right") {
                var leftPic     = bFolder + dataArr[itemSelected].pic;
                var rightPic    = bFolder + dataArr[itemSelected + 1].pic;    
            }else{
                var leftPic     = bFolder + dataArr[itemSelected - 1].pic;
                var rightPic    = bFolder + dataArr[itemSelected].pic;
                $(options.pic).css({"left" : "-920px"});
            }            
            var str         = '<img src="'+ leftPic +'" /><img src="'+ rightPic +'" />';
            var maskDefault = ulThumb + " li:eq("+ itemSelected +") div.mask";
            $(options.pic).empty().append(str);
            $(maskDefault).addClass("maskHover");
            $(itemTitle).text(dataArr[itemSelected].title);
            $(itemDetail).text(dataArr[itemSelected].detail);

            // console.log($(maskDefault));
        }

        // ==============================================
        // Hàm tính chiều dài ul
        // ==============================================
        function setWidthUl() { 
            widthUl = itemTotal * options.widthItem;
            $(ulThumb).css("width", widthUl);
        }
    };
})(jQuery);

$(document).ready(function (e) {
    var dataArr = [
        {"pic" : "1.jpg", "title" : "Picture 01", "detail" : "This is pic-01"},
        {"pic" : "2.jpg", "title" : "Picture 02", "detail" : "This is pic-02"},
        {"pic" : "3.jpg", "title" : "Picture 03", "detail" : "This is pic-03"},
        {"pic" : "4.jpg", "title" : "Picture 04", "detail" : "This is pic-04"},
        {"pic" : "5.jpg", "title" : "Picture 05", "detail" : "This is pic-05"},
        {"pic" : "6.jpg", "title" : "Picture 06", "detail" : "This is pic-06"},
        {"pic" : "7.jpg", "title" : "Picture 07", "detail" : "This is pic-07"},
        {"pic" : "8.jpg", "title" : "Picture 08", "detail" : "This is pic-08"},
        {"pic" : "9.jpg", "title" : "Picture 09", "detail" : "This is pic-09"},
        {"pic" : "10.jpg", "title" : "Picture 10", "detail" : "This is pic-10"},
        {"pic" : "11.jpg", "title" : "Picture 11", "detail" : "This is pic-11"},
        {"pic" : "12.jpg", "title" : "Picture 12", "detail" : "This is pic-12"}
    ];
    var obj = {
        "data"          : dataArr,
        "sFolder"       : "images/img114x72/",
        "bFolder"       : "images/img920x360/",
        "defaultItem"   : 6
    };

    $("#tSlider").tSlider(obj);
});