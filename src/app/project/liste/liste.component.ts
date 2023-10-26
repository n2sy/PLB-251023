import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from 'src/app/models/candidat';
import { ListCandidatsService } from 'src/app/services/list-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
  // providers: [ListCandidatsService],
})
export class ListeComponent {
  candsTab: Candidat[] = [];
  @Output() msgToCv = new EventEmitter<Candidat>();

  constructor(private candSer: ListCandidatsService) {}

  ngOnInit() {
    this.candsTab = this.candSer.getAllCandidats();
  }

  sendCandToCv(cand) {
    this.msgToCv.emit(cand);
  }

  showList() {
    console.log(this.candSer.getAllCandidats());
  }
}
