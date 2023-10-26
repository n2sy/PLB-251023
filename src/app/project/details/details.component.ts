import { Component, Input } from '@angular/core';
import { Candidat } from 'src/app/models/candidat';
import { ListRecruesService } from 'src/app/services/list-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() selCand: Candidat;

  constructor(private recrueSer: ListRecruesService) {}

  addNewRecrue() {
    this.recrueSer.addRecrue(this.selCand);
  }
}
