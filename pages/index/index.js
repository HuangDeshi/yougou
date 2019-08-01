// pages/index/index.js
//引入wx.request 
import { request } from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    swiperList: [],
    navCateList: [],
    floorList: []
  },
  // 获取轮播图数据
  getSwiperList() {
    /* 回调地狱！！！ */
    request({ url: "/home/swiperdata" })
      .then(result => {
        this.setData({
          // swiperList: result.data.message
          swiperList: result
        })
      })
  },
  //获取分类导航数据
  getNavCateList() {
    request({ url: "/home/catitems" })
      .then(result => {
        this.setData({
          navCateList: result
        })
      })
  },
  // 获取楼层数据
  getFloorList() {
    request({ url: "/home/floordata" })
      .then(result => {
        this.setData({
          floorList: result
        })
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.getNavCateList()
    this.getFloorList()
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