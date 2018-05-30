$(function(){
	//点击加入购物车按钮 使物品存入Cookie
	var $jrgwc=$("#wpxq .wpxq-r .wpxq-r-b .w-r-b5 #jrgwc")
	//console.log($jrgwc)
	if(getCookie("cart") !== undefined) {
				var obj = JSON.parse(getCookie("cart"));
			} else {
				var obj = {};
			}
			var sum = 0;
			for(var b in obj) {
				sum += obj[b];
			}
	var $gwd=$(".lb-r-dh a span")
	$gwd.html(sum)
	$jrgwc.click(function(){
		//加入Cookie
		var $guc_wpid=$jrgwc.attr("goods_id")
		console.log($guc_wpid)
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
			setCookie("cart",objToStr,7)
		//飞入购物袋效果
	})
})
