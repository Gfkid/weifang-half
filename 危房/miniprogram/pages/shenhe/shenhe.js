// 连接微信云数据库
const db = wx.cloud.database()
var recordID=""
var recordID1=""
var recordID2=""

Page({
  data: {
    "dataArray":"",
  },
  copy: function (e) {
    let item = e.currentTarget.dataset.item;
    console.log("复制", e, item);
    wx.setClipboardData({
    data: item,
    success: function (res) {
        wx.showToast({
           title: '复制成功',
            icon:"success"
        })
    }
});
},
//要删除数据的id
  delDataId:function(event){
    recordID=event.detail.value
    console.log(event.detail.value,recordID)
  },
  //要更新数据的id
  delDataId1:function(event){
    recordID1=event.detail.value
    console.log(event.detail.value,recordID1)
  },
  //危房等级
  delDataId2:function(event){
    recordID2=event.detail.value
    console.log(event.detail.value,recordID2)
  },

  tongguo(event){
    console.log(recordID)
    wx.showLoading({
      title: '正在删除数据......',
      mask:"true"
    })
   db.collection("test")
    .doc(recordID)
    .remove()
    .then(res=>{
      console.log(res)
      wx.hideLoading()
    }).catch(
      wx.showToast({
        title: '删除失败',
        icon:'none'
      }),
       wx.hideLoading()
      
  )


  },
  // 获取buyerBasics的数据
  getData(){
    db.collection("test")
    .get()
    .then(res=>{
      // console.log(res.data)
      this.setData({
        "dataArray":res.data
      })
    })
  },
  // 获取buyerBasics的记录的个数
  getBuyerBasicsRecordNumber(){
    db.collection("test")
    .count()
    .then(res=>{
      console.log(res)
    })
  },

  onLoad: function (options) {
    this.getData()
    db.collection("test")
    .watch({
      onChange:res=>{
        console.log(res.docs)
        this.setData({
          "dataArray":res.docs
        })
      },
      onError:err=>{
        console.log(err)
      }
    })
  },
 
  yishenhe() {
    db.collection("test").doc(recordID1).update({
      data: {
        dengji:recordID2,
        chuli:"已审核",
        condition:1
      },
      success(res) {
        console.log("上传成功", res)
        wx.reLaunch({
          url: '/pages/firstpage/firstpage',
        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail(res) {
        console.log("上传失败", res)
      }
    })
  }
})