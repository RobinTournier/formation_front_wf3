/*alert('wow tu es sur ma page');*/

// Deux slashs pour faire un commentaire uniligne

/*
    ici, je peux faire  un commentaire
    sur plusieurs lignes

    RACCOURCI : CTRL + :
        ou      CTRL + SHIFT + :

*/

// 1-- : Déclarer un variable JS
var Prenom;

// 2-- : Affecter un valeur
Prenom = "Robin";

// 3-- : Afficher la valeur de ma variable dans ma console.
console.log(Prenom);

/*-------------------------------------------
| ~ ~ ~ ~ ~ LES TYPES DE VARIABLES ~ ~ ~ ~ ~ |
--------------------------------------------*/

// Ici, typeof, me permet de connaître le type de ma variable.
console.log(typeof Prenom);

//Déclaration et affectation d'un nombre.
var age = 40;

// Afficher dans la console.
console.log(age);

// Connaître son type
console.log(typeof age);

/*-----------------------------------------------------------------\
|                                                                   |
| ~ ~ ~ ~ ~ LA PORTEE DES VARIABLES~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  |
|                                                                   | 
|   Les variables décalrée directement à la racine du fichier js    |
|   sont appelées variables GLOBALES.                               |
|                                                                   | 
|    Elles sont disponibles dans l'ensemble de votre document,      |
|    y compris dans les fonctions que nous verrons plus tard        |
|                                                                   |
|    Les variables déclarées à l'interieur d'une fonctions sont     |
|    appelées variables LOCALES.                                    |  
|    Elles sont disponibles UNIQUEMENT dans le scope de la fonction.|
|                                                                   |  
\------------------------------------------------------------------*/

// Les variables de type FLOAT
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// Les booléens (VRAI / FAUX)
var unBooleen = false; // true
console.log(unBooleen);
console.log(typeof unBooleen);

// Les constantes
/* La declaration CONST permet de créer une constante
accessible uniquement en lecture.
Sa valeur ne pourra pas être modifiée par des réafectations ultérieures.
Une constante ne peut pas être décladée à nouveau

Généralement par convention, les constantes sont en majuscule.
*/
const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";

// Je ne peux pas faire cela ..
//USER = "Robin";
//01.js:78 Uncaught TypeError: Assignment to constant variable.

/*-----------------------------------------------------------------\
|                                                                   |
| ~ ~ ~ ~ ~ ~ ~ ~  ~ ~ ~ ~ LA MINUTE INFO ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ |
|                                                                   | 
|   Au fur est à mesure que l'on affecte ou réaffecte des valeurs   |
|   à une variables, celle-ci prend la nouvelle valuer et le        |
|   nouveau type !                                                  |  
|                                                                   |
|   En Javascript (ECMA Script); les variables sont auto-typées.    |
|   Pour convertir une variable NUMBER en STRING et STRING en       |
|   NUMBER je peux utiliser les fonctions natives de JS.            |
|                                                                   |
\------------------------------------------------------------------*/

var  unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

/* La fonction parseInt() Pour retourner un entier 
à partir de ma chaîne de caractère.
*/

unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// Je ré-affecte une valeur à ma variable
unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// Conversion d'un nombre ne string avec toString()
unNombre = 10;
var monNombreDeTypeString = unNombre.toString();
console.log(monNombreDeTypeString);
console.log(typeof monNombreDeTypeString);
