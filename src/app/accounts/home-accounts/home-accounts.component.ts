import { Component } from '@angular/core';

@Component({
  selector: 'app-home-accounts',
  templateUrl: './home-accounts.component.html',
  styleUrls: ['./home-accounts.component.css'],
})
export class HomeAccountsComponent {
  listAccounts = [
    {
      nom: 'Master Account',
      statut: 'active',
    },
    {
      nom: 'PH Account',
      statut: 'inactive',
    },
  ];

  recupererNewAccount(newAccount) {
    this.listAccounts.push(newAccount);
  }
}
