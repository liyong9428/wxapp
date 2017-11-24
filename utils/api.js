// 封装的用于获取数据的promise方法
function getData(url,method,data){
   return new Promise((resolve,reject)=>{
      wx.request({
         url,
         method,
         data,
         header: {
            'Content-Type': 'json'
         },
         success: function(res){ resolve(res) },
         fail: function(err){ reject(err) }
      })
   })
}
module.exports = {
   getData
}
