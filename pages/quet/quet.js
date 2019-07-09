var _animation;
var _animationIndex
const _ANIMATION_TIME = 500;
Page({
  data: {
    courinde: 10,
    index: 0,
    flag: 4,
    sure: false,
    tiku:'',
    an_ser:'',
    list: '',
  },
  onTabsItem(e){
    var that = this;
    console.log(e)
    var idx = e.currentTarget.dataset.index
    var chose = e.currentTarget.dataset.tab
    that.setData({
      courinde:idx,
      an_ser: chose
    })

  },
  onShow: function() {
    var that = this
    let Token = wx.getStorageSync('token')

    wx.request({
      url: 'https://rubbish.zemietx.com/public/index.php/api/itembank/primary?token=' + Token+'&page=1&p=1&type=1',
      method: 'GET',
      dataType: 'json',
      success: function(res) {
        console.log(res)
        if(res.data.code == 1 ){
            that.setData({
              tiku:res.data.data[0]
            })
        }
      },
      fail: function(res) {},
    })
    if (that.data.list == ''){
      wx.request({
        url: 'http://rubbish.zemietx.com/public/index.php/api/itembank/common?token=' + Token,
        method: 'get',
        success: function (res) {
          if (res.data.code == 1) {
            var list = that.data.list;
            console.log(list)
            that.setData({
              list: res.data.data.answer
            })
            console.log(that.data.list)
          }

        },
        fail: function (res) { }
      })
    }
  },
  btnque(e){
    var that = this;
    let Token = wx.getStorageSync('token')
    if (that.data.an_ser == ''){
      wx.showToast({
        title: '要选择一个'
      })
      return
    }
    var sub = e.currentTarget.dataset.id;
    var anser = that.data.an_ser;
    var uniqueid = e.currentTarget.dataset.uniqueid;
    wx.request({
      url: 'http://rubbish.zemietx.com/public/index.php/api/itembank/judge?token=' + Token + '&subject=' + sub + '&answer=' + anser + '&uniqueid=' + uniqueid,
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        console.log(res)
        if (res.data.code == 1) {
          that.setData({

          })
        } else if (res.data.code == 0){
          
        }
      },
      fail: function (res) { },
    })

  }





})