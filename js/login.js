class Login{
	constructor(){ 
	this.inputPassword=document.querySelector("#inputPassword");
	this.inputUserName=document.querySelector("#inputUserName");
	this.btn=document.querySelector("#btn");
	this.checkbox=document.querySelector("#checkbox");
	this.bindEvent();
	}
	bindEvent(){
		this.btn.onclick=()=>{
			let username=this.inputUserName.value,
				password=this.inputPassword.value;
			//发送请求
			tools.ajax("POST","../api/v1/register.php",{username,password},data=>{
			if(data.res_code===1){
				//将username存cookie
				if(this.checkbox.checked===true){
					tools.cookie("username",username,{expires:7,path:"/"})
				}else{
					tools.cookie("username",username,{path:"/"})
				}
				alert(data.res_message);
				//登录成功，跳转首页
//				window.open="../index.html";
				window.Location.href="../index.html";
			}
			})
			//form里的button默认提交
			return false;
		}
	}
}
new Login();
