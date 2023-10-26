import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent {
  constructor(private router: Router) {}
  goToWord() {
    this.router.navigateByUrl('ms-word');
  }

  goToServers() {
    //traitement
    this.router.navigate(['servers']);
  }
}
