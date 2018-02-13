(function($){
    $.fn.zoomIt = function(options){    // options - settings - obj
        // 0. Biến số sử dụng trong plugin.
        var defaults;
        var newWidth, newHeight;

        // 1. Khai báo các giá trị mặc định trong plugin.
        defaults = {
            width   : 100,      // Giá trị %
            height  : 100,
            both    : 100
        }

        options = $.extend(defaults, options);
        console.log(options.both);        
        console.log($(this).width());

        if (options.both != 100) {
            newWidth = $(this).width() * options.both / 100;
            newHeight = $(this).height() * options.both / 100;
        }else{
            newWidth = $(this).width() * options.width / 100;
            newHeight = $(this).height() * options.height / 100;
        }

        $(this).animate({width:newWidth, height:newHeight}, "slow");

        return this;
    };
})(jQuery);

$(document).ready(function(e){
    $("#zoomIn").click(function(e){
        $("#boxA").zoomIt({width: 80, height: 70})
                  .removeClass("bg02").addClass("bg01");    
    });
    $("#zoomOut").click(function(e){
        $("#boxA").zoomIt({width: 120, height: 170})
                  .removeClass("bg01").addClass("bg02");
    });
});    