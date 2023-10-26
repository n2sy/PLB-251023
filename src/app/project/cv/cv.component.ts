import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/models/candidat';
import { FirstService } from 'src/app/services/first.service';
import { ListCandidatsService } from 'src/app/services/list-candidats.service';
import { ListRecruesService } from 'src/app/services/list-recrues.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [ListRecruesService],
})
export class CvComponent {
  selectedCandidat: Candidat;
  TabCandidats: Candidat[] = [];

  constructor(
    private firstSer: FirstService,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit() {
    this.firstSer.afficherInfos();
    this.TabCandidats = this.candSer.getAllCandidats();
  }

  recupererCandidat(cand) {
    this.selectedCandidat = cand;
  }

  showList() {
    console.log(this.candSer.getAllCandidats());
  }

  addNewCandidat() {
    this.candSer.addCandidat();
  }
}
