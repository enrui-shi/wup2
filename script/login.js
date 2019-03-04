
$(document).ready(function(){
    var login_form = $("#login");
    login_form.submit( function(e) {
        var login_data = { username: $('#username').val(), password: $('#password').val() };
        e.preventDefault();
        $.ajax({
            type: login_form.attr('method'),
            url: login_form.attr('action'),
            contentType:"application/json; charset=utf-8",
            data: JSON.stringify(login_data),
            dataType:"json",
            success: function (data){
                if (data.status=='OK'){
                    window.location.href='/ttt'
                }
                console.log(data);
            }
    })
})
});