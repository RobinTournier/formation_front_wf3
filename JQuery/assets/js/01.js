/*------------------------------------------------------------------------------------------------------
                                 LA DISPONIBILITE DU DOM

A partir du moment où mon DOM, c'est à dire l'ensemble de l'arborescence de ma page HTML est complètement chargée,
alors je peux commencer à utiliser JQuery.

Je vais mettre l'ensemble de mon code dans une fonction,
elle sera appelé automatiquement par JQuery lorsque le DOM sera entièrement défini.

3 façons de faire :
--------------------------------------------------------------------------------------------------------- */

jQuery(document).ready(function(){
    // Ici, le DOM est entièrement chargé, je peux procéder à mon code JS !



});

// 2ème possibilité :

$(document).ready(function(){
    // Ici, le DOM est entièrement chargé, je peux procéder à mon code JS !



});

// 3ème possibilité :

$(function() {
    // Ici, le DOM est entièrement chargé, je peux procéder à mon code JS !
    //alert('Bienvenue dans ce cous de jQuery !');
    // En JS :
    document.getElementById('TexteEnJquery').innerHTML = "<strong>Mon Texte en JS</strong>";

    //En JQ :
    $('#TexteEnJquery').html('Mon texte en JQ');


});
