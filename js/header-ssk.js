
$(function(){
	//console.log($(".h_t_r").find("input").eq(0))
	var $h_in1=$(".h_t_r").find("input").eq(0);
	var $h_ul1=$(".h_t_r").find("ul");
	$h_in1.bind("input propertychange",function(){
		$.getJSON("https://suggest.taobao.com/sug?code=utf-8&q="+$h_in1.val()+"&_ksTS=1525957175884_739&callback=?&k=1&area=c2c&bucketid=15",function(data){
		    var str="";
		  	var $arr=data.result;
		    $($arr).each(function(){
		    	//console.log(this[0])
		    	str+="<li>"+this[0]+"</li>";
		    })
		    //console.log(str);
		    $h_ul1.html(str);
		})
	})
	
})