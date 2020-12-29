addEventListener('', () => {
    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        data: {
            username: $('#register_name').val()
        },
        complete: function(res) {
            if (res) {}
        }
    })
})