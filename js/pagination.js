class Pagination{  
	constructor(){
		this.ul=document.querySelector("#page-container");
		this.next=document.querySelector("#next-page");
//		this.render()}
	}
	//selectList是形参，实参为selectable中selectList的实例
	render(selectList){
		this.selectList=selectList;
		//请求渲染之前，将上次渲染的删除
		Array.from(this.ul.querySelectorAll(".page-li")).forEach((li,index)=>{
			li.remove();
		})
//		总页数this.selectList.pageCount
//		当前页this.selectList.pageIndex
		for(let i=1;i<=this.selectList.pageCount;i++){
			let li=document.createElement("li");
			li.innerHTML=`<a href="javascript:; class="page">${i}</a>`
			//target.innerHTML是字符串类型，==
			li.className=i==this.selectList.pageIndex?"active page-li":"page-li";
			this.ul.insertBefore(li,this.next);
		}
		this.bindEvents();
}
	bindEvents(){
		this.ul.onclick=(e)=>{
			let target=e.target;
			//得到事件源的classList，
			let targetClass=[...e.target.classList];
			//如果点击页码数，得到当前页码数，重新渲染页面
			if(targetClass.includes("page")){
				//target.innerHTML是字符串类型
				this.selectList.pageIndex=target.innerHTML;
				this.selectList.init();
				//疑问一：点到span的时候，span是a的子元素，为啥没触发两次事件
				//点了向后页this.selectList.pageIndex--，重新渲染
			}else if(targetClass.includes("prev-page")){
//				this.selectList.pageIndex--;
//				this.selectList.init();
//				if(this.selectList.pageIndex<1){
//					this.selectList.pageIndex=1;
				if(--this.selectList.pageIndex<1){
					this.selectList.pageIndex=1;
					return;
				}
				this.selectList.init();
			}else if(targetClass.includes("prev-page")){
				//点了向前页this.selectList.pageIndex++，重新渲染
				if(++this.selectList.pageIndex>this.selectList.pageCount){
					this.selectList.pageIndex=this.selectList.pageCount;
					return;
				}
				this.selectList.init();
			}
			
			
		}
		
	}
} 
let pagination=new Pagination();
