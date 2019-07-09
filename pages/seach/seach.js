// pages/seach/seach.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[],
      inputd:''
  },
  getInput(e){
    var that = this;
    let Token = wx.getStorageSync('token');
    var key = e.detail.value;
    that.setData({
      inputd: key
    })
    if (that.data.inputd == '') return
    wx.request({
      url: 'https://rubbish.zemietx.com/public/index.php/api/index/search',
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        token: Token,
        key: that.data.inputd 
      },
      success: function (res) {
        if (res.data.code == 1) {
          var list = that.data.list;
          console.log(list)
          that.setData({
            list:res.data.data
          })
console.log(that.data.list)
        }

      },
      fail: function (res) { }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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