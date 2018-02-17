(function($){
    $.fn.zToolTip = function(options){
        console.log("hi tooltip");

        var defaults = {
            'idDefault' : '#ztooltip-contener'
        };

        options = $.extend(defaults, options);

        var container = options.idDefault;
        var left, top;
        var tooltipWidth, tooltipHeight;
        // $(container).show();

        console.log(container);

        // console.log(this);

        $(this).mouseover(function(e){
            // console.log("mouseover");
            if ($(this).attr("ztool-type") == "text") {
                $(container).text($(this).attr("ztool-source"));
            }else if($(this).attr("ztool-type") == "html"){
                // ztooltip-source-tmp1
                var id = "#ztooltip-source-" + $(this).attr("ztool-source");
                $(container).html($(id).html());
                // console.log(id);
            }
            $(container).css({'display':'block'});

            // console.log(e.pageX + " - " + e.pageY);
        }).mousemove(function(e){
            // console.log("mousemove");
            tooltipWidth  = $(container).outerWidth();
            tooltipHeight = $(container).outerHeight();

            // console.log(tooltipWidth + " - " + tooltipHeight);

            var pageWidth = $('body').width();
            // console.log("pageWidth: " + pageWidth);

            if (e.pageX < pageWidth/2) {
                left = e.pageX - 20;
            }else{
                left = e.pageX - tooltipWidth;
            }

            if (e.pageY > tooltipHeight) {
                top = e.pageY - (tooltipHeight + 20);
            }else{
                top = e.pageY + 20;
            }

            $(container).css({'top': top + "px", 'left': left + "px"});
        }).mouseout(function(e){
            // console.log("mouseout");
            $(container).css({'display':'none'});
        });
    };
})(jQuery);

$(document).ready(function(e){
    $(".ztooltip").zToolTip();
});