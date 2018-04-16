const {gets} = require('./mock');

module.exports = function(app){
    //监听http请求
    app.get('/user2/userinfo', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        console.loe("123")
    });
}