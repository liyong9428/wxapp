const app = getApp();
const api= require('../../utils/api');
Page({
   data: {
      start: 1,
      showMore: true,
      list: []  // 正在上映数据
   },
   getData(){
      api.getData(`${app.url}in_theaters?start=${this.data.start}&count=10`,'get',{})
      .then(({data,statusCode})=>{
         if(data.subjects.length>0){
            this.setData({
               list: this.data.list.concat(data.subjects),
               start: this.data.start+10
            })
         }
         else{
            this.setData({
					showMore:false
				})
         }
      })
      .catch(err=>{
         wx.showLoading({title: err})
         setTimeout(()=>{wx.hideLoading()},1000)
      })
   },
   onLoad(){
      this.getData();
   },
   scrolltolower: function(e){
      if(!this.data.showMore) return false;
      this.getData();
   },
   openDetail(e){
      let id = e.currentTarget.dataset.id;
      wx.navigateTo({url: `/pages/detail/detail?id=${id}`})
   },
   onReady(){},
   onShow(){},
   onHide(){},
   onUnload(){}
})
