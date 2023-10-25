import { Component, Input } from '@angular/core';
import { Candidat } from 'src/app/models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() oneCandidate: Candidat;
}
