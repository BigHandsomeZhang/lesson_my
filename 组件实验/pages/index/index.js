// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
 
    grades:[
        {name:'大一',value:'大一'},
        {name:'大二',value:'大二'},
        {name:'大三',value:'大三'},
        {name:'大四',value:'大四'},
    ],
    ways:[
        {name:'社交',value:'社交"',id:'socializing'},
        {name:'网购',value:'网购',id:'shopping'},
        {name:'学习',value:'学习',id:'studying'},
        {name:'其他',value:'其他',id:'others'},
    ],
    use:[
        {name:'否',value:'否'},
        {name:'是',value:'是'}
    ] ,
      radioCheck:'',
      checkboxCheck:[],
      sliderCheck:'',
      useCheck:'',
      textCheck:'',
  },
onSubmit:function(e){
    console.log(e.detail.value)
    let{radioCheck,checkboxCheck,sliderCheck,useCheck,textCheck} = e.detail.value
    console.log(checkboxCheck)
    this.setData({
        radioCheck : radioCheck,
        checkboxCheck : checkboxCheck,
        sliderCheck : sliderCheck,
        useCheck : useCheck,
        textCheck : textCheck
    })
    console.log('你选择的现在大几：',radioCheck)
    console.log('你选择使用手机的最大用途是',checkboxCheck)
    console.log('你选择的每天使用手机的时间是：',sliderCheck)
    console.log('你选择的是否使用过微信小程序：',useCheck)
    console.log('你输入的对小程序发展前途的看法是',textCheck)
}
})
