// pages/category/index.js

import { request } from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧的菜单
    leftMenuList: [],
    // 右侧的商品数组
    rightGoodsList: [],
    //选中的索引
    currentIndex: 0,
    //右侧滚动条的位置
    scrollTop: 0
  },
  //声明已个全局变量
  Cates: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategoryList()
  },
  // 获取分类页面的接口数据
  getCategoryList() {
    request({ url: "/categories" })
      .then(result => {
        this.Cates = result;
        const leftMenuList = result.map(v => ({ cat_id: v.cat_id, cat_name: v.cat_name }))
        const rightGoodsList = result[0].children;
        this.setData({
          leftMenuList,
          rightGoodsList
        })
      })
  },
  //点击获取索引
  handlechangeitem(e) {
    const { index } = e.currentTarget.dataset
    const rightGoodsList = this.Cates[index].children;
    this.setData({
      currentIndex: index,
      rightGoodsList,
      scrollTop: 0
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})