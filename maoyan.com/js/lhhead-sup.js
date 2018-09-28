$(function(){
	$(".head-nav ul li").hover(function(){
    	if($(this).prop("className")!="active3"){
    		$(this).find("a").addClass("active4");
     	}
    },function(){
        $(this).find("a").removeClass("active4");
    }
    );
    $(".head-nav ul li").click(function(){
     	$(this).find("a").removeClass("active4");
     	$(".head-nav ul li").removeClass("active3");
        $(this).addClass("active3");
    });
    $(".app-container a").hover(function(){
    	$(".app-container").css({"border-left":"1px solid #dcd4d7","border-right":"1px solid #dcd4d7"});
    	$(".app-container .app-more").css("display","block");
    	$(".app-container .app-name .app-down .morelist").addClass("fanzhan180");
    },function(){
        $(".app-container").css({"border-left":"1px solid #FFFFFF","border-right":"1px solid #FFFFFF"});
        $(".app-container .app-more").css("display","none");
        $(".app-container .app-name .app-down .morelist").removeClass("fanzhan180");
    });
     $(".city-container").hover(function(){
    	$(".city-container").css({"border-left":"1px solid #dcd4d7","border-right":"1px solid #dcd4d7"});
    	$(".city-container .city-more").css("display","block");
    	$(".city-container .city-selected .morelist").addClass("fanzhan180");
    },function(){
        $(".city-container").css({"border-left":"1px solid #FFFFFF","border-right":"1px solid #FFFFFF"});
        $(".city-container .city-more").css("display","none");
        $(".city-container .city-selected .morelist").removeClass("fanzhan180");
    });
    $(".login-container").hover(
    	function(){
    		$(".login-container .login-more").css("display","block");
    		$(" .login-name .morelist").addClass("fanzhan180");
    	},
    	function(){
    		$(".login-container .login-more").css("display","none");
    		$(" .login-name .morelist").removeClass("fanzhan180");
    	}
    )
})