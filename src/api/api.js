import request from '@/utils/request.js'

export function getNewsTabList(){
  return request({
    url: '/getNewsTabList',
    method: 'get'
  })
}

export function getRecommendNewsInfo4Banner(){
  return request({
    url: '/getRecommendNewsInfo4Banner',
    method: 'get'
  })
}

export function getNewsList(){
  return request({
    url: '/getNewsList',
    method: 'get'
  })
}

export function getNewsDetail(){
  return request({
    url: '/getNewsDetail',
    method: 'get'
  })
}

export function searchRequest(data){
  return request({
    url: '/searchResult',
    method: 'post',
    data
  })
}