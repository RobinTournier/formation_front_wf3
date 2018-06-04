 /*-------------------------------\
 |    MANIPULATION DES CONTENUS   |
 \-------------------------------*/

 //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es

 l = e => console.log(e);

 // Je souhaite récupérer mon lien Google; comment procéder ?
 var google= document.getElementById('google');
 l(google);

 // Maintenant, je souhaite accéder aux information de ce lien...

    // A : Le lien vers lequel pointe la balise
    l( google.href)

    // B : l'ID de la balise
    l( google.id)

    // C : la class de la balise
    l( google.className )

    // D : Le texte de la balise
    l( google.textContent)

/*
Maintenant, je souhaite modifier le contenu de mon lien !
*/

google.textContent = " Mon lien vers GooOOOoogle ! ";



 /*-------------------------------------\
      AJOUTER UN ELEMENT DANS MA PAGE
 \-------------------------------------*/

 /* 
    Nous allons utiliser 2 étapes :

    1.  La fonction document.createElement() va permettre de générer
    un nouvel élément dans le DOM ; que je pourrais modifier par la 
    suite avec des méthodes que nous venons de voir...

    PS : Ce nouvel élément est placé en mémoire

    2.  L'ajouter à la page.
*/
    // Definition de l'élément
    var span = document.createElement('span');

    // Si je souhaite lui attribuer du contenu
    span.textContent =" Mon Beau texte en js";

    // Comment ajouter l'élément à la page ?
    google.appendChild(span);

    /* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".

Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */

// -- Création de la balise h1
var h1 = document.createElement('h1');

// -- Création de la balise a
var a = document.createElement('a');

//  -- Titre de mon Article
a.textContent= "Titre de mon Article";

// -- Je donne un lien à mon lien
a.href="#";

// -- Je met mon lien a, dans mon h1
h1.appendChild(a);

// -- Je met mon h1 dans la page
document.body.appendChild(h1);

// -- Je veux que mon lien soit de couleur rouge
a.style.color = "red";

// -- Je veux que mon lien ne soit pas souligné
a.style.textDecoration = "none";