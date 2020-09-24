//axios的全局配置
axios.defaults.baseURL = 'https://developer.duyiedu.com/vue/bz/';

//响应拦截器
axios.interceptors.response.use(response => {
    const {status} = response; 
    const {baseURL, url} = response.config;

    if(status === 200) {
       
        return response.data;
    }
    return response;
})
