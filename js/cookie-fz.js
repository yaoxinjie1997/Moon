function addEvent(obj, type, fn) {
	if(obj.addEventListener) {
		obj.addEventListener(type, fn);
	} else {
		obj.attachEvent("on" + type, fn);
	}
}

function removeEvent(obj, type, fn) {
	if(obj.removeEventListener) {
		obj.removeEventListener(type, fn);
	} else {
		obj.detachEvent("on" + type, fn);
	}
}

function getByClass(classname) {
	if(document.getElementsByClassName) {
		return document.getElementsByClassName(classname);
	} else {
		//先取到所有的标签
		var allEle = document.getElementsByTagName("*");

		var newArr = []; //保存含有指定类名的DOM对象

		for(var i = 0; i < allEle.length; i++) {
			//取到每一个元素的类名
			var cn = allEle[i].className;

			// 避免使用indexOf方法，原因：比如取test1，含有testtest1这个类名的元素也将被取到
			// 将类名字符串转换成数组，已知类名是以空格来分割的
			var arr = cn.split(" ");

			// 避免使用indexOf，因为其是ES5新增方法，有兼容性问题
			for(var j = 0; j < arr.length; j++) {
				if(arr[j] == classname) {
					newArr.push(allEle[i]);
					break;
				}
			}
		}
		return newArr;
	}
}

function getStyle(obj, attr) {
	/*if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	return getComputedStyle(obj,null)[attr];*/

	if(window.getComputedStyle) {
		return getComputedStyle(obj, null)[attr];
	}
	return obj.currentStyle[attr];
}

function setCookie(name, value, n) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + n);
	document.cookie = name + "=" + value + ";expires=" + oDate + ";path=/";
}

function getCookie(name) {
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i = 0; i < arr.length; i++) {
		var newArr = arr[i].split("=");
		if(newArr[0] === name) {
			return newArr[1];
		}
	}
}

function removeCookie(name) {
	setCookie(name, 1, -1);
	
}
function sccookie(data){
	//console.log(data)
	//console.log($(data).parent().parent().parent().find("a").find("span").html())
	var $wpid=$(data).attr("wpid")
	//console.log($wpid)
	var obj = JSON.parse(getCookie("gwc"));
	//console.log(obj[$wpid])
	obj[$wpid]--;
	var $spht=$(data).parent().parent().parent().find("a").find("span").html();//top的span
	$spht--;
	var $ycdhs=$(".lb-r-dh a span").html();//有右侧导航栏的页面 里边购物袋里边的span
	$ycdhs--;
	var sum = 0;
		for(var b in obj) {
			sum += obj[b];
		}
	//console.log($ycdhs)
	if(obj[$wpid]<=0){
		obj[$wpid]=0
	}
	if(obj[$wpid]==0){
		$(data).parent().parent().parent().find("a").find("span").html(sum)
		delete obj[$wpid]
		$(data).parent().remove()
		$(".lb-r-dh a span").html(sum);
		setCookie("gwc",JSON.stringify(obj),7);
	}else{
		$(data.parentNode).find(".h_gwd-r").find("p").eq(2).find("em").html(obj[$wpid]);
		$(data).parent().parent().parent().find("a").find("span").html($spht);
		$(".lb-r-dh a span").html($ycdhs);
		setCookie("gwc",JSON.stringify(obj),7);
	}
	
}
//点击加减按钮进行加减
	function jiancli(data){//减
		var $inp=$(data).parent().find("input");
		$inp.val(parseInt($inp.val()-1))
		if($inp.val()<=0){
			$inp.val(0)
			console.log($(data).parent().parent())
			$(data).parent().parent().remove();
		}
		var obj = JSON.parse(getCookie("gwc"));
		console.log(obj)
		var sum = 0;
			for(var b in obj) {
				sum += obj[b];
			}
		var $id=$(data).attr("goods_id")
		console.log($id)
		obj[$id]--;
		if(obj[$id]<=0){
			obj[$id]=0
			delete obj[$id]
		}
		sum--;
		if(sum<=0){
			sum=0
		}
		$(".shop-b5 span").html(sum)
		setCookie("gwc",JSON.stringify(obj),7);
	}
	function jiacli(data){
		var $inp=$(data).parent().find("input");
		$inp.val(parseInt($inp.val())+1);
		var obj = JSON.parse(getCookie("gwc"));
		var $id=$(data).attr("goods_id")
		obj[$id]++;
		setCookie("gwc",JSON.stringify(obj),7);
	}
	