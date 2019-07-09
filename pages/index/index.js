//index.js
//获取应用实例
// var app = getApp()
Page({
  data: {
    userInfo: {},
    infomata:{},
    voiceButtonName: '语音识别',
    voicePlayButtonName: '无录音',
    voiceButtonDisable: false,
    tempFilePath: null
  },
  //事件处理函数
  seachInfo: function() {
    wx.navigateTo({
      url: '../seach/seach'
    })
  },
  Imgshibie() {
    wx.navigateTo({
      url: '../scanPage/scanPage'
    })
  },
  yuyinShibie() {
    wx.navigateTo({
      url: '../voicePage/voicePage'
    })
  },
  questInfo: function() {
    wx.navigateTo({
      url: '../quet/quet'
    })
  },
  checketPH(){
    var that = this;
    let Token = wx.getStorageSync('token')
    wx.request({
      url: 'https://rubbish.zemietx.com/public/index.php/api/index/rank',
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        token: Token,
      },
      success: function (res) {
        if (res.data.code == 1) {
          console.log(res)
        }

      },
      fail: function (res) { }
    })

  },
  bindGetUserInfo: function(e) {
    var that = this;
    if (!e.detail.userInfo) {

    } else {
      var magess = e.detail.userInfo
      var a = magess.nickName
      var f = magess.avatarUrl
      wx.login({
        success: function(res) {
          console.log(res)
          if (res.code) {
            wx.request({
              url: 'https://rubbish.zemietx.com/public/index.php/api/login/index?imgUrl=' + f + '&nickname=' + a + '&code=' + res.code,
              method: 'get',
              success: function(res) {
                console.log(res)
                if (res.data.code == 1) {
                  console.log(res.data.data.userinfo)
                  that.setData({
                    userInfo: res.data.data.userinfo
                  })
                  wx.setStorage({
                    key: 'userInfo',
                    data: res.data.data.userinfo
                  })
                  wx.setStorage({
                    key: 'token',
                    data: res.data.data.userinfo.token
                  })

                }

              },
              fail: function(res) {}
            })
          }
        }
      })
    }
  },

  onLoad: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function (userInfo) {
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    // })
  },
  onShow: function() {
    var that = this
    let Token = wx.getStorageSync('token')
    if (!Token) {
      wx.navigateTo({
        url: '../login/login',
      })
      return
    } else {
      let userInfo = wx.getStorageSync('userInfo')
      that.setData({
        userInfo: userInfo
      })
      wx.request({
        url: 'https://rubbish.zemietx.com/public/index.php/api/index/answer_num?token='+ Token,
        method: 'get',
        success: function (res) {
         if(res.data.code == 1){
           that.setData({
             infomata:res.data.data
           })
           console.log(that.data.infomata)
         }

        },
        fail: function (res) { }
      })
    }
  }
})