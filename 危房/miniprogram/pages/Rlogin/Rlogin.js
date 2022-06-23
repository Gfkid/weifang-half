// pages/Rlogin/Rlogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reviewername:'',
    password:''
  },

  getreviewername(e){
    this.setData({
      reviewername:e.detail.value
    })   
  },
  getpassword(e){
    this.setData({
      password:e.detail.value
    })
  },

  userlogin(){
    let reviewername=this.data.reviewername
    let password=this.data.password
    if(!reviewername || !password){
      wx.showToast({
        icon:'none',
        title: '输入不能为空',
      })
    }
    wx.cloud.database().collection('shenhe').where({
      reviewername:reviewername
    }).get({
      success(res){
        console.log(res)
        let user=res.data[0]
        if(password===user.password){
          wx.setStorageSync('reviewer', user)
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

  /**
   * 生命周期函数--监听页面加载
   */
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