import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  link = 'http://localhost:3000/cv/persons';
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

  addCandidatAPI(newC) {
    return this.http.post(this.link, newC);
  }

  updateCandidat(uCand) {
    let i = this.allCandidats.indexOf(uCand);
    this.allCandidats[i] = uCand;
  }
  updateCandidatAPI(uCand) {
    return this.http.put(`${this.link}/${uCand._id}`, uCand);
  }

  deleteCandidatAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }

  getAllCandidatsAPI() {
    return this.http.get(this.link);
  }
  getAllCandidats() {
    return this.allCandidats;
  }

  getCandidatByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
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
