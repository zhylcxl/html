$(function() {
	var imgWidth;
	var imgHeight;
	var intervalId;
	
	imgWidth = $(".banner").width();
	imgHeight = $(".banner").height();
	$(".banner-outer").css("height", imgHeight + "px");
	// 排除浏览器滚动条的干扰，再运行一次该代码
	imgWidth = $(".banner").width();
	imgHeight = $(".banner").height();
	$(".banner-outer").css("height", imgHeight + "px");
	
	$(window).resize(function() {
		imgWidth = $(".banner").width();
		imgHeight = $(".banner").height();
		$(".banner-outer").css("height", imgHeight + "px");
	});
	
	function bannerScroll() {
		$(".banner-inner").css("left", -imgWidth + "px");
		$(".banner-inner").append($(".banner:nth-child(1)"));
		$(".banner-inner").css("left", "0px");
	}
	
	intervalId = window.setInterval(bannerScroll, 2000);
	
	$(".banner").mouseover(function() {
		window.clearInterval(intervalId);
	});
	
	$(".banner").mouseleave(function() {
		intervalId = window.setInterval(bannerScroll, 2000);
	});
});
