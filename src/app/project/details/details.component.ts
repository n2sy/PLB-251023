import { Component, Input } from '@angular/core';
import { Candidat } from 'src/app/models/candidat';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() selCand: Candidat;
}
