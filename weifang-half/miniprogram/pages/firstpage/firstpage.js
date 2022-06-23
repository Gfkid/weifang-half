// pages/firstpage/firstpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src1:"https://636c-cloud1-4ggas6g4b4784ddc-1310447797.tcb.qcloud.la/1.webp?sign=e3685d1ef13f0c2e2f8206470f091514&t=1655475382",
    src2:'https://636c-cloud1-4ggas6g4b4784ddc-1310447797.tcb.qcloud.la/2.webp?sign=10aef79c1fb415dc916c35002fd7cb2a&t=1655475454',
    src3:'https://636c-cloud1-4ggas6g4b4784ddc-1310447797.tcb.qcloud.la/3.webp?sign=d100cce8dde72835ddeeeab8b0b42e3c&t=1655475469',
    tubiao1:'https://636c-cloud1-4ggas6g4b4784ddc-1310447797.tcb.qcloud.la/%E5%9B%BE%E6%A0%871.webp?sign=dc1099859dd29739916955dc120eafbf&t=1655476230',
    tubiao2:'https://636c-cloud1-4ggas6g4b4784ddc-1310447797.tcb.qcloud.la/%E5%9B%BE%E6%A0%872.webp?sign=8722009418efa446999554efbf392206&t=1655476680',
    tubiao3:'https://636c-cloud1-4ggas6g4b4784ddc-1310447797.tcb.qcloud.la/%E5%9B%BE%E6%A0%873.webp?sign=2b3cf92777dcc5af3bb2877000232878&t=1655476526',
    loginif:'',
    reviewer:'',
    userInfo:'',
    "dataArray":"",
  },
  gototest(){
    let loginif=this.data.loginif
    let reviewer=this.data.reviewer
    if(!loginif && !reviewer){
      wx.showToast({
        icon:"none",
        title: '请先登录',
      })
      return
    }
    wx.reLaunch({
      url: '/pages/test/test',
    })
  },
  gotoshangchuan(){
    let loginif=this.data.loginif
    let reviewer=this.data.reviewer
    if(!loginif && !reviewer){
      wx.showToast({
        icon:"none",
        title: '请先登录',
      })
      return
    }
    wx.reLaunch({
      url: '/pages/shangchuan/shangchuan',
    })
  },
  gotoshenhe(){
    let reviewer=this.data.reviewer
    if(!reviewer){
      wx.showToast({
        icon:"none",
        title: '请登录审核者用户',
      })
      return
    }
    wx.reLaunch({
      url: '/pages/shenhe/shenhe',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const db=wx.cloud.database()
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
    let user=wx.getStorageSync('user')
    this.setData({
      userInfo:user
    })
    let userdata=wx.getStorageSync('userdata')
    this.setData({
      loginif:userdata
    })
    let reviewer=wx.getStorageSync('reviewer')
    this.setData({
      reviewer:reviewer
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})