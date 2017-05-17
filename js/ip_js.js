/**
 * Created by Administrator on 2017/5/16.
 */
window.onload=function(){
    new Vue({
        el: '#box',
        data: {
            mydata: [["117.135.198.11", 80, 5], ["47.89.49.178", 3128, 9]]
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