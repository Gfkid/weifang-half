const DB = wx.cloud.database()
Page({
 data: {
   details: '',
   imgURL: ''
 },
 bindTextAreaBlur: function (e) {
   console.log(e.detail.value);
   var that = this;
   that.setData({
     details: e.detail.value
   });
 },
 seleteAndUploadPicture() {
   let that = this
   wx.chooseImage({
     count: 1,
     sizeType: ['original', 'compressed'],
     sourceType: ['album', 'camera'],
     success: res => {
       console.log('choose successfully', res)
       that.setData({
         imgURL: res.tempFilePaths[0]
       })
     },
     fail(res) {
       console.log('choose failed', res)
     }
   })
 },
 share() {
   console.log('调用share的方法')
   let that = this
   wx.cloud.uploadFile({
     cloudPath: new Date().getTime() + '.png',
     filePath: this.data.imgURL, // 文件路径
     success: function (res) {
       console.log('upload successfully', res)
       that.setData({
         imgURL: res.fileID
       })
     },
     fail(res) {
       console.log('upload failed', res)
     }
   })
   DB.collection("test").add({
     data: {
       descption: this.data.details,
       imgURL: this.data.imgURL
     },
     success(res) {
       console.log("上传成功", res)
       wx.showToast({
         title: '成功',
         icon: 'success',
         duration: 2000
       })
       wx.reLaunch({
         url: '/pages/firstpage/firstpage',
       })
     },
     fail(res) {
       console.log("上传失败", res)
     }
   })
 }
})