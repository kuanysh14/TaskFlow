import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  onLogin() {
    if (this.username && this.password) {
      console.log('Login attempt:', this.username);
      this.router.navigate(['/workspaces']);
    } else {
      alert('Fill the fields!');
    }
  }
}
