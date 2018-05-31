$(function(){
	//点击加减按钮进行加减
	$(".jia").click(function(){
		$(".gw-wpsl").val(parseInt($(".gw-wpsl").val())+1);
	})
	$(".jian").click(function(){
		$(".gw-wpsl").val(parseInt($(".gw-wpsl").val())-1);
		if($(".gw-wpsl").val()<=1){
			$(".gw-wpsl").val(1)
		}
	})
	//点击加入购物车按钮 使物品存入Cookie
	var $jrgwc=$("#wpxq .wpxq-r .wpxq-r-b .w-r-b5 #jrgwc")
	//console.log($jrgwc)
	if(getCookie("gwc") !== undefined) {
				var obj = JSON.parse(getCookie("gwc"));
			} else {
				var obj = {};
			}
			var sum = 0;
			for(var b in obj) {
				sum += obj[b];
			}
	var $gwd=$(".lb-r-dh a span")//购物袋的位置
	$gwd.html(sum)
	$jrgwc.click(function(){
		//加入Cookie
		var $guc_wpid=$jrgwc.attr("goods_id")
		//console.log($guc_wpid)
		//console.log($(".gw-wpsl").val())
		if(obj[$guc_wpid] == undefined) {
						obj[$guc_wpid] =parseInt($(".gw-wpsl").val());
					} else {
						obj[$guc_wpid]+=parseInt($(".gw-wpsl").val());
						//console.log(obj[$guc_wpid])
					}
			var sum = 0;
			for(var b in obj) {
				sum += obj[b];
			}
			$gwd.html(sum)
			var objToStr = JSON.stringify(obj);
			setCookie("gwc",objToStr,7)
			//top的span改变数量
			hqgwcCookie();
	})
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
