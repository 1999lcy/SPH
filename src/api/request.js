import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const requests = axios.create({
    baseURL: "/api",
    timeout: 50000,
});

//请求拦截器，在发送请求之前做些什么
requests.interceptors.request.use((config) => {
    nprogress.start();
    return config;
}, (error) => {
    return Promise.reject(new Error('faile'));
})

//响应拦截器，对响应数据做点什么
requests.interceptors.response.use(res => {
    nprogress.done();
    return res.data;
}, (error) => {
    return Promise.reject(new Error('faile'));
})

export default requests;