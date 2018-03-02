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

		var aRows			= '';
	// ============================================================

	// ============================================================
		// Khởi tạo các hàm cần thiết khi Plugin được sử dụng
		init();		
		setRowsHeight();		
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
				loadData(options.currentPage);
			});

			// Gán sự kiện cho btnPrevious, btnNext, txtcurrentPage
			setCurrentPage(options.currentPage);

			btnPrevious.on("click", function(e){
				goPrevious();
				e.stopImmediatePropagation();
			});

			btnNext.on("click", function(e){
				goNext();
				e.stopImmediatePropagation();
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
						loadData(options.currentPage);				
					}

					// console.log(currentPageValue);
				}
			});

			
		}

		// ==== Hàm xử lý khi nhấn nút btnPrevious ====
		function goPrevious(){
			console.log("goPrevious: " + options.currentPage);
			if (options.currentPage != 1) {
				var pre = (options.currentPage) - 1;
				loadData(pre);
				setCurrentPage(pre);
				options.currentPage = pre;
				pageInfo(pre);
			}
		}

		// ==== Hàm xử lý khi nhấn nút btnNext ====
		function goNext(){
			console.log("goNext: " + options.currentPage);
			if (options.currentPage != options.total) {
				var pre = (options.currentPage) + 1;
				loadData(pre);
				setCurrentPage(pre);
				options.currentPage = pre;
				pageInfo(pre);
			}
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
			var ulHeight = (options.items * options.height) + "px";
			rows.css("height", ulHeight);
		}

		// ==== Hàm load thông tin từ DB đưa vào #rows ====
		function loadData(page){
			// console.log("loadData");

			$.ajax({
				url			: "files/getdata.php?type=list",
				type		: "POST",
				dataType	: "json",
				cache		: "false",
				data		: {
					"items" 		: options.items,
					"page"			: page
				},
			}).done(function(data){
				// console.log(data);

				if (data.length > 0) {
					rows.empty();

					$.each(data, function (i, val){ 
						var str = "<li item-id="+ val.id +">"
									+ val.id + ". " + val.name 
									+ "<a href='#'>Xóa</a>"
									+"</li>";
						rows.append(str);
					});

					// Lấy tập hợp các thẻ <a> nằm trong "ul#rows li"
					aRows = options.rows + " li a";
					// console.log(aRows);

					$(aRows).on("click", function (e){ 
						deleteItem(this);
					});
				}
			});
		}

		// ==== Xóa 1 dòng trên giao diện ====
		function deleteItem(obj){
			var parent = $(obj).parent();
			var itemID = $(parent).attr("item-id");
			var lastID = $(rows).children(":last").attr("item-id");
			// console.log(lastID);

			// Ẩn và xóa phần tử li được nhấn.
			$(parent).fadeOut({
				duration		: "slow",
				done			: function () { 
					$.ajax({
						url 		: "files/getdata.php?type=delete&id=" + itemID,
						type		: "GET",
						dataType	: "json"
					});

					// if (itemID == lastID && $(rows).children().length == 1) {		//itemID == lastID: Điều kiện ko tối ưu.
					// 	options.currentPage = options.currentPage - 1;
					// }

					if ($(rows).children().length == 1) {
						options.currentPage = options.currentPage - 1;
					}

					init();
					// pageInfo();
					$(this).remove();			// Loại bỏ hoàn toàn phần tử trong mã nguồn.
				 }
			});

			$.ajax({
				url 		: "files/getdata.php?type=one&id=" + lastID,
				type		: "GET",
				dataType	: "json"
			}).done(function(data) { 
				// console.log(data);
				if (data != false) {
					var str = '<li item-id="' + data.id + '">' 
								+ data.id + ' - ' + data.name 
								+ '<a href="#">Xoa</a>' 
								+ '</li>';
					str = $(str).hide().appendTo(rows);
					$(str).fadeIn("slow");
				}				
			});
		}
	// ============================================================
	};
})(jQuery);

$(document).ready(function(e){
	var obj = {"items" : 4};
	$("#paging").tPaging(obj);
});