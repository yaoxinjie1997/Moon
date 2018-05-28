
$(function(){
	//获取数据
	$.get("http://h6.duchengjiu.top/shop/api_goods.php",{//101 112 125
		"cat_id":45
	},function(data){
		//console.log(data);
		//console.log(data.data);
		var str="";
		var $wplist=$(".lb-wp-c>ul");
		//console.log($wplist);
		$(data.data).each(function(){
			//console.log($(this)[0])
			str+=`<li>
						<a href="#" cat_id="${$(this)[0].goods_id}"><img src="${$(this)[0].goods_thumb}"/></a>
						<div class="wp-list">
							<h6>${$(this)[0].goods_name}</h6>
							<p><a href="#">${$(this)[0].goods_desc}</a></p>
							<b>￥<span>${$(this)[0].price}</span></b>
						</div>
						<div class="wp-size">
							<p>没有这个属性我也很无奈:</p>
							<ul>
								<li><span>尺码</span></li>
								<li><span>尺码</span></li>
								<li><span>尺码</span></li>
							</ul>
						</div>
					</li>`
		})
		$wplist.html(str)
		//物品滑过尺码滑出
	function lb_size(){
		var $list= $(".lb-wp-c>ul>li");
		$list.each(function(){
			if(($(this).index()+1)%4==0){
				//console.log($(this).index())
				$(this).css({"margin-right":"0"})
			}
		})
		$list.mouseenter(function(){
			$(this).find(".wp-size").slideDown("fast")
		})
		$list.mouseleave(function(){
			$(this).find(".wp-size").slideUp("fast")
		})
	}
	lb_size();
	})	
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
	function lb_xf(){
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
	}
	lb_xf();
	
})
