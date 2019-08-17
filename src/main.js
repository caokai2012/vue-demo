// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store';

import axios from 'axios';
Vue.prototype.axios = axios;

//导入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';
//注册使用
Vue.use(VueAwesomeSwiper);

// 引入echarts
import echarts from 'echarts'
//一般都要加个$加到vue的原型链上，方便引用
Vue.prototype.$echarts = echarts;

//  element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//注册使用
Vue.use(ElementUI);
//
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'kWYGIebThrdZKBTbrI7c0w40YbHWu3N1'
});


Vue.config.productionTip = false
// 全局- 自定义指令
// binding.arg 作为判断依据 更加提高了指令的复用性
Vue.directive('changeStyle',{
  bind(el,binding){
    el.style.color = '#' + Math.random().toString(16).slice(2,8);
  //   自定义指令的传值
    if(binding.arg === 'ita'){
        el.style.fontStyle = 'italic';
        // console.log(binding.value);
    }else if(binding.arg === 'blod'){
      el.style.fontWeight = 'bloder';
    }

  }
});
//自定义过滤  相当于管道
Vue.filter('to-uppercase',(val)=>{
    return val.slice(0,1).toUpperCase() + val.slice(1);
});

// 全局的路由的守卫
router.beforeEach((to,from, next)=>{
  if(to.path === '/login'){
     next();
  }else{
    if(localStorage.getItem('userInfo')){
      next();
    }else{
      layer.alert('请您先登录后，才能查看!！！', {icon: 6});
      //  重定向到login的页面
      next('/login');
    }
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
