import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../shared/models/contact';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  @Output ()unContactEstCree = new EventEmitter();
  nouveauContact: Contact = new Contact();
  active = true;
  constructor() { }

  ngOnInit() {
  }
  /** Fonction appelée après le submit du formulaire...**/
  submitContact() {
    console.log(this.nouveauContact);
    /**
     * Lorsque mon formulaire est soumis, ma fonction submitContact() s'execute.
     * J'émet un evenement qui sera écouté par mon application, et qui récupèrera les données
     * du nouveau contact.
     */
    this.unContactEstCree.emit({leContact:  this.nouveauContact});
    // Réinitialisation du Nouveau Contact
    this.nouveauContact = new Contact();
    // Réinitialiser le formulaire
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
