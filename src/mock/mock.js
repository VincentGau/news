import Mock from 'mockjs'

Mock.setup({
  timeout: 500 //设置一个延迟时间虚拟服务器响应效果
})

//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/getList', 'get', require('./json/mock1'))
Mock.mock('/getRecommemdProductList', 'get', require('./json/mock2.json'))
Mock.mock('/getDetails', 'get', returnBack)

function returnBack(prarms) {
  //prarms为前端传来到请求内容：  {url: "/testInfo2", type: "GET", body: "{"xm":"11"}"}
  console.log(prarms)
  var prarmsBody = JSON.parse(prarms.body) // 解析请求参数
  var returnBackData = {
    // mock的数据
    data: {}
  }

  return returnBackData
}
