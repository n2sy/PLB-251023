import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/models/candidat';
import { FirstService } from 'src/app/services/first.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCandidat: Candidat;
  TabCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 22, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 54, 'directeur'),
    new Candidat(3, 'marge', 'simpson', 43, 'architecte', 'marge.jpeg'),
  ];

  constructor(private firstSer: FirstService) {}

  ngOnInit() {
    this.firstSer.afficherInfos();
  }

  recupererCandidat(cand) {
    this.selectedCandidat = cand;
  }
}
