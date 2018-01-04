// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

// 导入所有的过滤器变量
import * as custom from './filters/'

// 导出的是对象，可以直接通过key和value来获得过滤器的名和过滤器的方法
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})
Vue.config.productionTip = false


//关于axios配置
axios.interceptors.request.use(function(config){
  //配置发送请求的信息
  store.dispatch('showLoading');
  return config;
},function(error){
  return Promise.reject(error);
});
axios.interceptors.response.use(function(response){
  //配置请求回来的信息
  store.dispatch('hideLoading');
  return response;
},function(error){
  return Promise.reject(error);
});

/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/ //默认post头部
//axios.defaults.baseURL='http://localhost:8082/';//配置请求根路径
Vue.prototype.$http = axios  //把axios对象挂到Vue原型上,其他页面在使用axios的时候直接  this.$http就可以了

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App}
})
