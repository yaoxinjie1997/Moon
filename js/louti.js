$(function(){
	console.log($("#right-dh").find("map"))
	$map=$("#right-dh").find("map").find("area");
	$map.eq(0).click(function(){
		$("body,html").animate({
				"scrollTop":0
			},500)
	})
	$map.eq(1).click(function(){
		$("body,html").animate({
				"scrollTop":$("#fxhh").offset().top
			},500)
	})	
	$map.eq(2).click(function(){
		$("body,html").animate({
				"scrollTop":$("#rjzt").offset().top
			},500)
	})	
	$map.eq(3).click(function(){
		$("body,html").animate({
				"scrollTop":$("#jhtj").offset().top
			},500)
	})	
	$map.eq(4).click(function(){
		$("body,html").animate({
				"scrollTop":$("#zx").offset().top
			},500)
	})	
			

})