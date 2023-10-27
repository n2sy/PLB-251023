import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'http://localhost:3000/auth';
  constructor(private http: HttpClient) {}

  login(identifiants) {
    return this.http.post(`${this.link}/login`, identifiants);
  }

  register(identifiants) {
    return this.http.post(`${this.link}/register`, identifiants);
  }

  isLogged() {
    let token = localStorage.getItem('access_token');
    if (token) return true;
    return false;
  }

  logout() {
    localStorage.removeItem('access_token');
  }
}
