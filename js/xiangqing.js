$(function(){
	//获取数据
	$.get("http://h6.duchengjiu.top/shop/api_goods.php",{
		"goods_id":249851
	},function(data){
		console.log(data.data[0])
		var $data=data.data[0];
		$(".wpxq-r .wpxq-r-t h5").html($data.goods_desc);//物品标题
		$(".wpxq-r .wpxq-r-t p b span").html($data.goods_id);//物品编号
		$(".wpxq-r .wpxq-r-c").find("p").eq(0).find("span").html($data.price);//物品价格
		$(".wpxq-t .wpxq-l-t").find("img").eq(0).attr("src",$data.goods_thumb);//物品图片
		$(".wpxq-t .wpxq-l-b ul li img").attr("src",$data.goods_thumb);//物品缩略图
	})
	//放大镜
	var $wpxq_k=$("#wpxq .wpxq-t .wpxq-l .wpxq-l-t");
	var $huakuai=$wpxq_k.find("#huadongkuai")
	var $fangdajing=$("#wpxq .wpxq-t .wpxq-l").find("#fangdajing")
	console.log($wpxq_k,$fangdajing)
	$wpxq_k.mousemove(function(e){
		var evt=e||event;
		$huakuai.css("display","block")
		$fangdajing.css("display","block")
		var $x=evt.pageX;
		var $y=evt.pagey;
		if($x<=0){
			$x=0;
		}
		if($x>=$wpxq_k.width()-$huakuai.width()){
			$x=$wpxq_k.width()-$huakuai.width();
		}
		if($y<=0){
			$y=0
		}
		if($y>=$wpxq_k.height()-$huakuai.height()){
			$y=$wpxq_k.height()-$huakuai.height();
		}
		$huakuai.css({
			"top":$y,
			"left":$x
		})
		console.log($x)
		
	})
	$wpxq_k.mouseout(function(){
		$huakuai.css("display","none")
		$fangdajing.css("display","none")
	})
})
