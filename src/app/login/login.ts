import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  loginAttempts = 0;
  maxAttempts = 3;
  accountBlocked = false;
  loginError = '';

  // Utilisateur mock
  mockUser = { email: 'test@example.com', password: '123456' };

  submit() {
    if (this.accountBlocked) return;
    if (this.loginform.valid) {
      const { email, password } = this.loginform.value;
      if (email === this.mockUser.email && password === this.mockUser.password) {
        alert('Connexion réussie !');
        this.loginError = '';
        this.loginAttempts = 0;
      } else {
        this.loginAttempts++;
        this.loginError = 'Email ou mot de passe incorrect';
        if (this.loginAttempts >= this.maxAttempts) {
          this.accountBlocked = true;
          this.loginError = 'Compte bloqué temporairement. Réessayez plus tard.';
        }
      }
    } else {
      this.loginError = 'Veuillez remplir correctement le formulaire';
    }
  }

  get email() { return this.loginform.get('email'); }
  get password() { return this.loginform.get('password'); }
}
