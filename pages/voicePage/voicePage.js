// pages/voicePage/voicePage.js
const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()


Page({
  data: {
    tempFilePath: null,
    start:true
  },
  tapVoiceButton: function (event) {
    var that = this;    
    const options = {
      duration: 60000, //指定录音的时长，单位 ms，最大为10分钟（600000），默认为1分钟（60000）
      sampleRate: 16000, //采样率
      numberOfChannels: 1, //录音通道数
      encodeBitRate: 96000, //编码码率
      format: 'mp3', //音频格式，有效值 aac/mp3
      frameSize: 50, //指定帧大小，单位 KB
    }
    //开始录音
    recorderManager.start(options);
    recorderManager.onStart(() => {
      console.log('。。。开始录音。。。')
      wx.showLoading({
        title: '录音中...',
      })

    });
    //错误回调
    recorderManager.onError((res) => {
      console.log(res);
      wx.hideLoading();
      wx.showToast({
        title: res,
        icon: 'success',
        duration: 1000
      })
    })
  },
  touchup:function(){
    var that = this;
    recorderManager.stop();
    recorderManager.onStop((res) => {
      wx.hideLoading();
      wx.showToast({
        title: '录音结束',
        icon: 'success',
        duration: 1000
      })
      console.log('。。停止录音。。', res.tempFilePath)
      const { tempFilePath } = res;
      that.setData({
        tempFilePath: res.tempFilePath
      })
      //结束录音计时  

      //上传录音
      // wx.uploadFile({
      //   url: appURL + '/wx_SubjectInformation/wx_SubjectRecordKeeping.do',//这是你自己后台的连接
      //   filePath: tempFilePath,
      //   name: "file",//后台要绑定的名称
      //   header: {
      //     "Content-Type": "multipart/form-data"
      //   },
      //   //参数绑定
      //   formData: {
      //     recordingtime: that.data.recordingTimeqwe,
      //     topicid: that.data.topicid,
      //     userid: 1,
      //     praisepoints: 0
      //   },
      //   success: function (ress) {
      //     console.log(res);
      //     wx.showToast({
      //       title: '保存完成',
      //       icon: 'success',
      //       duration: 2000
      //     })
      //   },
      //   fail: function (ress) {
      //     console.log("。。录音保存失败。。");
      //   }
      // })
    })
  },
  play: function () {
    innerAudioContext.autoplay = true
    innerAudioContext.src = this.data.tempFilePath,
      innerAudioContext.onPlay(() => {
        console.log('开始播放')
      })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  onLoad: function (options) {
    
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