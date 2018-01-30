function addDiv(selector, arr){
    $(selector).empty();
    $.each(arr, function(i, val){
        var n = i + 1;
        $(selector).append("<div>"+ n + ". " + val +"</div>");
    });

    // console.log(selector);
    // console.log(arr);
};

function changeColor(selector, color1, color2){
    $(selector).find(":even").addClass(color1)
               .end()
               .find(":odd").addClass(color2);

    // console.log(selector);
    // console.log(color1);
    // console.log(color2);
};