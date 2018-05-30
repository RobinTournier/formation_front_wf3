//  -- Exemple avec un tableau 3D

var Contacts = [
    {
        prenom: "Hugo",
        nom: "LIEGEARD",
        coordonnees: {
            email: "wf3@hl-media.fr",
            adresse: {
                ville : "Ducos",
                cp: 97224,
                region: "Martinique",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            },
            tel: {
                fixe: "+ 596 596 108 328",
                fax: "+596 596 108 632",
                port: "+33 783 97 15 15"
            }
        }
    },
    {
        prenom: "Rodrigue",
        nom: "NOUEL",
        coordonnees: {
            email: "wellcommunication@gmail.com",
            adresse: {
                ville : "Fort-de-France",
                cp: 97200,
                region: "Martinique",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            },
            tel: {
                fixe: "+ 596 596 XX XX XX",
                fax: "",
                port: "+596 696 07 04 34"
            }
        }
    },
    {
        prenom: "Robin",
        nom: "TOURNIER",
        coordonnees: {
            email: "robin.tournier@gmail.com",
            adresse: {
                ville : "Paris",
                cp: 75016,
                region: "Ile-de-France",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            },
            tel: {
                fixe: "",
                fax: "",
                port: "+33 XX XX XX XX"
            }
        }
    },
];

console.log(Contacts);
console.log(Contacts[0].coordonnees.adresse.pays.nom);


/* -------------------------------
        AJOUTER UN ELEMENT
---------------------------------*/

var Couleurs = ["Rouge", "Jaune", "Verte"];

//  Si je souhaite ajouter un élément dans un tableau
//  Je fais appel à la fonction push()

console.clear();
console.log(Couleurs);
Couleurs.push("Orange");
console.log(Couleurs);
Couleurs.push("Bleu");
console.log(Couleurs);

// NB: la fonction unshift() permet d'ajouter un ou plusieus éléments en début de tableau.

/* ----------------------------------------------
    RECUPERER ET SORTIR LE DERNIER ELEMENT 
---------------------------------------------- */

/* La fonction pop() me permet de supprimer un ou plusieurs éléments de mon tableau
et d'en récuperer la valeur.
Je peux accessoirement récuperer cette valeur dans une variable */

var monDernierElement = Couleurs.pop();

console.log(Couleurs);
console.log(monDernierElement);

/* La même chose est possible avec le premier élément avec la fonction shift()
    La fonction splice() vous permet de faire sortir un ou plusieurs élément.
*/