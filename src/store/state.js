/* 状态对象  用于管理我们需要处理的数组，对象，字符串，有点类似于vue中的data
* */
export default {
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address: {}, // 地址相关信息对象
  categorys: [], // 食品分类数组
  shops: [], // 商家数组
  userInfo: {}, // 用户信息
  goods: [], // 商品列表
  ratings: [], // 商品评价列表
  info: {}, // 商家信息
  cartFoods: [], // 购物车中食物的列表
  searchShops: [] // 搜索得到的商家列表
}
