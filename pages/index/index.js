//index.js
//获取应用实例
// var app = getApp()
Page({
  data: {
    userInfo: {},
    voiceButtonName: '语音识别',
    voicePlayButtonName: '无录音',
    voiceButtonDisable: false,
    tempFilePath: null
  },
  //事件处理函数
  seachInfo:function(){
    wx.navigateTo({
      url: '../seach/seach'
    })
  },
  Imgshibie(){
    wx.navigateTo({
      url: '../scanPage/scanPage'
    })
  },
  yuyinShibie(){
    wx.navigateTo({
      url: '../voicePage/voicePage'
    })
  },
  questInfo:function(){
    wx.navigateTo({
      url: '../quet/quet'
    })
  },


  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function (userInfo) {
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    // })
  },
  onShow: function (){
    // var that = this
    // let Token = wx.getStorageSync('token')

    // if (!Token) {
    //   this.setData({
    //     condition: true
    //   })
    //   wx.navigateTo({
    //     url: '../login/login',
    //   })
    //   return
    // }
  }
})
