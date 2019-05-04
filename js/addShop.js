class Addshop{
	constructor(){
		this.inputName=document.querySelector("#inputName");
		this.inputPrice=document.querySelector("#inputPrice");
		this.inputNum=document.querySelector("#inputNum");
		this.addBtn=document.querySelector("#btn-shop-add");
		this.init();
	}
	init(){
			this.addBtn.onclick=()=>{
				//获取添加值
			let name=this.inputName.value,
			price=this.inputPrice.value,
			num=this.inputNum.value;
			//验证输入是否为空
			if(name === "" || price === "" || num === ""){
				alert("输入不能为空");
				return;
			}
				tools.ajaxGetPromise("api/v1/add.php",{name,price,num})
				.then((data)=>{
					if(data.res_code===1){
					//添加成功，需要弹出成功消息，需要影藏模态框，需要将表单数据清空，重新渲染页面
					alert(data.res_message);
					//将表单数据清空
					this.inputName.value=this.inputPrice.value
					=this.inputNum.value="";
					//影藏模态框，bootstrap方法
					 $('#addModal').modal('hide');
					 //重新渲染页面
					 getShop.init();
					}else{
						//弹出失败消息
						alert(data.res_message);
					}
				})
			}
	}
}
new Addshop();
