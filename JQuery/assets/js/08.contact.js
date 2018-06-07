function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Valider son numéro de téléphone
 */
var validateTel = tel => {
    var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
    return telReg.test(tel);
}
$(function() {
            
    $('#contact').submit(function(event) {

        event.preventDefault();

        $('#contact .is-invalid').removeClass('is-invalid');
        $('#contact .alert-danger').remove();
        //$('#contact div').delay(4000).hide(slow);
        // $('#contact .invalid-feedback').remove();


        let nom     = $('#nom');
        let prenom  = $('#prenom');
        let email   = $('#email');
        let tel     = $('#tel');

        // -- Validation du Nom
        if( nom.val().length === 0 ) {
            nom.addClass('is-invalid');
            // $(`
            //     <div class="invalid-feedback">
            //         Vous devez saisir votre nom.
            //     </div>
            // `).appendTo(nom.parent());
        }

        // -- Validation du Prénom
        if( prenom.val().length === 0 ) {
            prenom.addClass('is-invalid');
        }

        // -- Validation du Mail
        if( !validateEmail( email.val() ) ) {
            email.addClass('is-invalid');
        }

        // -- Validation du Téléphone
        if( !validateTel( tel.val() ) ) {
            tel.addClass('is-invalid');
        }

        if( $(this).find('.is-invalid').length === 0 ) {

            $(this).replaceWith(`
                <div class="alert alert-success" role="alert">
                    Votre contact à bien été transmis !
                    Nous vous répondrons dans les meilleurs délais.
                </div>
            `);
            $(this).delay(4000).hide(500);

        } else {

            $(this).prepend(`
                <div class="alert alert-danger" role="alert">
                    Nous n'avons pas été en mesure de valider votre contact. 
                    Vérifiez vos informations.
                </div>
            `);

        }

    });

});
