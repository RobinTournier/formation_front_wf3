/*-----------------------------------------\
|     INCREMENTATION & DECREMENTATION      |
\---------------------------------------- */

var nb1 = 1;


//      INCREMENTATION
nb1 = nb1 + 1;

//  ecriture simplifiée
nb1++; // Raccourci de nb1 = nb1 + 1; --> par pas de 1.



//      DECREMENTATION
nb1 = nb1 - 1;

//  ecriture simplifiée
nb1--; // Raccourci de nb1 = nb1 - 1; --> par pas de 1.


//      Subtilité
nb1 = 0;
console.log(nb1++); // l'incrementation se fait après l'affichage

nb1 = 0;
console.log(++nb1); // l'incrementation se fait avant l'affichage