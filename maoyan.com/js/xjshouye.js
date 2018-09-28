$(function(){
	$(".content .movie-list .row .movie .buy").hover(
		function(){
			$(this).css("background","red");
			$(this).find("a").css("color","white");
		},
		function(){
			$(this).css("background","white");
			$(this).find("a").css("color","red");
		});
		$(".content .movie-list .row .movie .yushou .yumai").hover(
		function(){
			$(this).css({"background":"deepskyblue","color":"white"});
		},
		function(){
			$(this).css({"background":"white","color":"deepskyblue"});
		});
		var a = 1;
		$(".banner .item .right").click(function(){
			a++;
			if(a<6){
			}
			else{
				a=1;
			}
			var b = ".picture-"+a;
			$(".banner .item .picture").find(b).css("display","block");
			$(".banner .item .picture").find(b).siblings().css("display","none");
			
		});
		$(".banner .item .left").click(function(){
			a--;
			if(a>0){
				
			}
			else{
				a=5;
			}
			
				var b = ".picture-"+a;
				$(".banner .item .picture").find(b).css("display","block");
				$(".banner .item .picture").find(b).siblings().css("display","none");
		});
	
				setInterval("$('.banner .item .right').click()",3000);
			
		
})

