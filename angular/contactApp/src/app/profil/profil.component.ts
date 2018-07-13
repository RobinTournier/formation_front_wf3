import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../shared/models/contact';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
/** Ici on dit à notre composant Profil que la variable contact est attendu en entrée **/
  @Input() contact: Contact;

  constructor() { }

  ngOnInit() {
  }

}
