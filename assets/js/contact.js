$(document).ready(function(){
    $('#submit-info').click(function(event){
        event.preventDefault();
        $.ajax({
            url: "sendemail.php",
            type: "POST",
            data: $('#contact').serialize(),
            beforeSend: function(xhr){
                $('#submit-info').html('Sending...');
            },
            success: function(response){
                console.log(response);
            },
            error: function(){

            },
            complete: function(){
                $('#submit-info').html('Sent');
            }
        });
    });
    $('#form-submit').click(function(event){
        event.preventDefault();
        $.ajax({
            url: "sendemail.php",
            type: "POST",
            data: $('#contact-us').serialize(),
            beforeSend: function(xhr){
                $('#form-submit').html('Sending...');
            },
            success: function(response){
                console.log(response);
            },
            error: function(){

            },
            complete: function(){
                $('#form-submit').html('Sent');
            }
        });
    });
});