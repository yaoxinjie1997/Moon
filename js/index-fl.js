$(function(){
	//获取分类列表
	$.get("http://h6.duchengjiu.top/shop/api_cat.php",function(data){
		//console.log(data.data)
		var $data=data.data;
		var str=""
		$($data).each(function(){
			//console.log($(this)[0])
			str+=`<li cat_id="${$(this)[0].cat_id}">
						${$(this)[0].cat_name}
							<ul class="dhlb">
							</ul>						
					</li>`
			$("nav .dh_list").html(str)
			
		})
		var $dhlist=$("nav .dh_list li")
			$dhlist.each(function(){
				//console.log($(this))
				$(this).mouseenter(function(){
					$(this).find(".dhlb").css({"display":"block"})
					$(this).addClass("hover1").siblings().removeClass("hover1")
					$.get("http://h6.duchengjiu.top/shop/api_goods.php",{
						cat_id:$(this).attr("cat_id")
					},function(data){
						if(data.code!=0){
							var sttr="";
							sttr="<li>没东西啊，我能怎么办，我也很绝望</li>"
							$(".dh_list").find(".dhlb").html(sttr)
						}else{				
						//console.log(data.code)
						var sttr="";
						//console.log(data.data)
						var $ddta=data.data
						$($ddta).each(function(){
							//console.log($(this)[0])
							sttr+=`<li><a href="liebiaoye.html?${$(this)[0].cat_id}">${$(this)[0].goods_name}</a></li>`	
						$(".dh_list").find(".dhlb").html(sttr)
						})
						}
					})
				})
				$(this).mouseleave(function(){
					$(this).find(".dhlb").css({"display":"none"})
					$(this).removeClass("hover1")
				})
			})
	})
})


