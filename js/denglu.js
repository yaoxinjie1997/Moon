$(function(){
//----------------------------------------------------------------------------------------------------
	//console.log($("#cen-dl").find("input").last())
	var $sub=$("#cen-dl").find("input").last();
	$sub.click(function(){
		if($("#username").val()==""){
			alert("用户名勿为空")
		}else{
			$.post("http://h6.duchengjiu.top/shop/api_user.php",{
				status:"login",
				username:$("#username").val(),
				password:$("#password").val()
			},function(data){
				console.log(data)
				if(data.code!=0){
					alert(data.message)
				}else{
					console.log($('#username').val());
					alert("登录成功");
					location.assign("../html/index.html?"+$('#username').val())
				}
			})
		}
		
		return false;
	})	
//----------------------------------------------------------------------------------------------------
})
