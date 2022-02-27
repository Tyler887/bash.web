$('#run_system').on('click', function() {
    $.ajax({
        url : 'bash'
    }).done(function(data) {
        console.log(data);
    });
});
