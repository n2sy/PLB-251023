import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirstService {
  constructor() {}

  afficherInfos() {
    console.log('Je suis le FirstService');
  }
}
