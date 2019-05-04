class EditTable{
    constructor(selector){
this.tbody=document.querySelector(selector);
this.bindEvents();
    }
    bindEvents(){
        this.tbody.onclick= e => {
        e=e||window.event;
        let target=e.target||e.srcElment;
        // console.log(target)
        let classList=Array.from(target.classList);
        let tr= target.parentNode.parentNode;
        // console.log(classList )
        // 点了编辑按钮
        if(classList.includes("btn-edit")){
            this.editBtnClick(tr);
        }
        // 取消
        else if(classList.includes("btn-cancle")){
            this.cancleBtnClick(tr);
        }
        else if(classList.includes("btn-ok")){
            this.okBtnClick(tr);
        }
        else if(classList.includes("btn-del")){
            this.delBtnClick(tr);
        }
    }
}
    editBtnClick (tr) {
    //给tr加edit 
    // 把span的值给input  
    tr.classList.add("edit");
     Array.from(tr.querySelectorAll("span")).forEach((span,index)=>{
       span.nextElementSibling.value=span.innerHTML;  
     })
    }
    cancleBtnClick(tr){
        tr.classList.remove("edit"); 
    }
  okBtnClick(tr){
//      tr.classList.remove("edit");
//   Array.from(tr.querySelectorAll("span")).forEach((span,index)=>{
//     span.innerHTML=span.nextElementSibling.value;  

//找到id,price,num
	let inputPrice=tr.querySelector(".inputPrice"),
		inputNum=  tr.querySelector(".inputNum"),
		price=inputPrice.value,
		num=inputNum.value,
		id=tr.getAttribute("data-id");
	tools.ajaxGetPromise("api/v1/ok.php",{id,price,num}).then(data=>{
	if(data.res_code===1){
		alert(data.res_message); 
		Array.from(tr.querySelectorAll("span")).forEach((span,index)=>{
		span.innerHTML=span.nextElementSibling.value; })
		 tr.classList.remove("edit");
	}else{
		alert(data.res_message); 
		tr.classList.remove("edit");
	}
	})
    }
    delBtnClick(tr){
        if(confirm("确定要删除吗？")){
			//tr.remove();
			//获取tr的自定义属性也就是每行的id传后端
			let id=tr.getAttribute("data-id");
			//请求后端删除本行
			tools.ajaxGetPromise("api/v1/delete.php",{id}).then(data=>{
                console.log(data);
                // console.log(11);
				if(data.res_code===1){
					alert(data.res_message);
					//重新渲染表格
					getShop.init();
					
				}else{alert(data.res_massage);}
			})
	
        }
    }
}
new EditTable("#tbody")