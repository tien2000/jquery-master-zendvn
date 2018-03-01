(function($){
	$.fn.tPaging = function(options){
		// console.log("Hi TlsPaging");

	// ============================================================
		// ============ Các giá trị mặc định của options ==============		
		var defaults = {	
			"rows"				: "#rows",
			"pages"				: "#pages",
			"items"				: 6,
			"height"			: 27,
			"currentPage"		: 1,
			"total"				: 0,
			"btnPrevious"		: ".goPrevious",
			"btnNext"			: ".goNext",
			"txtCurrentPage"	: "#currentPage",
			"lblPageInfo"		: ".pageInfo"
		};
	// ============================================================

		options = $.extend(defaults, options);	

	// ============================================================
		// ============ Các biến sử dụng trong Plugin ==============		
		var rows 			= $(options.rows);
		var pages 			= $(options.pages);
		var btnPrevious 	= $(options.btnPrevious);
		var btnNext 		= $(options.btnNext);
		var txtCurrentPage 	= $(options.txtCurrentPage);
		var lblPageInfo 	= $(options.lblPageInfo);
	// ============================================================

	// ============================================================
		// Khởi tạo các hàm cần thiết khi Plugin được sử dụng
		init();				
	// ============================================================

	// ============================================================
		// ============ FUNCTION ==============
		// ==== Hàm khởi động ====
		function init(){
			// Lấy tổng số trang 
			$.ajax({
				url				: "files/getdata.php?type=count&items=" + options.items,
				type			: "GET",
				dataType		: "json"
			}).done(function(data){				
				options.total = data.total;	
				pageInfo();
				// console.log(options);
			});

			// Gán sự kiện cho btnPrevious, btnNext, txtcurrentPage
			setCurrentPage(options.currentPage);

			btnPrevious.on("click", function(e){
				goPrevious();
			});

			btnNext.on("click", function(e){
				goNext();
			});

			txtCurrentPage.on("keyup", function(e){
				if (e.keyCode == 13) {		// Phím Enter
					var currentPageValue = parseInt($(this).val());
					if (isNaN(currentPageValue) || currentPageValue <= 0 
												|| currentPageValue > options.total) {
						alert("Giá trị nhập vào không phù hợp");
					} else {
						loadData(currentPageValue);
						options.currentPage = currentPageValue;
						pageInfo();
					}

					// console.log(currentPageValue);
				}
			});

			
		}

		// ==== Hàm xử lý khi nhấn nút btnPrevious ====
		function goPrevious(){

		}

		// ==== Hàm xử lý khi nhấn nút btnNext ====
		function goNext(){

		}

		// ==== Hàm xử lý gán giá trị truyền vào trogn ô textbox txtcurrentPage ====
		function setCurrentPage(value){
			txtCurrentPage.val(value);
		}

		// ==== Hàm hiển thị thông tin phân trang ====
		function pageInfo(){
			lblPageInfo.text("Page " + options.currentPage + " of " + options.total);
		}

		// ==== Thiết lập chiều cao cho ul#rows ====
		function setRowsHeight(){
			
		}

		// ==== Hàm load thông tin từ DB đưa vào #rows ====
		function loadData(page){
			// console.log("loadData");
		}

		// ==== Xóa 1 dòng trên giao diện ====
		function deleteItem(obj){
			
		}
	// ============================================================
	};
})(jQuery);

$(document).ready(function(e){
	var obj = {};

	$("#paging").tPaging(obj);
});