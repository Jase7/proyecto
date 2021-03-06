$(document).ready(function() {

    /* Check if passwords match */
    $('input[name=repeat_pass]').keyup(function () {

        if ($('input[name=pass]').val() == $(this).val()) {
            $(this)[0].setCustomValidity('');

        } 

        else {
            $(this)[0].setCustomValidity('Las contraseñas deben coincidir');
        }
    });

    /* Let's check if user are available */
    $('input[name=user]').keyup(function(event) {

        if($(this).val().length == 0) {
            $('.isUserValid').css('display', 'none');
        }

        if ($(this).val().length >= 4) {

            $.ajax({
            url: '/api/checkUser',
            type: 'POST',
            data: $('form').serialize(),
            })
            .done(function(data) {

                if(data === 'valid') {
                    $('.isUserValid').css('display', "inline-block");
                    $('.isUserValid').html('<i class="icon-valid" aria-hidden="true" title="Disponible"></i>');
                }

                else if(data === 'invalid') {
                    $('.isUserValid').css('display', "inline-block");
                    $('.isUserValid').html('<i class="icon-invalid" aria-hidden="true" title="No disponible"></i>');
                }
                
            })
            .fail(function(err) {
                console.log(err);
            });//end AJAX call
        }        
    });

    //Check if the mail is used
    $('input[name=email]').on('keyup', function() {

        if($(this).val().length == 0) {
            $('.isEmailValid').css('display', 'none');
        }

        if ($(this).val().length >= 4) {

            $.ajax({
            url: '/api/checkMail',
            type: 'POST',
            data: $('form').serialize(),
            success: function(data) {
                if(data === 'valid') {
                    $('.isEmailValid').css('display', "inline-block");
                    $('.isEmailValid').html('<i class="icon-valid" aria-hidden="true" title="Disponible"></i>');
                }

                else if(data === 'invalid') {
                    $('.isEmailValid').css('display', "inline-block");
                    $('.isEmailValid').html('<i class="icon-invalid" aria-hidden="true" title="No disponible"></i>');
                }
            },
            error: function(err) {
                console.log(err)
            }
            }); //end AJAX call
        }        
    })
})