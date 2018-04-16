// 模拟登录数据
const Mock = require('mockjs');
Mock.setup({
    timeout: '100-200'
})

var data=[
    {   
        id:"001",
        user:"xiaoxiao",
        password:"007"
    },
    {   
        id:"002",
        user:"liyifeng",
        password:"010"
    },
    {   
        id:"003",
        user:"luhan",
        password:"070"
    },
]
Mock.mock(/\/get/,function(options){ // 拦截获取留言列表请求，返回列表信息
    return {status: 'success', data: resArr};
})
module.exports = Mock
