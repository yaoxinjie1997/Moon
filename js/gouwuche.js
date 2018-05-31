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
		var zjg=0;
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
						<td><input type="checkbox" checked="checked" class="oinc" name="checkbox"  goods_id="${$data.goods_id}"/></td>
						<td>
							<div class="shop-xq-c">
								<a href="xiangqing.html?${$data.goods_id}">
									<img src="${$data.goods_thumb}"/>
								</a>
								<div>
									<p class="shop-name">${$data.goods_id}</p>
									<p class="shop-xh">${$data.goods_name}</p>
									<p class="shop-size">${$data.goods_desc}</p>
								</div>
							</div>
						</td>
						<td>￥<em class="shop-wpjg">${$data.price}</em></td>
						<td><span class="jian" onclick="jiancli(this)" goods_id="${$data.goods_id}"></span><input type="text" value="${obj[$id]}" class="gw-wpsl" /><span class="jia" onclick="jiacli(this)" goods_id="${$data.goods_id}"></span></td>
						<td>
							<a href="#">移至收藏夹</a>
							<br />
							<a href="#" onclick="odelete(this)" goods_id="${$data.goods_id}">删除</a>
						</td>
					</tr>
					`
				$(".shop-c table tbody").append(str)
				zjg=parseInt(zjg)+parseInt($data.price*obj[$id])
				$(".shop-b6 span b").html(zjg)
			})
			})($id)
		}
	}else{
		alert("购物袋暂时么得商品")
	}
	}
	setTimeout(function(){
				
			$(".check").click(function(){
				var obj = JSON.parse(getCookie("gwc"));
				var sum = 0;
				var zjg=$(".shop-b6 span b").html();
				var zzjg=0;
				for(var b in obj) {
					sum += obj[b];
				}
				if($("input[name='checkbox']").attr("checked")===undefined){
					$("input[name='checkbox']").attr("checked",true);
					$("input[name='checkbox']").prop("checked",true);
					$(".shop-b5 span").html(sum)//物品件数
					$(".shop-wpjg").each(function(){
						zzjg += $(this).html()*$(this).parent().next().find(".gw-wpsl").val();
					})
					$(".shop-b6 span b").html(zzjg)
				}else{
					$("input[name='checkbox']").removeAttr("checked");
					$(".shop-b5 span").html(0)//物品件数
					$(".shop-b6 span b").html(0)
				}
			})
			$(".oinc").click(function(){
				var obj = JSON.parse(getCookie("gwc"));
				var sum = 0;
				var zjg=$(".shop-b6 span b").html();
				for(var b in obj) {
					sum += obj[b];
				}
				var $val=$(this).parent().parent().find(".gw-wpsl").val()
				var $id=$(this).attr("goods_id")
				if($(this).attr("checked")===undefined){
					$(this).attr("checked",true);
					$(this).prop("checked",true);
					var aha=$val
					var jjgg=parseInt($(this).parent().parent().find("td").eq(2).find("em").html())*$val
				}else{
					$(this).removeAttr("checked");
					var aha=-$val
					var jjgg=-parseInt($(this).parent().parent().find("td").eq(2).find("em").html())*$val
				}
				sum=parseInt($(".shop-b5 span").html())+parseInt(aha) 
				$(".shop-b5 span").html(sum)//物品件数
				zjg=parseInt(zjg)+parseInt(jjgg)
				//console.log(parseInt(jjgg))
				$(".shop-b6 span b").html(zjg)
			})
		},1000)
})
