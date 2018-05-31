/*---------------------------\
        LES CONDITIONS
\---------------------------*/
/*
var MajoriteLegaleFR = 18;

if (14 >= MajoriteLegaleFR){
    alert('Bienvenue!');
}
//      LE ELSE N'EST PAS OBLIGATOIRE
else{
    alert('Va voir google si...');
}*/

//      EXERCICE
/*  Créer une fonction permettant de verifier l'age d'un visiteur (prompt).
s'il a la majorité légale, alors je lui souahite la bienvenue.
Sinon, Je fais une redirection sur Google après lui avoir signalé le soucis. */
/*
// 1. Declarer les variables
var MajoriteLegaleFR = 18;

// 2. demander age
function question(){
    var age = parseInt (prompt("Bonjour, quel age avez vous?", "Saisissez votre age"));
    
    if (age >= MajoriteLegaleFR ){
        alert('Bienvenue sur notre site!');
    }
    else {
        alert("Desolé vous n'avez pas l'age requis pour rentrer sur notre site");
        window.location.replace("http://google.com");
    }
} 
question(); 
*/

//      CORRECTION
/*
var MajoriteLegaleFR = 18;
// verifier si l'utilisateur est majeur
function monUtilisateurEstMajeur(age) {
    if (age >= MajoriteLegaleFR){
        return true;
    } else {
        return false;
    }
}
// Je demande à l'utilsateur son age
var age = parseInt (prompt("Bonjour, quel age avez-vous?", "Saisissez votre age"));
// Verification de l'age de l'utilisateur
if (monUtilisateurEstMajeur(age) ) {
    aloert('Bienvenue sur mon site internet, reservé pour les majeurs..')
    document.write("0_0 !!" );
}   else {
    // j'effectue ma redirection
    document.location.href("http://google.com")
}
*/
/*------------------------------------------------------------------\
|               LES OPERATEURS DE COMPARAISON                       |
|                                                                   |
|    L'opérateur de comparaison "==" signifie : égal à              |
|    il permet de verifier que deux varibales sont identiques.      |
|                                                                   |
|    L'opérateur de comparaison "===" signifie stricement égal a    |
|    il va comparer la valeur mais aussi le type.                   |
|                                                                   |
|    L'opérateur "!=" signifie   : différent de                     |    
|    L'opérateur "!==" signifie  : strictement différent de         |
|                                                                   |
\------------------------------------------------------------------*/

//      BASE DE DONNEES

/* ---------------------------------------------------------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
----------------------------------------------------------------------------------- */

var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

var emailUti = prompt('Rentrez votre email','Rentrez votre email');
var mdpUti = prompt('Rentrez votre mdp','Rentrez votre mdp');
if((emailUti === email)) {
  if ((mdpUti === mdp)){
    alert('bienvenue');
    document.write("0_0 !!" );
}  
else{
    alert('Echec de connexion');
}
}
    
else{
    alert('Echec de connexion');
}

//CORRECTION
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

// // -- 1. Demander à l'utilisateur son adresse email
// var emailUser = prompt("Bonjour, Quel est votre adresse email ?","<Saisir votre email>");

// // -- 2. Je vérifie si l'email saisie correspond avec celle de la BDD
// if( emailUser === email ) {

//     // -- 2a1. Tous est ok, je continue la vérification avec le mot de passe.
//     var mdpUser = prompt("votre mot de passe ?","<Saisir votre mot de passe>");

//     // -- 2a2. Vérification du mot passe
//     if( mdpUser === mdp ) {

//         alert('Bienvenue !');

//     } else {

//         alert("ATTENTION, nous n'avons pas en mesure de reconnaitre votre mot de passe.");

//     }

// } else {

//     // -- 2b. Les emails ne correspondent pas...
//     alert("ATTENTION, nous n'avons pas en mesure de reconnaitre votre adresse email.");

// }

// -- Exemple avec les fonctions

function connexion(emailUser, mdpUser) {
    if(emailUser === email && mdpUser === mdp) {
        return true;
    } else {
        return false;
    }
}

var emailUser = prompt("Bonjour, Quel est votre adresse email ?","<Saisir votre email>");
var mdpUser = prompt("votre mot de passe ?","<Saisir votre mot de passe>");

if( connexion(emailUser, mdpUser) ) {
    alert('Bienvenue ' + emailUser);
} else {
    alert('ATTENTION, email / mot de passe incorrect.');
}

    /* -------------------------------------------------------- *\
   /                 ~ LES OPERATEURS LOGIQUES ~                  \
  /_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \
    |                                                           |
    |           ##### L'opérateur ET : && ou AND #####          |
    |                                                           |
    |   Si la combinaison email user et email correspond, ET    |
    |   la combinaison mdpuser et mdp correspond.                |
    |                                                           |
    |   --> Dans cette condition, les 2 doivent OBLIGATOIREMENT |
    |   correspondre pour être validée.                        |
    |   Ex. if(emailUser == email && mdpUser == mdp) {...}      |
    |                                                           |
    |           ##### L'opérateur OU : || ou OR #####           |
    |                                                           |
    |   Si la combinaison emailUser et email correspond ET/OU   |
    |   la combinaison mdpUser et mdp correspond.
    |                                                           |
    |   --> Dans cette condition, au moins l'une des deux       |
    |   doit correspondre pour être validée.                    |
    |   Ex. if(emailUser == email || mdpUser == mdp) {...}      |
    |                                                           |
    |        ##### L'opérateur " ! " ou encore NOT #####        |
    |                                                           |
    |   L'Opérateur "!" signifique le CONTRAIRE DE... ou NOT    |
    |                                                           |
    |   var monUtilisateurEstApprouve = true;                   |
    |   if(!monUtilisateurEstAppprouve) {...}                   |
    |   Mon Utilisateur n'est pas approuvé.                     |
    |                                                           |
    |   Reviens à écrire :                                      |
    |   if(monUtilisateurEstApprouve == false) {...}            |
    |                                                           |
    \*---------------------------------------------------------*/