获取当前页数据的接口：
method：get
url："api/v1/select.php";
query:{pageIndex,count};
data:{
res_code:1,//1表示成功，0表示失败
res_message:"查询成功"
res_body:{
data:[
{id,name,price,num},
{id,name,price,num},
],
"pageCount" => $pageCount
}
}
添加数据接口：
method：get
url："api/v1/addshop.php";
query:{name,price,num};
data:{
res_code:1,//1表示成功，0表示失败
res_message:"网络错误，添加失败，请重试"｜｜添加成功
//res_body:
//{id,name,price,num}
//}
}
删除商品地接口：
method：get
url："api/v1/delete.php";
query:{id};
data:{
res_code:1,//1表示成功，0表示失败
res_message:"网络错误，删除失败，请重试"｜｜删除成功｝
修改商品地接口：
method：get
url："api/v1/ok.php";
query:{id,price,num}; 
data:{
res_code:1,//1表示成功，0表示失败
res_message:"网络错误，修改失败，请重试"｜｜修改成功｝
注册接口：
method：post
url："api/v1/register.php";
query:{username,password}; 
data:{
res_code:1,//1表示成功，0表示失败
res_message:"网络错误，注册失败，请重试"｜｜注册成功｝
登录接口：
method：post
url："api/v1/login.php";
query:{username,password}; 
data:{
res_code:1,//1表示成功，0表示失败
res_message:"用户名或密码错误，登录失败，请重试"｜｜登录成功｝
