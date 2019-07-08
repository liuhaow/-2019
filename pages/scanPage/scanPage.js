// pages/scanPage/scanPage.js
Page({
  data: {
    scanValue: '',
    tempFilePaths:''
  },

  imgBtnTap: function () {
    var that =this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        console.log(res.tempFilePaths[0])
        that.setData({
          tempFilePaths: res.tempFilePaths[0]
        })
        wx.showToast({
          title: '图片识别中',
          icon: 'loading',
          duration: 10000,
          mask: true
        })
        wx.uploadFile({
          url: 'https://ihealth-wx.s1.natapp.cc/uploadImage',
          filePath: res.tempFilePaths[0],
          name: 'file',
          // header: {}, // 设置请求的 header
          formData: {
            'msg': 'voice'
          }, // HTTP 请求中其他额外的 form data
          success: function (res) {
            // success
            console.log(res.data)
            var json = JSON.parse(res.data)
            var content = ''
            for (var i = 0; i < json.msg.words_result.length; i++) {
              console.log(json.msg.words_result[i].words);
              content += json.msg.words_result[i].words
              content += '\n'
            }
            wx.hideToast()
          },
          fail: function (err) {
            // fail
            console.log(err)
          },
          complete: function () {
            // complete
          }
        })
      }
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})