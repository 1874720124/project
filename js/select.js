class SelectList{
 	constructor(tbody){
		//  console.log(111)
 	this.tbody=document.querySelector(tbody);
 	this.pageIndex=1;//当前页默认为1
 	//给一个不能修改的自定义属性
 	Object.defineProperty(this,"count",{
 		writable:false,
 		value:4
 	});
 	this.pageCount=1;//总页数默认为1
 	this.init();
 	}
 	init(){
 	let{pageIndex,count}=this;
 	tools.ajaxGetPromise("api/v1/select.php",{pageIndex,count}).then(data=>{
	// console.log(data);
 	if(data.res_code===1){
 		//根据data.res_body.data如[{name：cpu,price：25,num：23,id：1}，{}]渲染表格
 		//传参
 		this.render(data.res_body.data);
 		//总页数从后端返回
 		this.pageCount=data.res_body.pageCount;
 		//把实例当作参数传到分页js中
 		pagination.render(this);
 	}else{alert(data.res_message)}
 	})
 	}
 	render(list){
 		let html="";
 		list.forEach((shop,index)=>{
 		//给tr添加自定义属性，获取id传后端
 		//index+1表单标号，用户看到地是连续的标号
 		//1加4
		//2加8
		//n页加(this.pageIndex-1)*this.count
		html+=`<tr data-id=${shop.id}>
                    <td>${(this.pageIndex-1)*this.count+index+1}</td>
                    <td>${shop.name}</td>
                    <td><span>${shop.price}</span><input type="text" class="inputPrice"></td>
                    <td><span>${shop.num}</span><input type="text" class="inputNum"></td>
                    <td>
          <button type="button" class="btn btn-info btn btn-primary btn-xs btn-edit">编辑</button>
          <button type="button" class="btn btn-warning btn btn-primary btn-xs btn-del">删除</button>             
          <button type="button" class="btn btn-success btn btn-primary btn-xs btn-ok">确定</button>
          <button type="button" class="btn btn-danger btn btn-primary btn-xs btn-cancle">取消</button>          
                    </td>
                </tr>
  					`
 	})
 	this.tbody.innerHTML=html;
 	}
 }
let getShop=new SelectList("#tbody");
