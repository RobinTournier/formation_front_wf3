/* -------------------------------
        LA CONCATENATION
---------------------------------*/

var debutDePhrase       = "Aujourd'hui ";
var dateDuJour          = new Date();
var suiteDePhrase       = ", sont présent : ";
var nombreDeStagiaire   = 15;
var finDePhrase         = " apprenants.<br>";

/* Nous souhaitons maintenant, grâve à la concatenation,
afficher tout ce petit monde en un seul morceau ! */

document.write( debutDePhrase + dateDuJour.getDate() + '/' + (dateDuJour.getMonth() +1 ) + '/' + dateDuJour.getFullYear() + suiteDePhrase + nombreDeStagiaire + finDePhrase);