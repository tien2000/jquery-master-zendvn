(function($){
	$.tAutocomplete = function(options){
		// console.log("Hi NeoTien");

		var defaults = {
			"keywords" 	: "#keywords",
			"mID"		: "#mID",
			"results"	: ".results",
			"text"		: "Enter keyword here...",
			"record"	: 5,
			"minChar"	: 2,		// Số ký tự tối thiểu: Khi có 2 ký tự thì bắt đầu tìm kiếm trong DB.
			"linkType"	: false		// Tùy chọn đưa link vào kết quả tìm kiếm.
		};

		// Khai báo biến trong Plugin.
		var options 	= $.extend(defaults, options);
		var txtKeywords = $(options.keywords);
		var mID 		= $(options.mID);
		var results		= $(options.results);

		// Gọi các hàm chạy mặc định trong Plugin.
		addValue();

		txtKeywords.on('forcus click', function(e){
			if ($(this).val() == options.text) {
				$(this).val('').css({'color': '#000', 'font-style': 'unset'});
			}
		});

		txtKeywords.on('blur', function(e){		// Unforcus vào ô textbox.
			addValue();
			results.delay(100).slideUp(300);
		});

		txtKeywords.on('keyup', function(e){
			if ($(this).val().length >= options.minChar) {
				// console.log($(this).val());
				$.ajax({
					url		: "files/getdata.php",
					type 	: "POST",
					dataType: "json",
					data 	: {
						"keywords"	: $(this).val(),
						"limit"		: options.record
					}
				}).done(function(data){
					setDefaultPosition();
					var list = listItems(data);
					results.html(list);

					var selector = options.results + ' ul li';		// Lấy ra các cặp thẻ li.
					// console.log($(selector));

					$(selector).on('mouseenter mouseleave', function(e){
						$(this).toggleClass('bg02');
					});

					if (options.linkType == false) {
						$(selector).on('click', function(e){
							// console.log($(this).attr('item-id'));
							// console.log($(this).text());

							txtKeywords.val($(this).text());
							mID.val($(this).attr('item-id'));
						});
					};					
				});
			}
		});

		// ============= FUNCTION ================
		function listItems(data){
			console.log("List Items");
			console.log(data.length);

			str = '<ul>';
				if (data.length > 0) {
					$.each(data, function(i, val){
						var pTitle = val.name;
						var pLink  = 'product.php?id=' + val.id;
						var pID	   = val.id;

						if (options.linkType == false) {
							str += '<li item-id="'+ pID +'" title="'+ pTitle +'">'
									+ pTitle
									+'</li>';	
						} else {
							str += '<li title="'+ pTitle +'">'
									+ '<a href="'+ pLink +'">'+ pTitle +'</a>'
									+'</li>';
						}
						
					});				
				} else {
					str += '<li>No Record</li>';
				}
			str += '</ul>';

			return str;
		}

		function setDefaultPosition(){
			// console.log(txtKeywords.offset());

			results.css({
				left 		: txtKeywords.offset().left,
				top  		: txtKeywords.offset().top + txtKeywords.outerHeight(),
				position 	: "absolute",
				width		: txtKeywords.innerWidth(),
				display		: "block"
			});
		}

		function addValue(){
			if (txtKeywords.val() == '') {
				txtKeywords.val(options.text).css({'color': '#999', 'font-style': 'italic'});
			}
		}
		// ============= END FUNCTION ================

		// console.log(txtKeywords);
		// console.log(mID);
		// console.log(results);
	};
})(jQuery);

$(document).ready(function(e){
	var obj = {
		"linkType"	: false
	};

	$.tAutocomplete(obj);
});