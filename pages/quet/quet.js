var _animation;
var _animationIndex
const _ANIMATION_TIME = 500;
Page({
  data: {
    animation: '',
    courinde:'4',
    index:0,
    flag:3,
    sure:false,
    anser:'',
    list: [
      {
        question: "彩虹六号：围攻总共出了",
        answers: ['A', 'B', 'C', 'D'],
        right_answer: "C"
      },
      {
        question: "截至风城行动，彩虹六号：",
        answers: ['A', 'B', 'C', 'D'],
        right_answer: "D"
      },
      {
        question: "截围攻总共出了多少个特勤干员？",
        answers: ['A', 'B', 'C', 'D'],

        right_answer: "A"
      },
      {
        question: "截？",
        answers: ['A', 'B', 'C', 'D'],
        right_answer: "C"
      },
      {
        question: "截至员？",
        answers: ['A', 'B', 'C', 'D'],
        right_answer: "C"
      }

    ]
  },

  onShow: function() {

  },
  choseInfo(e){
    var that = this;
    var anst= e.currentTarget.dataset.anser;
    that.setData({
      anser: anst
    })
  },
  btnque(){
    console.log(1215)
    this.setData({
      sure:true
    })
    var right_answer = this.data.list[this.data.index].right_answer;
    console.log(right_answer)
    console.log(this.data.anser)
    if (this.data.anser == right_answer ){
      console.log(this.data.list.length)
      

    }else{
      console.log(2)
      return

    }
    if (this.data.index < this.data.list.length - 1) {
      this.NextQuestion();
    }
    //最后一道题
    else if (this.data.index == this.data.questionnum - 1) {
      this.setData({
        canAnswer: 'true'//禁止答题
      })
    }
  },
  NextQuestion: function () {
    //不是最后一道题
    if (this.data.index < this.data.list.length - 1) {
      this.setData({
        index: this.data.index + 1,
      })
    }
    //最后一道题
    if (this.data.index == this.data.list.length - 1) {
      this.setData({
        index: this.data.index,
      })
    }
  },

  



})