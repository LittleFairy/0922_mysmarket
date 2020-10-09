import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

// import MSite from '../pages/MSite/MSite'
// import Order from '../pages/Order/Order'
// import Profile from '../pages/Profile/Profile'
// import Search from '../pages/Search/Search'

// 路由组件懒加载
const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      name: 'msite',
      component: MSite,
      // meta里的代码用于配合判断是否需要显示底部导航栏
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
    // 默认先显示msite界面
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
