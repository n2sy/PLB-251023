import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private allCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 22, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 54, 'directeur'),
    new Candidat(3, 'marge', 'simpson', 43, 'architecte', 'marge.jpeg'),
  ];

  constructor() {}

  getAllCandidats() {
    return this.allCandidats;
  }

  addCandidat() {
    this.allCandidats.push(
      new Candidat(4, 'NEW', 'CANDIDAT', 43, 'architecte', 'homer.jpg')
    );
  }
}
