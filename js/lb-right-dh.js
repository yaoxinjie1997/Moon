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