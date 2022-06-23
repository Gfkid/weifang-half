// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    zhanghao:'',
    pwd:'',
    pwdagain:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getname(e){
    this.setData({
      name:e.detail.value
    })
  },
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
  getpwdagain(e){
    this.setData({
      pwdagain:e.detail.value
    })
  },

  zhuce(){
    let name=this.data.name
    let zhanghao=this.data.zhanghao
    let pwd=this.data.pwd
    let pwdagain=this.data.pwdagain

    console.log(name,zhanghao,pwd)
    //数据校验
    if(name.length < 2){
      wx.showToast({
        icon:'none',
        title:'用户名需至少2位，请重新输入'
      })
      return
    }
      if(name.length > 10){
        wx.showToast({
          icon:'none',
          title:'用户名最多10位，请重新输入'
        })
        return
      }

      if(zhanghao.length != 11){
        wx.showToast({
          icon:'none',
          title:'账号格式错误，请重新输入'
        })
        return
      }

      if(pwd.length < 8){
        wx.showToast({
          icon:'none',
          title:'密码至少需要两位,请重新输入'
        })
        return
      }
      //密码输入确定
      if(pwd!=pwdagain){
        wx.showToast({
          icon:'none',
          title:'两次输入密码不对应，请重新输入'
        })
        return
      }
      //注册功能
      wx.cloud.database().collection('user').add({
        data:{
          name:name,
          zhanghao:zhanghao,
          pwd:pwd
        },
        success(res){
          wx.showToast({
            title: '注册成功,请登录',
          })
        }
      })
      wx.reLaunch({
        url: '/pages/login/login',
      })
  },
  gotologin(){
    wx.reLaunch({
      url: '/pages/login/login',
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