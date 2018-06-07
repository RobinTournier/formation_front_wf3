$(function(){
    
    $('#MonFormulaire').submit( function (event){
       
        // Empecher la redirection vers le fuchier php après la validation du formulaire
        event.preventDefault();

        // cacher le formulaire
        $('form').hide('fast');

        // Recuperer le nom rentré par l'utilisateur
        var nomComplet = $('#nomcomplet').val();

        //ecrire du texte dans le HTML
        var txt = $("<p></p>").text("Bonjour, " + nomComplet);
        $('body').append(txt);

       
    });
})