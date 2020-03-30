import Mock from 'mockjs'

Mock.setup({
  timeout: 500 //设置一个延迟时间虚拟服务器响应效果
})

//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/getList', 'get', require('./json/mock1'))
Mock.mock(
  '/getRecommemdProductList',
  'get',
  require('./json/RecommendProductList.json')
)
Mock.mock('/getNewsDetail', 'get', require('./json/articledetails.json'))

Mock.mock('/getDetails', 'get', returnBack)
Mock.mock('/getSearchHotKeyWordList', 'get', require('./json/search.json'))
Mock.mock('/getRecommendNewsInfo4Banner', 'get', require('./json/banner.json'))
Mock.mock('/gethistory', 'get', require('./json/history.json'))
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
