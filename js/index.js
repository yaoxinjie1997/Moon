$(function(){
	
	//获取用户列表
	var sear_id=location.search.substr(1,location.search.length-1);
	//console.log(sear_id)
	$.get("http://h6.duchengjiu.top/shop/api_userinfo.php",{
		status:"info",
		username:sear_id
	},function(data){
		//console.log(data)
	})
	//获取购物车Cookie
	if(getCookie("gwc")!==undefined){
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
			console.log($id)
			console.log(obj[$id])
			$.get("http://h6.duchengjiu.top/shop/api_goods.php",{
				"goods_id":$id
			},function(data){
				console.log($id)
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
		}
	
	}else{
		$(".h_t_l #h_gwd").html("购物袋暂时么得商品")
	}
})
