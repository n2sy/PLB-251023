import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
})
export class AddAccountComponent {
  tabStatuts = ['', 'active', 'inactive', 'unknown'];
  nameAccount = '';
  statutAccount = '';
  @Output() msgToHomeAccount = new EventEmitter();

  onAdd() {
    this.msgToHomeAccount.emit({
      nom: this.nameAccount,
      statut: this.statutAccount,
    });
  }
}
