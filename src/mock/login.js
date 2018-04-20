import Mock from 'mockjs';
import parmObj from '../untils/parmObj'
 Mock.setup({
     timeout:200
 })
const data =[
   {
       userId:'22',
       userName:'xiaoxiao',
       passWord:'123456'
   },
    {
        userId:'20',
        userName:'luhan',
        passWord:'1234561'
    },
    {
        userId:'21',
        userName:'rongzhi',
        passWord:'1234562'
    }  
]
  Mock.mock({
     data
  })

 export default{
     isLogin: config =>{
        const data2 =  config.url;
        const {userName,userPassWord} = parmObj(data2);
        const len = data.length;
        let msg =()=>{
           var i =0;
           for( i;i<len;i++){
            if(userName == data[i].userName){
                alert("你好")
                if(userPassWord !== data[i].passWord){
                   alert( "登录密码不对");
                }
            }else{
                return '用户名不存在'
            }
        }
     }
     return {msg:msg(),ceshi:"abc"}   
    }
 }