const app = getApp();
const api= require('../../utils/api');

Page({
   data: {
      showMore: true,
      detail: {}
   },
   onLoad(option){
      api.getData(`${app.url}subject/${option.id}`,'get',{})
      .then(({data,statusCode})=>{
         this.setData({
            showMore: false,
            detail: data
         })
      }).catch((err)=>{
         wx.showLoading({title: err})
         setTimeout(()=>{wx.hideLoading()},1000)
      })
   },
   onReady(){},
   onShow(){},
   onHide(){},
   onUnload(){}
})
