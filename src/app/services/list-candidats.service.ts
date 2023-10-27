import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private allCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 22, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 54, 'directeur'),
    new Candidat(3, 'marge', 'simpson', 43, 'architecte', 'marge.jpeg'),
  ];

  constructor(private http: HttpClient) {}

  addCandidat(newC) {
    newC._id = this.allCandidats[this.allCandidats.length - 1]._id + 1;
    this.allCandidats.push(newC);
    this.http.put;
  }

  updateCandidat(uCand) {
    let i = this.allCandidats.indexOf(uCand);
    this.allCandidats[i] = uCand;
  }

  getAllCandidats() {
    return this.allCandidats;
  }

  getCandidatById(id) {
    return this.allCandidats.find((element) => element._id == id);
  }

  // addCandidat() {
  //   this.allCandidats.push(
  //     new Candidat(4, 'NEW', 'CANDIDAT', 43, 'architecte', 'homer.jpg')
  //   );
  // }
}
