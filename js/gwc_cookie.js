$(function(){
	//获取购物车Cookie
	
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
		if(obj[$guc_wpid] == undefined) {
						obj[$guc_wpid] = 1;
					} else {
						obj[$guc_wpid]++;
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
		//飞入购物袋效果
	/*	var $img=$("#wpxq .wpxq-t .wpxq-l-t a img").clone();
		$img.prependTo($("#wpxq .wpxq-t .wpxq-l-t a"))
		$img.css({
			"position":"absolute"
		})
		console.log($img);
		
		var $speed=10;
		var $mbw=50;
		if($img.offset().top!=$mb_top){
			var $mb_top=$gwd.offset().top;//目标Y轴位置
			var $mb_left=$gwd.offset().left;//目标X轴位置
			var $cs_top=$("#wpxq .wpxq-t .wpxq-l-t a img").offset().top;//初始Y轴位置
			var $cs_left=$("#wpxq .wpxq-t .wpxq-l-t a img").offset().left;//初始Y轴位置
			var $tt=($mb_top-$cs_top)/10
			var $ll=($mb_left-$cs_left)/10
			var $csw=($img.width)/50
				$img.animate({
				"top":$tt,
				"left":$ll,
				"width":$csw
			},100)
		}
		*/
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
