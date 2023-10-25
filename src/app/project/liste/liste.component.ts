import { Component, Input } from '@angular/core';
import { Candidat } from 'src/app/models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent {
  @Input() candsTab: Candidat[] = [];
}
