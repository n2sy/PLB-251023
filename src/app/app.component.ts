import { Component } from '@angular/core';
import { ListCandidatsService } from './services/list-candidats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PLB-251023';

  traitementDuAppComponent(msg) {
    alert(msg);
  }
}
