// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer' // 加载mockserver即可
import './fiters' // 加载自定义过滤器
import VueLazyload from 'vue-lazyload' // 图片懒加载

// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
Vue.use(VueLazyload, {
  loading: './common/imgs/loading.gif'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 使用上vuex
  components: { App },
  template: '<App/>'
})
