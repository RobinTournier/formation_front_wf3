/*ETAPE 1 : Lors de la saisie d'un Pseudo, vérifiez en temps réel grâce aux évènements que celui-ci n'existe pas dans le tableau de membre.

Si le Pseudo existe dans le tableau Membre, la notification pseudoError doit s'afficher et le bouton "submit" être désactivé.

A l'inverse, si le Pseudo n'existe pas dans le tableau Membre, ou que l'utilisateur à corriger son Pseudo, alors, le bouton est actif et la notification pseudoError ne s'affiche pas / plus.
*/


var membres = [
    {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
    {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
    {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
    {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
  ];

// Creation d'une variable pseudo pour verifier la disponibilité.
var pseudo          = document.getElementById('pseudo');
var email           = document.getElementById('email');
var mdp             = document.getElementById('mdp');
var bouton          = document.getElementById('submit');
var age             = document.getElementById('age');
var InscriptionForm = document.getElementById('InscriptionForm');
var titre           = document.getElementById('Bienvenue ');

var pseudoError     = document.getElementsByClassName('pseudoError')[0];
var ageError        = document.getElementsByClassName('ageError')[0];


// -- ETAPE 1 & 3
pseudo.addEventListener('input', function () {

    // console.log(pseudo.value);
    for( let i = 0 ; i < membres.length ; i++ ) {
        
        // console.log( membres[i] );

        /**
         * Si la saisie d'un pseudo en cours par mon utilisateur
         * correspond à un pseudo dans mon tableau de membres...
         * Alors, ma condition s'applique.
         * NB : La condition vérifie la saisie de mon utilisateur
         * pour tous les membres du tableau !
         */
        if( pseudo.value === membres[i].pseudo ) {

                /**
                 * Si je trouve une correspondance, j'affiche l'alerte
                 * pseudoError, car le pseudo saisi par mon utilisateur
                 * existe déjà dans le tableau de membre...
                 */
                pseudoError.style.display = "block";
                submit.disabled = true;
                break;

                // console.log(true);

        } else {

            pseudoError.style.display = "none";
            submit.disabled = false;
            // console.log(false);

        }

    }

});
