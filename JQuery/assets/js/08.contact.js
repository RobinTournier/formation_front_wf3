function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function estCeQunContactEstPresent(unEmail){
    let estPresent = false;
}
for ( let i=0 ; i < CollectionDeContacts.length ; i++){
    if( unEmail=== CollectionDeContacts[i].email){
        estPresent = true;
        break;
    }
    return estPresent;
}

function ajouterContact (unContact){

    // ajouter un contact dans le tableau de contacts (colllectionDeContacts)
    CollectionDeContacts.push(Contact);

    // Mettre à jour le tableau HTML
    ù('.aucunContact').hide();
    $(`
        <tr>
            <td>${Contact.nom}</td>
            <td>${Contact.prenom}</td>
            <td>${Contact.email}</td>
            <td>${Contact.tel}</td>
        </tr>
    `).appendTo( $('#LesContacts > tbodt'))

    // reinitialiser le formulaire
    $('#contact')[0].reset();
    $('#contact').get(0).reset();
    
    // Afficher une notification
    $('.alert-contact').fadeIn().delay(4000).fadeOut();
}
var CollectionDeContacts = [];

$('.alert').hide(500);
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
        let mesInformationsSontValides = true;

        // -- Validation du Nom
        if( nom.val().length === 0 ) {
            //nom.addClass('is-invalid');
            mesInformationsSontValides = false;
        }

        // -- Validation du Prénom
        if( prenom.val().length === 0 ) {
           // prenom.addClass('is-invalid');
            mesInformationsSontValides = false;
        }

        // -- Validation du Mail
        if( !validateEmail( email.val() ) ) {
            //email.addClass('is-invalid');
            mesInformationsSontValides = false;
        }

        // -- Validation du Téléphone
        if( !validateTel( tel.val() ) ) {
            //tel.addClass('is-invalid');
            mesInformationsSontValides = false; 
        }
        if(mesInformationsSontValides){
            let Contact = {
                nom : nom.val(),
                prenom : prenom.val(),
                email : emai.val(),
                tel : tel.val()
            };

            if(!estCeQunContactEstPresent(Contact.email)) {
                    
                // -- Ajout du Contact
                ajouterContact(Contact);

            } else {                    
                // -- Alert si contact présent
                alert('ATTENTION ce contact est deja présent!');
            }
            else {
                // alerte si erreur dans l'un des champs
                alert('ATTENTION Veuillez bien remplir tout les champs.');
            }
        }










        if( $(this).find('.is-invalid').length === 0 ) {

            $(this).replaceWith(` 
                <div class="alert alert-success" role="alert">
                    Votre contact à bien été transmis !
                    Nous vous répondrons dans les meilleurs délais.
                </div>
            `);
            $('.alert').display(2000).hide(500);
            $('.aucuncontact').display(hide);
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
