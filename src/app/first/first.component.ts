import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  prenom = 'lobna';
  color = 'pink';
  hd = true;

  afficherAlert() {
    alert('Le bouton a été cliqué !');
  }

  traitementDuParent(msgRecu) {
    this.prenom = msgRecu;
  }
}
