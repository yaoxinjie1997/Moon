$(function(){
	hqgwcCookie();
	function hqgwcCookie(){
		if(getCookie("gwc")!==undefined){
		if(getCookie("gwc")=="{}"){
			alert("购物袋暂时么得商品")
		}
		var obj = JSON.parse(getCookie("gwc"));
		//console.log(obj)
		var sum = 0;
		var str="";
		for(var b in obj) {
			sum += obj[b];
		}
		$(".shop-b5 span").html(sum)//物品件数
		for(var $id in obj){
			(function($id){
				$.get("http://h6.duchengjiu.top/shop/api_goods.php",{
				"goods_id":$id
			},function(data){
				//console.log($id)
				var $data=data.data[0];
				//console.log($data)
				//console.log(obj[$id])
				str=`<tr class="shop-xq">
						<td><input type="checkbox" checked="checked"/></td>
						<td>
							<div class="shop-xq-c">
								<a href="#">
									<img src="${$data.goods_thumb}"/>
								</a>
								<div>
									<p class="shop-name">${$data.goods_id}</p>
									<p class="shop-xh">${$data.goods_name}</p>
									<p class="shop-size">${$data.goods_desc}</p>
								</div>
							</div>
						</td>
						<td>￥${$data.price}</td>
						<td><span class="jian" onclick="jiancli(this)" goods_id="${$data.goods_id}"></span><input type="text" value="${obj[$id]}" class="gw-wpsl" /><span class="jia" onclick="jiacli(this)" goods_id="${$data.goods_id}"></span></td>
						<td>
							<a href="#">移至收藏夹</a>
							<br />
							<a href="#">删除</a>
						</td>
					</tr>
					`
				$(".shop-c table tbody").append(str)
				
			})
			})($id)
		}
	}else{
		alert("购物袋暂时么得商品")
	}
	}
	
})
