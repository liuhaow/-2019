var _animation;
var _animationIndex
const _ANIMATION_TIME = 500;
Page({
  data: {
    animation: '',
    courinde:'4',
    list: [
      {
        name: 'A.湿垃圾'
      },
      {
        name: 'B.干垃圾'
      },
      {
        name: 'C.可回收垃圾'
      },
      {
        name: 'D.其他垃圾'
      }
    ]
  },
  onTabsItem(e){
console.log(e)
var that =this
    var index = e.currentTarget.dataset.index;
    that.setData({
      courinde :index
    })

  },
  onShow: function() {
    _animation = wx.createAnimation({
      duration: _ANIMATION_TIME,
      timingFunction: 'linear', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
      delay: 0,
      transformOrigin: '50% 50% 0'
    })
  },

  /**
   * 实现image旋转动画，每次旋转 120*n度
   */
  rotateAni: function(n) {
    _animation.rotate(120 * (n)).step()
    this.setData({
      animation: _animation.export()
    })
  },

  /**
   * 开始旋转
   */
  startAnimationInterval: function() {
    var that = this;
    that.rotateAni(++_loadImagePathIndex); // 进行一次旋转
    _animationIntervalId = setInterval(function() {
      that.rotateAni(++_loadImagePathIndex);
    }, _ANIMATION_TIME); // 没间隔_ANIMATION_TIME进行一次旋转
  },

  /**
   * 停止旋转
   */
  stopAnimationInterval: function() {
    if (_animationIntervalId > 0) {
      clearInterval(_animationIntervalId);
      _animationIntervalId = 0;
    }
  },
})