
$(document).ready(function(){
    var adduser_form = $("#adduser");
    adduser_form.submit( function(e) {
        var adduser_data = { username: $('#username').val(), email: $('#email').val() , password: $('#password').val() };
        e.preventDefault();
        $.ajax({
            type: adduser_form.attr('method'),
            url: adduser_form.attr('action'),
            contentType:"application/json; charset=utf-8",
            data: JSON.stringify(adduser_data),
            dataType:"json",
            success: function (data){
                console.log(data);
                if (data.status=='OK'){
                    window.location.href='/'
                }
            }
    })
})
});