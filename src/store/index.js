/* vuex最核心的管理对象store
* */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

/* 异步显示数据三步骤：
1:调用actions去发送请求，获取数据，数据返回到vuex中的state
2:读，读取state中的数据的状态
3:写模板，显示数据
* */
