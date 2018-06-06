/*------------------------------------------------------------------------------------------------------
                                 Les Selecteurs Jquery
--------------------------------------------------------------------------------------------------------- */

// Format : $('selecteur');
// En Jquery, tous les sélécteurs CSS sont disponibles...

$(function(){
    /// DOM READY !

l = e => console.log(e);

// Séléctionner toutes les balises span
// en JS
l(document.getElementsByTagName('span'));

//En JQ
l( $('span'));
 
//Je veux selectionner mon menu grâce à son ID

    // En JS
    l(document.getElementById('menu'));

    // En JQ
    l( $('#menu'));

// Je veux selectionnner une classe

    // En JS
    l(document.getElementsByClassName('MaClasse'));

    // En JQ
    l( $('.MaClasse'));

// Séléctionner un attribut
    l($('["https://www.google.fr"]'));

})