/*-----------------------------------------------------
            LES SELECTEURS D'ENFANT JQUERY
-------------------------------------------------------*/

$(function (){

    l = e => console.log(e);

    // Je souhaite selectionner toutes les divs de ma page
    l( $('div'));

    // Je souhaite selectionner la balise nav de ma page
    l( $('#menu'));

    // Je souhaites tous les éléments descendants directs (enfants) qui sont dans "nav"
    l( $('#menu').children );
    
    // Parmi ces descendants, uniquement l'élément "ul"
    l( $('#menu').children('ul'));
    
    //Je souhaite récuperer tous les éléments "li" de mon "ul"
    l( $('#menu').children('ul').find('li'));

    // Je souhaite récuperer uniquement le 2ème élément de mes "li"
    l( $('#menu').find('li').eq(1));

    // Je souhaite connaitre le voisin imédiat de mon "menu"
    l( $('#menu').next());
    l( $('#menu').next().next()); // le voisin du voisin
    l( $('#menu').prev()); // le voisin d'avant

    // Les parents
    l( $('#menu').parent());
})