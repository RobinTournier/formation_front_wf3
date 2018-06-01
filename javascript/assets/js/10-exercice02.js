/* --
    CONSIGNE : A partir du tableau fourni, vous devez mettre en place un système d'authentification. Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue avec son nom et prénom (document.write);
            
    En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.  
-- */

var BaseDeDonnees = [
    {'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
    {'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'},
    {'prenom':'Nathanael','nom':'DORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'}
];
//  Creer des variables
var emailUser = prompt("Rentrez votre email", "<Saisissez votre Email>");
var mdpUser = prompt("Bonjour rentrez votre mdp", "<Saisissez votre mot de passe>");
var i = 0;

// Appel de la fonction connexion
function connexion(emailUser, mdpUser) {

    // boucle for permettant de parcourir le tableau
    for( i = 0; i < BaseDeDonnees.length; i++){
        
        // Si l'email et le mot de passe rentrés par l'utilisateur sont correct return true 
        if(emailUser === BaseDeDonnees[i].email && mdpUser === BaseDeDonnees[i].mdp) {
            return true;
        }
        
    }
}

// si le return de la fonction connexion est true alors afficher le nom de l'utilisateur
if (connexion(emailUser, mdpUser)){
    document.write("Bonjour <strong>"+ BaseDeDonnees[i].prenom + " " + BaseDeDonnees[i].nom + "</strong>" );
}
// si le return est faux (par defaut) alors afficher un message d'alert
else {
    alert("erreur connexion");
}
/*-----------------------------------------
            Méthode alternative
-----------------------------------------*/
// -- LesFlemards.js
function l(e) {
    console.log(e);
}

function w(f) {
    document.write(f);
}

// 1. Demander à l'utilisateur ces identifiants.
var emailUser = prompt("Rentrez votre Email", "<Saisissez votre email>");
var mdpUser   = prompt("votre mot de passe...", "<Saisissez votre mot de passe>");

/**
 * Vérifie et Identifie un Utilisateur dans le tableau BaseDeDonnées.
 * Retourne l'utilisateur s'il a été trouvé. Sinon Faux.
 * @param {*} emailUser 
 * @param {*} mdpUser 
 */
function connexion(emailUser, mdpUser){
    let IsEmailInArray = false;

    // -- On parcours le tableau d'utilisateurs
    for(let i =0; i < BaseDeDonnees.length; i++ ){

        // -- Si on trouve une correspondance etre l'email / mdp saisie par l'utilisateur et la BDD
        if( emailUser === BaseDeDonnees[i].email && mdpUser === BaseDeDonnees[i].mdp ){
            
            // -- L'email existe bien dans le tableau
            IsEmailInArray = true;

            // -- On retourne l'utilisateur
            return BaseDeDonnees[i]; 
        } 
    }
    return IsEmailInArray;
}

//  3. Si la fonction connexion retourne faux (false)
var monUtilisateur = connexion(emailUser, mdpUser);
if(!monUtilisateur){

    // -- J'affiche une alerte dans le navigateur
    alert ("Attention, email ou mot de passe incorrect")
}
else {

    // -- Sinon, tout va bien, je souhaite la bienvenue.
    w("Bonjour " + monUtilisateur.prenom + " " + monUtilisateur.nom);
    
}
/*-----------------------------------------
            Version courte
-----------------------------------------*/

// -- LesFlemards.js
function l(e) {
    console.log(e);
}

function w(f) {
    document.write(f);
}

// -- Déclaration de Variable
// -- EstCeQueLeMailEstDansLeTableau = faux;
var isEmailInArray = false;

// -- 1. Demander à l'utilisateur son email
var email   = prompt('Bonjour, Quel est votre email ?','<Saisissez votre email>');
var mdp     = prompt('votre mot de passe ?','<Saisissez votre mot de passe>');

// -- 2. Parcourir l'ensemble des données de mon tableau
for(let i = 0 ; i < BaseDeDonnees.length ; i++) {

    if(email === BaseDeDonnees[i].email && mdp === BaseDeDonnees[i].mdp ) {

	
        // -- J'ai trouvé une correspondance dans ma BDD
        isEmailInArray = true;
        w('Bonjour ' + BaseDeDonnees[i].prenom + ' !');

        // -- Je stop la boucle for, j'ai trouvé ce que je cherche...
        break;

    }

}

if(!isEmailInArray) {
    alert('ATTENTION, Email / Mot de Passe incorrect !');
}