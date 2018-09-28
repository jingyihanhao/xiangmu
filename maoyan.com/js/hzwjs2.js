$(function(){
	$(".main-title li a").click(function(){
		$(".main-title li").removeClass("active2");
		$(this).parent("li").addClass("active2");
	})
})