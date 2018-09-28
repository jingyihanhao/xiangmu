$(document).ready(function(){ 
     $(".left-seats div span").click(function() {
     	/*if($(this).find("img")[0].src)=="lhimg/seat-none.png")*/
     	var a = $(this).find("img")[0].src;
        var b = a.split("com/")[1];
        if(b=="lhimg/seat-none.png"){
        	$(this).find("img").attr("src","lhimg/seat-yes.png");
        }
        else if(b=="lhimg/seat-done.png"){	
        }
        else{
         	$(this).find("img").attr("src","lhimg/seat-none.png");
        } 
     });
     $(".img-list ul li").click(function(){
        	$(".img-list ul li").removeClass("active1");
        	$(this).addClass("active1");
      });
     $(".cinemas-box div ul li").click(function(){
     	$(this).parent().children("li").removeClass("active2");
     	$(this).addClass("active2");
     });
})