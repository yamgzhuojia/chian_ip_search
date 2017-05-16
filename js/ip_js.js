/**
 * Created by Administrator on 2017/5/16.
 */
window.onload=function(){
    new Vue({
        el: '#box',
        data: {
            mydata: []
        },
        ready: function () {
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