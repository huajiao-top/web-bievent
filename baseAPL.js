// 注意，每次调用$.get()/$.post()/$.ajax()的时候
// 会先调用ajaxPrefilter这个函数
// 在这个函数中，可以拿到我们给ajax提供的配置对象


$.ajaxPrefilter(function (options) {
    // 在发起真正的ajax请求之前，统一拼接请求的根路径
    // console.log(options.url);
    options.url = 'http://ajax.frontend.itheima.net' + options.url
    // 统一为有权限的headers设置请求头
    if (options.url.indexOf('/my/') !== -1) {
        console.log(11);
        options.headers = {

        Authorization: localStorage.getItem('token') || ''
        }
    }
    // 全局统一挂载complete回调函数
    options.complete=function(res){
        // console.log('执行了命令');
        // console.log(res);
        if(res.responseJSON.status=== 1 && res.responseJSON.message==='身份认证失败！'){
            localStorage.removeItem('token')
            location.href='/loginxxq.html'
        }
    }

})