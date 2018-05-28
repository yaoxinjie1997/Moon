$(function(){
	$(".ban_list").css("width",$(".ban_list").find("li").length*$(".ban_list").find("li").width())
	var i=0;
	$(".ban-xb").find("li").eq(0).addClass("hover")
	var timer=setInterval(function(){
		foo();
	},3000)
	function foo(){
		i++;
		if(i==$(".ban_list").find("li").length){
			i=1;
			$(".ban_list").css("left",0);
		}
		if(i==$(".ban-xb").find("li").length){
			$(".ban-xb").find("li").eq(0).addClass("hover").siblings().removeClass("hover");
		}else{
			$(".ban-xb").find("li").eq(i).addClass("hover").siblings().removeClass("hover");
		}
		
		$(".ban_list").animate({
			left:- $(".ban_list").find("li").width()*i
		},1000)
	}
	$(".banner").mouseover(function(){
			clearInterval(timer);
		})
	$(".banner").mouseout(function(){
				timer=setInterval(function(){
					foo();
				},3000);
		})
	$(".ban-xb").find("li").each(function(){
			$(this).click(function(){
				$(".ban_list").animate({
					left:- $(".ban_list").find("li").width()*$(this).index()
				},100)
				$(".ban-xb").find("li").eq($(this).index()).addClass("hover").siblings().removeClass("hover");
			})
		})
})
