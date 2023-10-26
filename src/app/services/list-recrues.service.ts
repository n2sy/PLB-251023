import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable()
export class ListRecruesService {
  tabRecrues: Candidat[] = [];

  constructor() {}

  addRecrue(newRec) {
    if (this.tabRecrues.indexOf(newRec) == -1) this.tabRecrues.push(newRec);
    else alert('Ce candidat a été déjà recruté !');
  }
}
