$(function(){
	//获取数据
	var sear_id=location.search.substr(1,location.search.length-1);
	//console.log(sear_id) ;
	$.get("http://h6.duchengjiu.top/shop/api_goods.php",{
		"goods_id":sear_id
	},function(data){
		//console.log(data.data[0])
		var $data=data.data[0];
		$(".wpxq-r .wpxq-r-t h5").html($data.goods_desc);//物品标题
		$(".wpxq-r .wpxq-r-t p b span").html($data.goods_id);//物品编号
		$(".wpxq-r .wpxq-r-c").find("p").eq(0).find("span").html($data.price);//物品价格
		$(".wpxq-t .wpxq-l-t").find("img").eq(0).attr("src",$data.goods_thumb);//物品图片
		$("#fangdajing").find("img").attr("src",$data.goods_thumb);//物品放大图片
		$(".wpxq-t .wpxq-l-b ul li img").attr("src",$data.goods_thumb);//物品缩略图
		$("#wpxq .wpxq-r .wpxq-r-b .w-r-b5 #jrgwc").attr("goods_id",$data.goods_id)//放入购物车按钮
	})
	//放大镜
	var $wpxq_k=$("#wpxq .wpxq-t .wpxq-l .wpxq-l-t");
	var $huakuai=$wpxq_k.find("#huadongkuai")
	var $fangdajing=$("#wpxq .wpxq-t .wpxq-l").find("#fangdajing")
	//console.log($wpxq_k,$fangdajing)
	$wpxq_k.mousemove(function(e){
		var evt=e||event;
		$huakuai.css("display","block")
		$fangdajing.css("display","block")
		var $x=evt.pageX-$huakuai.width()/2-132;
		var $y=evt.pageY-$huakuai.height()/2-193;
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
		//console.log($huakuai.offset().top-$huakuai.height()-93,$wpxq_k.width(),$fangdajing.find("img").width())  //不知为何要left要减去32.5  top要减去93
		$fangdajing.find("img").css({
			"left":-($huakuai.offset().left-$huakuai.width()-32.5)/$wpxq_k.width()*$fangdajing.find("img").width(),
			
			"top":-($huakuai.offset().top-$huakuai.height()-93)/$wpxq_k.height()*$fangdajing.find("img").height()
		})
	})
	$wpxq_k.mouseout(function(){
		$huakuai.css("display","none")
		$fangdajing.css("display","none")
	})
})
