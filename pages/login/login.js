// pages/home/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindGetUserInfo: function (e) {
    var that = this;
    if (!e.detail.userInfo) {

    } else {
      var magess = e.detail.userInfo
      var a = magess.nickName
      var f = magess.avatarUrl
      wx.login({
        success: function (res) {
          console.log(res)
          if (res.code) {
            wx.request({
              url: 'https://flowers.zemietx.com/public/index.php/api/user/do_login?imgUrl=' + f + '&nickname=' + a + '&code=' + res.code,
              method: 'get',
              success: function (res) {
                if (res.data.code == 1) {
                  console.log(res.data.data.userinfo)
                 
                  wx.setStorage({
                    key: 'userInfo',
                    data: res.data.data.userinfo
                  })
                  wx.setStorage({
                    key: 'token',
                    data: res.data.data.userinfo.token
                  })
                 wx.navigateBack({
                   url:'../index/index'
                 })
                }

              },
              fail: function (res) { }
            })
          }
        }
      })
    }
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