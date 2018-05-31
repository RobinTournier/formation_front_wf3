/*-----------------------------------------\
|              LES FONCTIONS               |
\---------------------------------------- */
 

/*
    declarer une fonction
    NB: cette fonction ne retourne aucune valeurs
    et ne prend pas de paramètres.
*/
function Bonjour(){
    /* Lors de l'appel de cette fonction,
    les instructions ci-dessous seront executées.*/
    alert("Bonjour !");
}

/* Je vais appeler ma fonction "Bonjour" et declencher ses instructions. */
Bonjour();

// Function NomDeMaFonction (Argument 1, Argument 2, Argument n) {
    // Les instructions ...
//}

/*
Declarer une fonction qui prend un argument ( un paramètre )
*/
function ditBonjour(Prenom, Nom){
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong> !</p>")
}
// appeler / utiliser une fonction avec des arguments
ditBonjour("Hugo", "LIEGEARD");

/*
    EXERCICE :
    Créez une foncton permettant d'effectuer l'addition
    de deux nombres (nb1 et nb2) passé en paramètre
*/

function addition(nb1, nb2){
    return nb1+nb2;
}
document.write("<p>resultat =  " + addition( 5, 7) + "</p>");
