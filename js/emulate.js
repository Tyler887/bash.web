$('#run_system').on('click', function() {
    $.ajax({
        url : 'php/runner.php'
    }).done(function(data) {
        console.log(data);
    });
});
