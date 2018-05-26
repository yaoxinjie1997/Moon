$(function(){
//----------------------------------------------------------------------------------------------------
	//console.log($("#cen-dl").find("input").last())
	var $sub=$("#cen-dl").find("input").last();
	$sub.click(function(){
		
		$.post("http://h6.duchengjiu.top/shop/api_user.php",{
			status:"register",
			username:$("#username").val(),//$("#username").val()
			password:$("#password").val()
		},function(data){
			//console.log(data)
			if(data.code!=0){
				alert(data.message)
			}else{
				alert("注册成功");
				location.assign("../html/denglu.html")
			}
		})
		return false;
	})	
//----------------------------------------------------------------------------------------------------
})
