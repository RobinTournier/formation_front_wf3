/**
 * pour déclarer une classe comme composant de notre application on importe component via @angular/core.
 */
import {Component, OnInit} from '@angular/core';
import {Contact} from './shared/models/contact';
import {UserApiService} from './shared/models/services/user/user-api.service';
/**
 * @component est ce qu'on appel in décorateur. il va nous permettre de définir 3 paramètres essentiel à notre application
 */
@Component({
  /**
   * Le selecteur (selector) determine la manière dont le composant sera affiché
   * dons notre HTML : <app-root></app-root>.
   * Vous devre OBLIGATOIREMENT avoir la balise d'ouverture et de fermeture !
   */
  selector: 'app-root',
  /**
   * "TemplateUrl" ou "template" est la partie visible du composant.
   * c'est ce qui s'affiche à l'écran lorsque le composant est utilisé.
   */
  templateUrl: './app.component.html',
  /**
   * Pareil pour StyleUrl pour le css.
   */
  styleUrls: ['./app.component.css'],
  /**template: `
    <h1>Bienvenue à Paris IV</h1>
    <h3>Les meilleurs à RISK et PUBG...</h3>
    <p>Les apprenants sont en train de souffir avec Hugo</p>`,
  styles: [`
    h1{ color: blue;}
  `]
   **/
})
/**
 * La classe contient les données du composant, mais aussi son comportement.
 * Dans notre context MVVM notre classe correspond au VueModel.
 */
export class AppComponent implements OnInit {

  constructor(private userApiService: UserApiService) { }
  // -- Déclaration d'une varible titre
  title = 'ContactApp';

  // -- Le contact chois par mon utilisateur
  contactActif: Contact;

  // -- Déclaration d'un objet Contact
  unContact: Contact = {
    id: 1,
    name: 'Robin Tournier',
    username: 'RobinTournier',
    email: 'robin.t@hl-media.fr'
  };

  // -- Tableau de Contacts
  mesContacts: Contact[] = [
    {
      id: 1,
      name: 'Hugo LIEGEARD',
      username: 'hugoliegeard',
      email: 'hugo.l@hl-medial.fr'
    },
    {
      id: 2,
      name: 'Riki NDINGA',
      username: 'rikindinga',
      email: 'riki.n@hl-medial.fr'
    },
    {
      id: 3,
      name: 'Julien CALCERRADA',
      username: 'juliencalcerrada',
      email: 'julien.c@hl-medial.fr'
    },
  ];

  /**
   * Ma fonction displayContact, prend un contact en paramètre et le transmet à la variable contactActif.
   * @param {Contact} contactCliqueParMonUtilisateur
   */

  displayContact(contactCliqueParMonUtilisateur: Contact) {
    this.contactActif = contactCliqueParMonUtilisateur;
    console.log(this.contactActif);
  }
  /**
   * Fonction qui permet de rajouter un nouveau contact dans la liste.
   *
   */
  ajouterContactDansListe(event: any) {
     // Aperçu dans la console
    console.log(event);

    // Récupération du contact dans l'évènement
    const leContact: Contact = event.leContact;

    // Ajout du Contact dans le tableau
    this.mesContacts.push(leContact);
  }

  ngOnInit(): void {
    this.userApiService.getUsers().subscribe(
      contacts => {
        console.log(contacts);
        this.mesContacts = contacts;
      }
    );
  }
}
