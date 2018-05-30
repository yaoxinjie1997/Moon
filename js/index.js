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
	if(getCookie("cart")!==undefined){
		var obj = JSON.parse(getCookie("cart"));
		console.log(obj)
		var sum = 0;
		for(var b in obj) {
			sum += obj[b];
		}
		$(".h_t_l a span").html(sum)//物品件数
		for(var $id in obj){
			var str="";
			var arr=[];
			//console.log($id)
			console.log(obj[$id])
			$.get("http://h6.duchengjiu.top/shop/api_goods.php",{
				"goods_id":$id
			},function(data){
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
						<div class="scgwc-ck">
							删除
						</div>
					</li>`
				$(".h_t_l #h_gwd").html(str)
			})
			
		}
	
	}else{
		$(".h_t_l #h_gwd").html("购物袋暂时么得商品")
	}
})
