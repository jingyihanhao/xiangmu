$(function(){
	$(".subnav li a").click(function(){
		$(".subnav li a").removeClass('active');
		$(this).addClass('active');
	});
	$(".many-nav li").click(function(){
		$(this).parent().children().removeClass('active');
		$(this).addClass('active');
	});
	$(".movies-list b").each(function(){
		if($(this).html()=="0"||$(this).html()=="1"||$(this).html()=="2"||$(this).html()=="3"||$(this).html()=="4"||$(this).html()=="5"||$(this).html()=="6"||$(this).html()=="7"||$(this).html()=="8"||$(this).html()=="9"||$(this).html()=="10"){
			$(this).parent().parent().parent().children().children(".daid").attr("class","Tp");
			$(this).parent().css("font-style","italic");
		}
		else{
			$(this).parent().parent().parent().children().children(".daid").attr("class","Tp1");
		}
	});
	$(".many-d").each(function(){
		if($(this).html()=="2DIMAX"){
			$(this).attr("class","imax2d");
		}
		else if($(this).html()=="3D"){
			$(this).attr("class","d3");
		}
		else if($(this).html()=="3DIMAX"){
			$(this).attr("class","imax3d");
		}
	});
	$(".left-box a:nth-of-type(1)").click(function(){
		$(this).css({"background":"#ED3931","color":"white"});
		$(this).siblings("a").css({"background":"#F4F3F4","color":"black"});
		$(".right-box>div:nth-of-type(1)").css("display","block");
		$(".right-box>div:nth-of-type(2)").css("display","none");
	});
	$(".left-box a:nth-of-type(2)").click(function(){
		$(this).css({"background":"#ED3931","color":"white"});
		$(this).siblings("a").css({"background":"#F4F3F4","color":"black"});
		$(".right-box>div:nth-of-type(2)").css("display","block");
		$(".right-box>div:nth-of-type(1)").css("display","none");
	})
})