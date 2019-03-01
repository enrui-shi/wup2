
$(document).ready(function(){
    var login_form = $('#login');
    login_form.submit( function(e) {
        var adduser_data = { name: $('#name').val(), email: $('#email').val() , password: $('#password').val() };
        e.preventDefault();
        $.ajax({
            type: login_form.attr('method'),
            url: login_form.attr('action'),
            contentType:"application/json; charset=utf-8",
            data: JSON.stringify(adduser_data),
            dataType:"json",
            success: function (data){
                console.log(data);
            }
    })
})
});