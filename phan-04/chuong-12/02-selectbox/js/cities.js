$(document).ready(function (e){ 
    var cityObj, districtObj, wardObj;

    $.ajax({
        url: "files/getdata2.php",
        type: "POST",
        dataType: "json"
    }).done(function(data){
        console.log(data);
        cityObj         = data.cities;
        districtObj     = data.district;
        wardObj         = data.ward;
        addData("#city", cityObj, "-- Select a City --", "*");
    });

    // var cityObj 	= $.parseJSON('<?php echo $cityObj; ?>');
    // var districtObj = $.parseJSON('<?php echo $districtObj; ?>');
    // var wardObj 	= $.parseJSON('<?php echo $wardObj; ?>');

    
    
    $("#city").change(function (e) { 
        var cityID = $(this).find(":selected").val();				
        addData("#district", districtObj, "-- Select a District --", cityID);	

        console.log(cityID);
    });

    $("#district").change(function (e) { 
        var districtID = $(this).find(":selected").val();				
        addData("#ward", wardObj, "-- Select a Ward --", districtID);	

        console.log(districtID);
    });		

    
});

function addData (selector, dataObj, text, parentID) { 
    $(selector).empty()
               .append('<option value="0">'+ text +'</option>');
    
    if(parentID == '*'){
        var optObj = dataObj;
    }else if(parentID > 0){
        var optObj = dataObj[parentID];
    }

    // console.log(optObj);

    if ($(optObj).length > 0) {
        $.each($(optObj), function (i, val) { 						
            var opt = '<option value="'+ val.id +'">'+ val.name +'</option>';
            $(selector).append(opt);

            // console.log(val);
        } );
    }

    // console.log(selector);
    // console.log(dataObj);
}