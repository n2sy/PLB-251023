import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from 'src/app/models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() oneCandidate: Candidat;
  @Output() msgToListe = new EventEmitter<Candidat>();

  sendCandToListe() {
    this.msgToListe.emit(this.oneCandidate);
  }
}
