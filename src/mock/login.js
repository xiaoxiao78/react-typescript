import Mock from 'mockjs'
 Mock.setup({
     timeout:200
 })
 Mock.mock({
     "useId|1-10":  'number',
     "userName": '@cname',
     'passWord': '123456'
 })

 export default{
     isLogin: config =>{
         console.log(config)
     }
 }