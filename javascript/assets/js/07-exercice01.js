/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */


/*
function getAge() {
    var Prenom = prompt("Rentrez votre prénom", "<Saisissez votre Prénom>");
    
    var age = prompt("Bonjour " + Prenom + " quel age as-tu ?", "<Saisissez votre age>");
    var Annee =new Date();
    Annee = Annee.getFullYear();
    anneeNaissance = Annee - age;
    alert("Tu es donc Né(e) en : " + anneeNaissance + ".");
    
} 
getAge(); */


/*---------------------\
        CORRECTION
\---------------------*/
//  1. Initialisation des variables
var ObjetDate = new Date();
var AnneeActuelle = ObjetDate.getFullYear();

//  2. Création d'une fonction
    function Hello(){
    
    // 2a. Je demande à l'utilisateur son prénom
    var prenom = prompt("Hello ! What is your name?", "<saisir votre Prénom>")
    console.log(prenom);
    console.log(typeof prenom);
    // 2b. Je lui demande son age
    var age = parseInt(prompt("Hello ! " + prenom + " how old are you", "<saisir votre age>"));

    console.log(age);
    console.log(typeof age);
    // 2c. Dédure l'année de naissance et l'afficher dans un alert()
        var AnneeDeNaissance = AnneeActuelle - age;
        alert('AMAZING ! So you were borne in ' + AnneeDeNaissance);
    // 2d. Afficher dans la page un récapitulatif
    document.write("Hellp " + prenom + " it's AMAZING ! you're " + age + " years old!");

}
//  3. Execution de la fonction
Hello();