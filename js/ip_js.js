/**
 * Created by Administrator on 2017/5/16.
 */
window.onload=function(){
    new Vue({
        el: '#box',
        data: {
            mydata: [].sort(function(a,b){return b[2]-a[2]})
        },
        mounted: function () {
            this.$http.get('https://ip.yangzhuojia.com/ip', {},).then(function (res) {
                this.mydata = res.data
            }, function () {
                console.log("failed")
            })
        }
    });
}