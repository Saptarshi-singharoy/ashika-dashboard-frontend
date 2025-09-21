import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  formData = {
    email: '',
    password: '',
  };
  loading: boolean = false;

  async onSubmit() {
    this.loading = true;
    this.authService.signIn(this.formData).finally(() => {
      this.loading = false;
    });
  }
  constructor(private router: Router, private authService: AuthService) {}

  goToForgotPassword() {
    this.router.navigate(['/pre-auth/forgot-password']);
  }
}
