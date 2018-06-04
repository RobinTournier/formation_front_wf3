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
var pseudoUser  = document.getElementById('pseudo');
var pseudoError = document.getElementsByClassName('pseudoError')[0];
var bouton      = document.getElementById('submit');
var age         = document.getElementById('age');
var ageError    = document.getElementsByClassName('ageError')[0];
var titre       = document.getElementById('Bienvenue ');

// Fonction pour parcourir le tableau des utilisateurs
function verifPseudo (){
    for (let i = 0 ; i < membres.length; i++){ // boucle pour parcourir le tableau
        if((pseudo === pseudoUser)) {// si pseudo identique afficher pseudoError
            // pseudoError.setAttribute('display','block');
            pseudoError.style.display = 'block'; // Afficher le message d'erruer
            bouton.setAttribute('disabled', true); // desactiver le bouton sumbit
            
        }
        console.log( pseudoUser);
    }
}
pseudoUser.addEventListener('input', verifPseudo); // appeler la fonction pour verifier le pseudo


/*ETAPE 2 : L'inscription n'est possible qu'aux personnes majeurs de 18 ans.
Vous devez donc vérifier que l'age saisi est bien supérieur ou égale à 18 ans.

Si cette condition n'est pas valide, alors la notification ageError doit s'afficher et le bouton "submit" être désactivé.

Quand l'utilisateur corrige son age, la situation revient à la normal. La notification ageError ne s'affiche plus et le bouton submit est de nouveau disponible.*/

function verifAge (){
    if(age <= 18) {
        ageError.style.display = 'block';
        bouton.setAttribute('disabled', true);
    }
}
age.addEventListener('input', verifAge); 

/*ETAPE 3 : 
   
Lors de la saisie du Pseudo, vous devrez afficher en temps réel dans le titre id "Bienvenue" : Bonjour [Pseudo] : Pseudo étant la saisie en cours de l'utilisateur.*/

pseudoUser.addEventListener('input', afficherTitre);

function afficherTitre() {
    titre.appendChild('df');
}