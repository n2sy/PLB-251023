import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  defaultLanguage = 'js';
  onSubmit(f) {
    console.log(f);
  }

  constructor(private auth: AuthService, private router: Router) {}

  onLogin(f: NgForm) {
    this.auth.login(f.value).subscribe({
      next: (response) => {
        localStorage.setItem('access_token', response['token']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        f.reset();
      },
    });
  }
  onRegister(f) {
    this.auth.register(f.value).subscribe({
      next: (response) => {
        alert(response['message']);
        f.reset();
      },
    });
  }
}
