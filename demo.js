$(function () {
    $('#link-reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('#link-login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })
    var form = layui.form
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码在6-12位之间，且不能有空格'],

        repwd: function (value) {
            var pwd = $('.reg-box'[name = password]).val()
            if (pwd !== value) return '两次密码不一致'
        }
    })
    $('#form-reg').on('submit', function (e) {
        e.preventDefault()
        var data = { username: $('#form-reg [name=username]').val(), password: $('#form-reg [name=passworf]').val() }
        $.post(
            'http://ajax.frontend.itheima.net/api/reguser', data, function (res) {
                if (res.status !== 0) return layer.msg(res.massage)
                layui.msg('注册成功，请登录！')
                $('#link-login').click()

            }

        )
    })
    $('#form-login').submit(function (e) {
        e.preventDefault()
        $.ajax({
            url:'',
            method:,
            data:$(this).serialize(),
            success:function(){
                if(res.status!==0) return layer.msg('登录失败')
                layer.msg('登录成功!')
                localStorage.setItem('token',res.token)
                location.href = '/index.html'
            }
        })
    
    })
})