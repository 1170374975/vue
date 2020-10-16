// 把关于axios的都在这里面处理
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080/";

//请求拦截器，给url加上.json
axios.interceptors.request.use(request => {
  request.url += '.json';
  return request;
});
//响应拦截器
axios.interceptors.response.use(response => {
  if(response.status === 200) {
    return response.data.data;
  }
  return response;
})

export default axios;