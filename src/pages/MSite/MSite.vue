<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <router-link slot="left" to="/search" class="header_search">
        <i class="iconfont icon-sousuo1"></i>
      </router-link>
      <router-link slot="right" :to="userInfo._id ? '/userinfo': 'login'" class="header_login">
        <span class="header_login_text" v-if="!userInfo._id">
          登录|注册
        </span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-geren1"></i>
        </span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav border-1px">
      <div class="swiper-container" v-if="categorysArr.length>0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(cs,index) in categorysArr" :key="index">
            <span class="link_to_food" v-for="(c,index2) in cs" :key="index2">
              <div class="food_container">
                <img :src="imgBaseUrl+c.image_url">
              </div>
              <span>{{c.title}}</span>
            </span>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
<!--    后台数据加载完成前的一个初始图片-->
<!--    img里加v-else是为了，获得后台数据后，初始图片就不用显示了-->
      <img src="./images/msite_back.svg" alt="back" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-woshishangjia2"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      imgBaseUrl: 'https://fuss10.elemecdn.com'
    }
  },
  components: {
    HeaderTop,
    ShopList
  },
  mounted () {
    this.$store.dispatch('getCategorys')
    this.$store.dispatch('getShops')
  },
  computed: {
    ...mapState(['address', 'categorys', 'userInfo']),
    categorysArr () {
      const max = 8
      const arr = []
      const {categorys} = this
      let smallArr = []
      categorys.forEach((c, index) => {
        if (smallArr.length === 0) {
          arr.push(smallArr)
        }
        smallArr.push(c)
        if (smallArr.length === max) {
          smallArr = []
        }
      })
      return arr
    }
  },
  watch: {
    categorys (value) {
      this.$nextTick(() => {
        // 创建一个swiper实例对象，来实现轮播
        new Swiper('.swiper-container', {
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          },
          // 可以循环轮播
          loop: true
        })
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0 10px
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
