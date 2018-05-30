$(function(){
	
	//获取用户列表   （不用写了）
	var sear_id=location.search.substr(1,location.search.length-1);
	//console.log(sear_id)
	$.get("http://h6.duchengjiu.top/shop/api_userinfo.php",{
		status:"info",
		username:sear_id
	},function(data){
		//console.log(data)
	})
	//获取购物车Cookie
	hqgwcCookie();
	function hqgwcCookie(){
		if(getCookie("gwc")!==undefined){
		if(getCookie("gwc")=="{}"){
			$(".h_t_l #h_gwd").html("<li>购物袋暂时么得商品</li>")
		}
		var obj = JSON.parse(getCookie("gwc"));
		//console.log(obj)
		var sum = 0;
		for(var b in obj) {
			sum += obj[b];
		}
		$(".h_t_l a span").html(sum)//物品件数
		$(".lb-r-dh a span").html(sum)
		for(var $id in obj){
			var str="";
			(function($id){
				$.get("http://h6.duchengjiu.top/shop/api_goods.php",{
				"goods_id":$id
			},function(data){
				//console.log($id)
				var $data=data.data[0];
				str+=`<li>
						<div class="h_gwd-l">
							<a href="xiangqing.html?${$data.goods_id}">
								<img src="${$data.goods_thumb}"/>
							</a>
						</div>
						<div class="h_gwd-r">
							<p><a href="xiangqing.html?${$data.goods_id}">${$data.goods_name}</a></p>
							<p><a href="xiangqing.html?${$data.goods_id}">${$data.goods_desc}</a></p>
							<p><b>￥</b><span>${$data.price}</span> X<em>${obj[$id]}</em></p>
						</div>
						<input type="button" class="scgwc-ck" value="删除" onclick="sccookie(this)" wpid="${$data.goods_id}">

					</li>`
				$(".h_t_l #h_gwd").html(str);
				
			})
			})($id)
		}
	}else{
		$(".h_t_l #h_gwd").html("<li>购物袋暂时么得商品</li>")
	}
	}
	
})
