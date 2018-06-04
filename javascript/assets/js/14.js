/* ---------------------------------------
                ~ LES EVENEMENTS ~

    Les evènements vont me permettre de déclancher une fonction, c'est à dire une série d'instructions ;
    suite àà une action de mon utilisateur...

    OBJECTIF : Etre en mesure de capturer ces evènements
    afin d'exécuter une fonction.

    Les Evènements : MOUSE ( Souris )   
        
        click      : au click sur un élément.
        mouseenter : la souris passe au dessus de la zone d'un élément.
        mouseleave : la souris sort de cette zone.

    Les evenements : KEYBOARD ( Clavier )

        keyup      : une touche du clavier à été relachée ;
        keydown    : une touche est enfoncée.

    Les Evenements : WINDOW ( Fenêtre )

        scroll     : défilement de la fenêtre
        resize     : redimentionnement de la fenêtre

    Les Evenements : FORM ( Formulaire )

        change     : pour les éléments <input>, <select> et <textarea>;
        submit     : à l'envoi ( soumission ) du formulaire ;
        input      : pour capter la saisie d'un utilisateur sur un champ <input>.


##############  LES ECOUTEURS D'EVENEMENTS ################

    Pour attacher un évènement à un élément, ou autrement dit,
    pour déclarer un écouteur d'évènement qui se chargera de 
    déclancher une fonction, je vais utiliser la syntaxe suivante :

-------------------------------------------------------------------------------*/

var p = document.getElementById('MonParagraphe');

// Je souhaite que mon paragraphe soit rouge au clic de la souris

function changeLaCouleurEnRouge() {
    p.style.color ="red";
}

p.addEventListener('click', changeLaCouleurEnRouge);

/*------------------------------------------------------------------\
|                                                                   |
|   A l'aide de javascript, créez un champ "input" type text avec   |
|   un ID unique. Affichez ensuite dans une alerte, la saisie de    |
|   l'utilisateur                                                   |
|__________________________________________________________________*/

// Création de notre champ input
var input = document.createElement('input');

// Attribution d'un attribut
input.setAttribute('type','text');
input.setAttribute('placeholder','Saisissez un contenu ... ');
input.id = "MonId";

// Ajout dans la page.
document.body.appendChild(input);

function voirLaSaisieDeMonInput() {
    alert(input.value);
}

input.addEventListener('change', voirLaSaisieDeMonInput);