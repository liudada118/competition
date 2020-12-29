function check() {
    // 邮箱注册空值验证
    var register_name = form.register_name.value;
    if (register_name.length == 0) {
        alert("请使用邮箱注册！");
        form.register_name.focus();
        return false;
    }

    // 密码空值验证
    var password = form.password.value;
    if (password.length == 0) {
        alert("请输入密码！");
        form.password.focus();
        return false;
    }

    // 密码复杂度简单校验
    var flag1 = false;
    var flag2 = false;
    var numbers = '0123456789';
    for (var i = 0; i < password.length; i++) {
        var ch = password.charAt(i);
        if (numbers.indexOf(ch) > -1) {
            flag1 = true;
            break;
        }
    }
    var abc = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < password.length; i++) {
        var ch = password.charAt(i);
        if (abc.indexOf(ch) > -1) {
            flag2 = true;
            break;
        }
    }
    if (flag1 == true && flag2 == true) {
    }
    else {
        alert("密码必须包含数字和字母！");
        form.password.focus();
        return false;
    }

    // 确认密码校验
    var repassword = form.repassword.value;
    if (repassword.length == 0) {
        alert("请确认您的密码！");
        form.repassword.focus();
        return false;
    }
    if (password != repassword) {
        alert("密码和确认密码不一致！");
        form.repassword.focus();
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
    if (email.test(register_name)) {
        return true;
    }
    else {
        alert("错误邮箱！");
        form.register_name.focus();
        return false;
    }
}