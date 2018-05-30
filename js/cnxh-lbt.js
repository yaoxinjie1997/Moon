$(function(){
	var i=0
	clearInterval(timer)
	var timer=setInterval(function(){
		i++;
		if(i==4){
			i=0
			$(".cnxh-b .cnxh-lbt ul").css({"left":0})	
		}
		$(".cnxh-b .cnxh-lbt ul").animate({
			left:-$(".cnxh-b .cnxh-lbt").width()*i
		},1000)
	},3000)
	$(".cnxh-b .cnxh-z").click(function(){
		i--;
		if(i<=0){
			i=0
		}else{
			$(".cnxh-b .cnxh-lbt ul").animate({
				left:-$(".cnxh-b .cnxh-lbt").width()*i
			},1000)
		}
		
	})
	$(".cnxh-b .cnxh-y").click(function(){
		i++;
		if(i>=4){
			i=4
		}else{
			$(".cnxh-b .cnxh-lbt ul").animate({
				left:-$(".cnxh-b .cnxh-lbt").width()*i
			},1000)
		}
		
	})
	$(".cnxh-b").mouseover(function(){
		clearInterval(timer)
	})
	$(".cnxh-b").mouseout(function(){
		clearInterval(timer)
		 timer=setInterval(function(){
			i++;
			if(i==4){
				i=0
				$(".cnxh-b .cnxh-lbt ul").css({"left":0})	
			}
			$(".cnxh-b .cnxh-lbt ul").animate({
				left:-$(".cnxh-b .cnxh-lbt").width()*i
			},1000)
		},3000)
	})
})