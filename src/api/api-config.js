import axios from 'axios';

export default  function ({
                                      withCredentials = true,
                                      timeout = 36000,
                                      devUrl = 'http://localhost:9999',
                                      proUrl = 'www.gwssi.com/api/'
                                  } = {}) {

    axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? proUrl : devUrl;
    /* 允许跨域cors 8080下的（对8083请求）请求，携带9999的cookie */
    axios.defaults.withCredentials = withCredentials;
    /* 请求最长等待时间(ms毫秒) */
    axios.defaults.timeout = timeout;


//拦截器
    axios.interceptors.response.use(function (response) {
        if (response.config.url.indexOf('/api/logout') > -1) {
            return response;
        }
        //todo 登录超时判定

        return response;
    }, function (error) {
        return Promise.reject(error);
    });
}

