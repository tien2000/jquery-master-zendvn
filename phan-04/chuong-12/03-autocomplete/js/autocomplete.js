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
		setDefaultPosition();

		txtKeywords.on('forcus click', function(e){
			if ($(this).val() == options.text) {
				$(this).val('').css({'color': '#000', 'font-style': 'unset'});
			}
		});

		txtKeywords.on('blur', function(e){
			addValue();
		});

		// ============= FUNCTION ================
		function setDefaultPosition(){
			console.log(txtKeywords.offset());

			results.css({
				left 		: txtKeywords.offset().left,
				top  		: txtKeywords.offset().top + txtKeywords.outerHeight(),
				position 	: "absolute",
				width		: txtKeywords.innerWidth()
			});
		}

		function addValue(){
			if (txtKeywords.val() == '') {
				txtKeywords.val(options.text).css({'color': '#999', 'font-style': 'italic'});
			}
		}

		console.log(txtKeywords);
		// console.log(mID);
		// console.log(results);
	};
})(jQuery);

$(document).ready(function(e){
	var obj = {

	};

	$.tAutocomplete(obj);
});