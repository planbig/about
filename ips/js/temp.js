// 點選地圖空白區域，移除使用者、雷達的選取狀態
$(".map img").click(function() {
	$("#liveMap-id .radar").removeClass("active");
	$("#liveMap-id .list-group-item").removeClass("active");
	if ($("#liveMap-id .radar").hasClass("content-us")) {
		$("#liveMap-id .radar.content-us").removeClass("content-us").addClass("content-pp");
	}
});

//LiveMap Gateway選取，加入狀態
$("#liveMap-id .radar-content").click(function() {
	$(this).parent().toggleClass("active").siblings().removeClass("active");
	$("#liveMap-id .list-group-item").removeClass("active");
	if ($("#liveMap-id .radar:nth-child(8)").hasClass("active")) {
		$("#liveMap-id .list-group-item:nth-child(1)").addClass("active");
		$("#liveMap-id .list-group-item:nth-child(2)").addClass("active");
		$("#liveMap-id .list-group-item:nth-child(3)").addClass("active");
	} else {
		$("#liveMap-id .radar:nth-child(8)").removeClass("content-us")
		$("#liveMap-id .radar:nth-child(8)").addClass("content-pp")
		$("#liveMap-id .list-group-item:nth-child(1)").removeClass("active");
		$("#liveMap-id .list-group-item:nth-child(2)").removeClass("active");
		$("#liveMap-id .list-group-item:nth-child(3)").removeClass("active");
	};
});

//LiveMap User選取，加入狀態
$("#users .list-group-item").click(function() {
	$(this).toggleClass("active").siblings().removeClass("active");
	$("#liveMap-id .radar").removeClass("active");
	if ($("#liveMap-id .list-group-item:nth-child(1), #liveMap-id .list-group-item:nth-child(2),  #liveMap-id .list-group-item:nth-child(3)").hasClass("active")) {
		$("#liveMap-id .radar:nth-child(8)").removeClass("content-pp");
		$("#liveMap-id .radar:nth-child(8)").addClass("content-us active");
	} else {
		$("#liveMap-id .radar:nth-child(8)").addClass("content-pp");
		$("#liveMap-id .radar:nth-child(8)").removeClass("content-us active");
	};
});