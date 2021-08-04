    //解决IE下trim不可用
    String.prototype.trim = function () {
        return this .replace(/^\s\s*/, '' ).replace(/\s\s*$/, '' );
    }
    //密码验证
    function checkLogin(checkUrl, hrefUrl) {
        var username, password;
        $("#usernameErrorMsg").text("");
        $("#passwordErrorMsg").text("");
        $("#msg").text("");
        username = $('#username').val().trim();
        password = $('#password').val().trim();
        if (username == "") {
            $("#usernameErrorMsg").text("用户名不能为空!");
            return false;
        }
        if (password == "") {
            $("#passwordErrorMsg").text("密码不能为空!");
            return false;
        }
        //验证
        $.ajax({
            type : 'post',
            url : checkUrl,
            data : {
                'username' : username,
                'password' : password,
            },
            success : function(data) {
                if (data == 'true') {
                    location.href = hrefUrl;
                }else{
                    $("#msg").text(data);
                }
            }
        });
    }