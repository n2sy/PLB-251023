import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-account',
  templateUrl: './details-account.component.html',
  styleUrls: ['./details-account.component.css'],
})
export class DetailsAccountComponent {
  @Input() oneAccount;

  changeStatut(newStatut) {
    this.oneAccount.statut = newStatut;
  }
}
