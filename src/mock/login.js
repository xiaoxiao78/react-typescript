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
        const {userName,password} = parmObj(data2);
        const len = data.length;
        let msg=()=>{
            let message=''; 
            for(let i =0;i<len;i++){
                if(data[i].userName == userName){
                    if(data[i].passWord !== password){
                        message ='登录密码错误，请重新登录';
                        break;
                    }
                }else{
                    message='用户名不存在，请先注册'
                }
        }
        return message;
        
    }
     return {msg: msg(),ceshi:"abc"}   
    }
 }