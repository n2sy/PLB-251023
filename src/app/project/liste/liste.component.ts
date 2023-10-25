import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from 'src/app/models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent {
  @Input() candsTab: Candidat[] = [];
  @Output() msgToCv = new EventEmitter<Candidat>();
  sendCandToCv(cand) {
    this.msgToCv.emit(cand);
  }
}
