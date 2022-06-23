// pages/page2/page2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:'',
    loginif:'',
    reviewer:''
  },
  //登录授权
  login(){
    wx.getUserProfile({
      desc: '必须授权才能使用',
      success: res=>{
        let user=res.userInfo
        //用户信息缓存到本地
        wx.setStorageSync('user', user)
        console.log('授权成功',res)
        this.setData({
          userInfo:user
        })
      },
      fail:res=>{
        console.log('授权失败',res)
      }
    })
  },
  //退出登录
  loginOut(){
    this.setData({
      userInfo:''
    })
    this.setData({
      loginif:''
    })
    this.setData({
      reviewer:''
    })
    wx.setStorageSync('user', null)
    wx.setStorageSync('userdata', null)
    wx.setStorageSync('reviewer', null)
  },
  contact(){
    let userInfo=this.data.userInfo
    if(!userInfo){
      wx.showToast({
        icon:'none',
        title: '请先授权',
      })
      return
    }
    wx.navigateTo({
      url: '/pages/contact/contact',
    })
  },
  
  userlogin(){
    let userInfo=this.data.userInfo
    if(!userInfo){
      wx.showToast({
        icon:'none',
        title: '请先授权',
      })
      return
    }
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
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
  gotoRlogin(){
    let userInfo=this.data.userInfo
    if(!userInfo){
      wx.showToast({
        icon:'none',
        title: '请先授权',
      })
      return
    }
    wx.reLaunch({
      url: '/pages/Rlogin/Rlogin',
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