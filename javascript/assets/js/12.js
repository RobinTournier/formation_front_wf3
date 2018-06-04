  /*---------------------------------------------------------\
 /                        LE DOM                              \
/ _ _ _ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \
  |  Le dom est une interface de developpement              |
  |  en JS pour HTML,                                       |
  |  Grâce au DOM, je vais etre en mesure d'acceder /       |
  |  modifier mon HTML.                                     |
  |                                                         |    
  |  l'objet "document" : c'est le point d'entrée vers mon  |
  |  contenu HTML.                                          |
  |                                                         |
  |  Chaque page chargée dans mon navigateur                |
  |  à un objet "document"                                  |
  |_________________________________________________________|


  /* ------------------------------------------------\
  |   document.getElementById() est une fonction qui  |
  |  va permettre de récupérer un élément en HTML à   |
  |  partir de son identifiant unique : ID            |
   \------------------------------------------------*/

var bonjour = document.getElementById('bonjour');
console.log(bonjour);

/*
  document.getElementsByClassName() est une fonction qui 
  va permettre de récupérer un  ou plusieurs éléments
  (une liste) HTML à
  partir de leur classe.
  */

  var contenu = document.getElementsByClassName('contenu');
  console.log(contenu);

  // Me renvoi un tableau JS avec mes éléments HTML (collection HTML)

    /* -------------------------------------------------------\
    |   document.getElementsByTagName () est une fonction qui |
    |    va permettre de récupérer un  ou plusieurs éléments  |
    |    (une liste) HTML à                                   |
    |     partir de leur nom de balise.                       |
    \--------------------------------------------------------*/

   var span = document.getElementsByTagName('span');
   console.log(span);

   