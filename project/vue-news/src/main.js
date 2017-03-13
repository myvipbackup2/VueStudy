import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './routerConfig'
import store from './store/index'
import axios from 'axios'
import Loading from './components/loading/index'

Vue.use(VueRouter);
Vue.use(Loading);

require('./assets/css/base.css');//引入全局的base文件

//关于axios的一些配置
axios.interceptors.request.use(function (config) {  //配置发送请求的信息request
    store.dispatch('showLoading');
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
    store.dispatch('hideLoading');
    return response;
}, function (error) {
    return Promise.reject(error);
});

/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/
//axios.defaults.baseURL='http://localhost:8080/';
Vue.prototype.$http = axios; //其他页面在使用axios的时候直接  this.$http就可以了


const router = new VueRouter({
    mode: 'history',  //路由改变  index/#/home => index/home
    routes: routerConfig,
    scrollBehavior: () => ({y: 0})
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
