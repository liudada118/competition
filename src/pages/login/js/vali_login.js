function check() {
    // 邮箱注册空值验证
    var login_name = form.login_name.value;
    if (login_name.length == 0) {
        alert("请输入您的账号！");
        form.login_name.focus();
        return false;
    }

    // 密码空值验证
    var password = form.password.value;
    if (password.length == 0) {
        alert("请输入密码！");
        form.password.focus();
        return false;
    }

    // 验证码空值验证
    var valicode = form.valicode.value;
    if (valicode.length == 0) {
        alert("请输入验证码！");
        form.valicode.focus();
        return false;
    }

    // 邮箱校验
    var email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (email.test(login_name)) {
        return true;
    }
    else {
        alert("无效账号！");
        form.login_name.focus();
        return false;
    }
}