 /*-------------------------------\
|          LES BOUCLES             |
 \-------------------------------*/
/*
// Pour i = 0; tant que i est strictement inférieur ou égale à 10; alors, j'incrémente i de 1.
for (let i = 0; i <= 10; i++){
    document.write("<p>Instruction executée : <strong>" + i + "</strong> </p>");
}

document.write("<hr>");

var j = 1;
while(j<=10){
    document.write("<p>Instruction executée : <strong>" + j + "</strong> </p>");
    //ATTENTION A NE PAS OUBLIER L'INCREMENTATION
    j++;
}
*/

 /*-------------------------------\
|          EXERCICE               |
 \-------------------------------*/

 var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Hugo', 'Jacques'];

 /*
 CONSIGNE : Grâce  à une boucle FOR, affichez la liste des prénoms 
 du tableau ci-dessus dans la console, ou sur votre page.
 */
// Avec la boucle FOR
 for(let i = 0; i < Prenoms.length; i++){
     document.write("<p>" + Prenoms[i] + "<br></p>");
 }

 document.write("<hr>");


 // Avec la boucle WHILE
 var j = 0
 while( j < Prenoms.length ){
    document.write("<p>" + Prenoms[j] + "<br></p>");
    j++;
 }  

 //  Avec la boucle forEach
//  ATTENTION à la perfomance !!!
 Prenoms.forEach(afficheUnPrenom());
 function afficheUnPrenom(valeur, i){
     console.log( i + ' '+ Prenoms);
 }