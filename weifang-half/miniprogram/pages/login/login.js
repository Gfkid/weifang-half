// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhanghao:'',
    pwd:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getzhanghao(e){
    this.setData({
      zhanghao:e.detail.value
    })   
  },
  getpwd(e){
    this.setData({
      pwd:e.detail.value
    })
  },
  userlogin(){
    let zhanghao=this.data.zhanghao
    let pwd=this.data.pwd
    if(!zhanghao || !pwd){
      wx.showToast({
        icon:'none',
        title: '输入不能为空',
      })
    }
    wx.cloud.database().collection('user').where({
      zhanghao:zhanghao
    }).get({
      success(res){
        let user=res.data[0]
        if(pwd===user.pwd){
          wx.setStorageSync('userdata', user)
          wx.showToast({
            title: '登录成功',
          })
          wx.reLaunch({
            url: '/pages/firstpage/firstpage',
          })
        }
          wx.showToast({
            icon:'none',
            title: '密码输入错误',
          })
       
      }
      
    }) 
    wx.showToast({
      icon:'none',
      title: '输入错误',
    })    
      },

      gotozhuce(){
        console.log("ok")
        wx.reLaunch({
          url: '/pages/register/register',
        })
      },
  onLoad(options) {

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