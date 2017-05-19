/**
 * Created by Administrator on 2017/5/16.
 */
window.onload=function(){
    new Vue({
        el: '#box',
        data: {
            mydata: [["117.135.198.11", 80, 10], ["47.89.49.178", 3128, 8],["47.89.49.178", 3128, 9],["117.135.198.10", 80, 10]].sort(function(a,b){return b[2]-a[2]})
        },
        mounted: function () {
            this.$http.jsonp('http://ip.api.yangzhuojia.com/', {}, {
                jsonp: 'callback'
            }).then(function (res) {
                this.mydata = res.data
            }, function () {
                console.log("failed")
            })
        }
    });
}