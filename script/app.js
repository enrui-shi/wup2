
$(document).ready(function(){
    var login_form = $('#login');
    login_form.submit( function(e) {
        e.preventDefault();
        $.ajax({
            type: login_form.attr('method'),
            url: login_form.attr('action'),
            contentType:"application/json; charset=utf-8",
            data: JSON.stringify(login_form.serializeArray()),
            dataType:"json",
            success: function (data){
                console.log(data);
            }
    })
})
});