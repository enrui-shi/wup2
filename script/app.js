var login_form = $("#login");
login_form.submit( function(e) {
    e.preventDefault();
    $.ajax({
        type: login_form.attr('method'),
            url: login_form.attr('action'),
            data: frm.serialize(),
            success: function (data){
                console.log(data);
            }
    })
})