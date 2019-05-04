let unloginUl=document.querySelector("#unlogin-ul");
let loginUl=document.querySelector("#login-ul");
let usernameSpan=document.querySelector("#username-span");
//取cookie
let username=tools.cookie("username");
//判断cookie的值,username存在
if(username){
	unloginUl.classList.add("hidden");
	loginUl.classList.remove("hidden");
	usernameSpan.innerHTML=username;
}