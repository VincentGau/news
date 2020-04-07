import axios from 'axios'

// 创建一个axios实例
const service = axios.create({
  baseURL: 'http://rap2.taobao.org:38080/app/mock/247403',
  withCredentials: true,
  timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(config => {
  return config;
}, error => {
    Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(response => {
  return response.data
}, error => {
    return Promise.reject(error); // 返回接口返回的错误信息
})


export default service