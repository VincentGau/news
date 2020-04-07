import request from '@/utils/request.js'

export function getNewsTabList(){
  return request({
    url: '/getNewsTabList',
    method: 'get'
  })
}