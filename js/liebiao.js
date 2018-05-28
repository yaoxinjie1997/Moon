
$(function(){
	//右侧导航回到顶部的js
	function lb_hddb(){
		var $hddb=$(".lb-r-dh").find("a").eq(3);
		var $hddb=$(".lb-r-dh").find("a").eq(3);
		//console.log($(".lb-r-dh").find("a"))
		$hddb.click(function(){
			$("body,html").animate({
				"scrollTop":0
			},"normal")
		})
	}
	lb_hddb();
	//顶部悬浮的js
	var $t_xf= $("#top .header_wrap .header_bottom");
	var $n_xf=$("nav");
	$(window).scroll(function(){
		if($(this).scrollTop()>=50){
			$t_xf.css({
				"position":"fixed",
				"background":"#333",
				"z-index":"3",
				"top":"0",
				"width":"100%",
				"left":"0",
				"opacity":".9"
			})
		}else{
			$t_xf.css({
				"position":"static",
				"opacity":"1"
			})
		}
		if($(this).scrollTop()>=92){
			$n_xf.css({
				"position":"fixed",
				"z-index":"3",
				"top":"42px",
				"width":"100%",
				"left":"0",
				"opacity":".9",
				"border-bottom":"1px solid #ddd"
			})
		}else{
			$n_xf.css({
				"position":"static",
				"opacity":"1",
				"border-bottom":"none"
			})
		}
	})
	
})
