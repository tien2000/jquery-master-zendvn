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

        // console.log(itemTotal);

        // ==============================================
        // Gọi hàm chạy mặc định thi chạy Plugin
        // ==============================================
        init();

        // ==============================================
        // Hàm mặc định của Plugin
        // ==============================================
        function init(){
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
                    }
                });
                setPicturePosition();
            }
        }

        // ==============================================
        // Thiết lập vị trí các hình lớn khi vừa chạy Plugin.
        // ==============================================
        function setPicturePosition() {
            var leftPic     = bFolder + dataArr[itemSelected].pic;
            var rightPic    = bFolder + dataArr[itemSelected + 1].pic;
            var str         = '<img src="'+ leftPic +'" /><<img src="'+ rightPic +'" />';
            var maskDefault = ulThumb + " li:eq("+ itemSelected +") div.mask";

            $(options.pic).empty().append(str);
            $(maskDefault).addClass("maskHover").on({
                "mouseleave"    : function (e) {
                    $(this).addClass("maskHover");
                }
            });

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
        {"pic" : "12.jpg", "title" : "Picture 12", "detail" : "This is pic-12"},
    ];
    var obj = {
        "data"          : dataArr,
        "sFolder"       : "images/img114x72/",
        "bFolder"       : "images/img920x360/",
        "defaultItem"   : 3
    };

    $("#tSlider").tSlider(obj);
});