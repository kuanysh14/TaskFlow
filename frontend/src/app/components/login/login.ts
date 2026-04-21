import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(public apiService: ApiService, private router: Router) {}

  onLogin() {
  this.apiService.login({ username: this.username, password: this.password }).subscribe({
    next: () => this.router.navigate(['/workspaces']),
    error: () => alert('Неверный логин или пароль!')
  });
}
}
