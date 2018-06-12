/*

OBJECTIF : A partir d'une liste de contacts, être en mesure de récupérer un contact et d'afficher le détail de ses informations.

CONSIGNE :

	// Un internaute doit pouvoir rechercher un contact sur la base de son Username, Email, Phone ou Name
	// Le résultat des membres correspondant s'affiche ensuite dans une liste en dessous du champ de recherche.

    ETAPE 1. Mettre en Place le HTML et le CSS nécessaire pour rechercher un contact.
        Ex. Un champ input-text, et/ou un bouton pour lancer la recherche.
        
    ETAPE 2. Récupérer le Flux JSON : https://jsonplaceholder.typicode.com/users et être en mesure de récupérer la fiche d'un utilisateur par rapport a son username ou son email, ou son téléphone ou son Name. 
	
	BONUS : Trouver une solution grâce au Regex permettant de rechercher tous les utilisateurs correspondant.
    
    ETAPE 3. Afficher en HTML et CSS uniquement les informations de base : Nom, Prénom, Email, Téléphone.
    
*/
$(function(){


    //  1 : J récupère la valeur saisie par mon utilisateur
    $('#search').on('change', function(){

        // 2 je récupère la valeur saisie
        let search= $(this).val();

        // 3 Récupérer la liste de Contacts depuis le flux JSON
        $.getJSON('https://jsonplaceholder.typicode.com/users', function(utilisateur) {
            

        // 4 Comparer la recherche de l'utilisateur avec les données de la base
            for (i = 0 ; i < utilisateur.length; i++){
                console.log(utilisateur[i]);
                
                if ( search.toLowerCase() === utilisateur[i].name.toLowerCase() || search.toLowerCase() === utilisateur[i].email.toLowerCase() || search.toLowerCase() === utilisateur[i].phone.toLowerCase() || search.toLowerCase() === utilisateur[i].username.toLowerCase() ) {
                    $(`
                        <div class="membre">
                            <div class="membre_informations">
                                <p>Nom Complet : ${utilisateur[i].name}</p>
                                <p>Username : ${utilisateur[i].username}</p>
                                <p>Email : ${utilisateur[i].email}</p>
                                <p>Téléphone : ${utilisateur[i].phone}</p>
                            </div>
                        </div>
                    `).appendTo( $('.resultat'));
                    break;
                } else {
                    $('.membre').hide();
                }

                

            } // fin du for 
        
    }); // fi du getJSON


    



     /*   var bdd = {
                //cle       //valeur
                pseudo      : username.val(),
                email       : email.val(),
                tel         : phone.val(),
                nom         : name.val()
            };
*/

        // Faire une boucle pour recuperer les contacts un par un dans une base de données
       /* for (i = 0 ; i < utilisateur.length; i++){
            
            

            

        }
        */
        //console.log(bdd);
    
    });

});